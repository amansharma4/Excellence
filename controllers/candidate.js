const Candidate = require("../models/candidate");

exports.addCandidate = async (req, res, next) => {
  const { name, email, firstRound, secondRound, thirdRound } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "please add name ",
    });
  } else if (!email) {
    return res.status(400).json({
      success: false,
      msg: "please add email ",
    });
  } else {
    
    let number = parseInt(firstRound) + parseInt(secondRound) + parseInt(thirdRound);
    console.log(number);
    const avg = number / 3;
    const candidate = await Candidate.create({
      name,
      email,
      firstRound,
      secondRound,
      thirdRound,
      avg,
    });

    candidate.save();
    res.status(200).json({
      success: true,
      payload: candidate,
    });
  }
};

exports.getCandidate = async (req, res, next) => {
  const candidate = await Candidate.find().sort([["avg", -1]]);
  res.status(200).json({
    success: true,
    payload:candidate,
  });
};
