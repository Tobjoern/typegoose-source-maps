// NodeJS: 16.8.0
// MongoDB: 4.2-bionic (Docker)
import 'source-map-support/register';
import { getModelForClass, prop } from '@typegoose/typegoose'; // @typegoose/typegoose@8.3.0
import * as mongoose from 'mongoose'; // mongoose@5.13.9

class User {
  @prop({ required: true })
  public name!: string;
}

const UserModel = getModelForClass(User);

async function doStuff() {
  const doc = new UserModel();

  await doc.save();
}

(async () => {
  await mongoose.connect(`mongodb://localhost:27017/experiments-3`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  try {
    await doStuff();
  } catch (e) {
    console.error(e);
  }

  await mongoose.disconnect();
})();
