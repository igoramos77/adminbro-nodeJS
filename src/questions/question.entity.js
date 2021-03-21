const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  enunciado: {
    type: String,
    required: true,
  },
  alternativaA: {
    type: String,
    required: true,
  },
  alternativaA: {
    type: String,
    required: true,
  },
  alternativaB: {
    type: String,
    required: true,
  },
  alternativaC: {
    type: String,
    required: true,
  },
  alternativaD: {
    type: String,
    required: true,
  },
  alternativaE: {
    type: String,
    required: true,
  },
  alternativa_correta: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E'],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = { QuestionSchema, Question };
