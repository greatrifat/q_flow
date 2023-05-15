import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://greatrifat:greatrifat@qflow1.lsqposr.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { connect };

