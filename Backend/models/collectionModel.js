const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor', required: true },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
