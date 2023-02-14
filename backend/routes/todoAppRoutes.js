import express from 'express'
import todoAppApi from '../controller/todoAppApi.js'

const route = express.Router()

route.get('/todoList', todoAppApi)

export default route

