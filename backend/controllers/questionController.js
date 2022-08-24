const Question = require("../model/question");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// creat a new Question api/v1/question

exports.newQuestion = catchAsyncErrors(async (req, res, next) => {
  const {question, option,answer}= req.body
  const options = option.split(',')
  console.log(answer)
  
  const oneQuestion = await Question.create({
    question,
    options,
    answer
  });
  res.status(201).json({
    success: true,
    oneQuestion
  });
})

// get all the Question api/v1/test

exports.allQuestion= catchAsyncErrors(async (req, res, next) => {
  const questions = await Question.find();
  const questionCount = await Question.countDocuments();
  res.status(201).json({
    success: true,
    questionCount,
    questions
  });
})