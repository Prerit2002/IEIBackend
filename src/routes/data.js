const express = require("express");
const router = express.Router();


const Data = require("../models/data");

router.post("/data", async (req, res) => {
  

  try {
    const data = new Data(req.body);
    await data.save();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
})

router.get("/data", async (req, res) => {
    try {
        const data = await Data.find({});
        res.send(data);
    } catch (e) {
        res.status(500).send();
    }
    })

module.exports = router;