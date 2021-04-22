const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
const { Society } = require("./model/Society");

mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost/alternance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.post("/api/society/register", (req, res) => {
  const society = new Society(req.body);

  society.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, data });
  });
});

app.get("/api/society", async (req, res) => {
  const result = await Society.find({}).sort("-date");
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404);
  }
});

app.post("/api/society/update", (req, res) => {
  const filter = { _id: req.body._id };
  Society.findOneAndUpdate(filter, req.body, (err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

app.post("/api/society/delete", (req, res) => {
  Society.deleteOne({ _id: req.body._id }, (err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Alternance App est à port 5000`)
);
