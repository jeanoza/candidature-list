const mongoose = require("mongoose");

const societySchema = mongoose.Schema({
  date: {
    type: String,
    default: Date.now,
  },
  name: String,
  contact: String,
  mail: String,
  telephone: String,
  post_name: String,
  techniques: [String],
  url: String,
  date_relaunch1: String,
  date_relaunch2: String,
  result: Number,
  /**
   * 0: refusé
   * 1: admis
   * 2: en cours
   */
});

const Society = mongoose.model("Society", societySchema);

module.exports = { Society };

//Date("dateString")
/**
 * 
 new Date(Date.now()).toJSON();
"2021-04-01T19:44:58.595Z"
new Date(2021-04-01).toJSON();
"1970-01-01T00:00:02.016Z"
new Date(2020-04-01).toJSON();
"1970-01-01T00:00:02.015Z"
 */
