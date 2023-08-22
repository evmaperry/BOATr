import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(results).status(200);
})

export default router