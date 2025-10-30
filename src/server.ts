import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import mustache from 'mustache-express'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const server = express()

server.engine('mustache', mustache())
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static(path.join(__dirname, '../public')))


//Rotas estarão aqui

server.listen(process.env.PORT)
