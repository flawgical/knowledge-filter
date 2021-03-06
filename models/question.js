const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  content: {type: String, required: true},
  filter: {type: Schema.Types.ObjectId, ref: 'Filter'},
  index: {type: Number, default: 0},
  author: String
}, {
  timestamps: true
})

const questionSchema = new Schema({
  subject: {type: String, required: true},
  content: {type: String, required: true},
  asker: {type: Schema.Types.ObjectId, ref: 'User'},
  isPublic: {type: Boolean, default: false},
  isLocked: {type: Boolean, default: false},
  answers: [answerSchema],
  likedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
  favoritedBy: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)