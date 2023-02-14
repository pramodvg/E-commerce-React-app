import Mongoose from "mongoose";

const todoListSchema = Mongoose.Schema(
    {
        googleId:{type: String, require:true},
        title: { type: String, require: true },
        dis: { type: String, require: true },
        isSelected: { type: Boolean, require: true }
    }
)

export default Mongoose.model("TodoList", todoListSchema)

