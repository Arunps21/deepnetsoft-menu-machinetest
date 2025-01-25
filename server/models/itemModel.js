const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'menu',
    required: true,
  },
});

const itemModel = mongoose.model('item', itemSchema);

module.exports = itemModel;
