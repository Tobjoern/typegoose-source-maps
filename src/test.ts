// NodeJS: 14.9.0
// MongoDB: 4.2-bionic (Docker)
import { getModelForClass, prop } from "@typegoose/typegoose"; // @typegoose/typegoose@7.3.5
import * as mongoose from "mongoose"; // mongoose@5.10.3 @types/mongoose@5.7.36

class User {
  @prop()
  public username?: string;
}
const UserModel = getModelForClass(User);

(async () => {
  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: "verifyMASTER", useCreateIndex: true, useUnifiedTopology: true });

  const doc = new UserModel({ username: "user1" });

  console.log(doc);

  await mongoose.disconnect();
})();
