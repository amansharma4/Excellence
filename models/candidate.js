const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
   unique:false
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  firstRound: {
    type: Number,
  },
  secondRound: {
    type: Number,
  },
  thirdRound: {
    type: Number,
  },
  avg: {
    type: Number,
  },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
