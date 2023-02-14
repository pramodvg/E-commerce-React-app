import Mongoose from "mongoose";

const registrationSchema = new Mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default Mongoose.model("registration", registrationSchema);
