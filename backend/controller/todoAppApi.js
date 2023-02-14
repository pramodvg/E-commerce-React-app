import todoList from "../model/todoList.js";

const getTodoList = (req, res) => {
    todoList.find((err, data) => {
        if (err) {
            res.status(500).send("Error in gettodolist 500")
        } else {
            res.status(200).send(data)
        }
    })
}
export default getTodoList

