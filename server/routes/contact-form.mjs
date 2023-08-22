import express from 'express';
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb';

const router = express.Router();

// get all records from contact_form_submission collection
router.get("/", async (req, res) => {
  let collection = await db.collection('contact_form_submissions');
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// gets a single record from contact_form_submissions
router.get("/:id", async (req, res) => {
  let collection = await db.collection('contact_form_submissions');
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});


// when a post request is sent to the server,
// this executes and inserts something into the db
router.post('/', async (req, res) => {
  let newDocument = {
    name: req.body.name,
    email: req.body.email,
    wantsInvestmentLetter: req.body.wantsInvestmentLetter,
    wantsTipsLetter: req.body.wantsTipsLetter,
    wantsPromosLetter: req.body.wantsPromosLetter
  }
  let collection = await db.collection('contact_form_submissions')
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204)
})

export default router