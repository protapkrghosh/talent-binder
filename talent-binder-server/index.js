require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
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

      // Jobs API
      app.get("/jobs", async (req, res) => {
         const cursor = await jobsCollection.find().toArray();
         res.send(cursor);
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
