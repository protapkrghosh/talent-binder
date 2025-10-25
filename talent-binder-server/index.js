require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.TALENT_BINDER_URI, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

async function run() {
   try {
      await client.connect();
      const jobsCollection = client.db("talentBinderDB").collection("jobs");
      const applicationCollection = client
         .db("talentBinderDB")
         .collection("application");

      // Jobs related API
      app.get("/jobs", async (req, res) => {
         const { email } = req.query;
         const query = {};
         if (email) {
            query.hr_email = email;
         }
         const cursor = await jobsCollection.find(query).toArray();
         res.send(cursor);
      });

      // Could be done but should not be done.
      // app.get("/jobsByEmailAddress", async (req, res) => {
      //    const { email } = req.query;
      //    const query = { hr_email: email };
      //    const result = await jobsCollection.find(query).toArray();
      //    res.send(result);
      // });

      app.get("/jobs/:id", async (req, res) => {
         const { id } = req.params;
         const query = { _id: new ObjectId(id) };
         const result = await jobsCollection.findOne(query);
         res.send(result);
      });

      app.post("/jobs", async (req, res) => {
         const newJob = req.body;
         const result = await jobsCollection.insertOne(newJob);
         res.send(result);
      });

      // Job application related APIS
      app.get("/applications", async (req, res) => {
         const { email } = req.query;
         const query = { applicant: email };
         const result = await applicationCollection.find(query).toArray();

         for (const application of result) {
            const jobId = application.jobId;

            if (!ObjectId.isValid(jobId)) {
               continue;
            }

            const jobQuery = { _id: new ObjectId(jobId) };
            const job = await jobsCollection.findOne(jobQuery);

            if (job) {
               application.company = job.company;
               application.title = job.title;
               application.company_logo = job.company_logo;
            }
         }
         res.send(result);
      });

      // Show all job applicant related api
      app.get("/applications/job/:job_id", async (req, res) => {
         const { job_id } = req.params;
         const query = { jobId: job_id };
         const result = await applicationCollection.find(query).toArray();
         res.send(result);
      });

      app.post("/applications", async (req, res) => {
         const application = req.body;
         const result = await applicationCollection.insertOne(application);
         res.send(result);
      });

      await client.db("admin").command({ ping: 1 });
      console.log(
         "Pinged your deployment. You successfully connected to MongoDB!"
      );
   } finally {
      // await client.close();
   }
}
run().catch(console.dir);

app.get("/", (req, res) => {
   res.send("Talent Binder is running");
});

app.listen(port, () => {
   console.log(`Talent Binder running on the port ${port}`);
});
