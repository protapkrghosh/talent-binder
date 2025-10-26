require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(
   cors({
      origin: [`${process.env.TALENT_BINDER_BASEURL_CLIENT}`],
      credentials: true,
   })
);
app.use(express.json());
app.use(cookieParser());

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

      // JWT Token related api
      app.post("/jwt", async (req, res) => {
         const userData = req.body;
         const token = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "1d",
         });

         // Set token in the cookie
         res.cookie("token", token, {
            httpOnly: true,
            secure: false,
         });
         res.send({ success: true });
      });

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

      app.get("/jobs/applications", async (req, res) => {
         const { email } = req.query;
         const query = { hr_email: email };
         const jobs = await jobsCollection.find(query).toArray();

         // Should use aggregate to have optimum date fetching
         for (const job of jobs) {
            const applicationQuery = { jobId: job._id.toString() };
            const application_count =
               await applicationCollection.countDocuments(applicationQuery);
            job.application_count = application_count;
         }
         res.send(jobs);
      });

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
         console.log("Inside applications api", req.cookies);
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

      app.patch("/applications/:id", async (req, res) => {
         const { id } = req.params;
         const filter = { _id: new ObjectId(id) };
         const updatedDoc = {
            $set: {
               status: req.body.status,
            },
         };
         const result = await applicationCollection.updateOne(
            filter,
            updatedDoc
         );
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
