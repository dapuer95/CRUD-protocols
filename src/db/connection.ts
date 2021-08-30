import mongoose from 'mongoose';

const connect = async (): Promise<boolean> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default connect;
