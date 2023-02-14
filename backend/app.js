import Express  from "express"
import cores from "cors"
import todoAppRoute from './routes/todoAppRoutes.js'
const app = Express()

app.use(cores())
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }));

app.use('/',todoAppRoute)

export default app

