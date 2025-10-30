import express from 'express'
import 'dotenv/config'
import path from 'path'
import mustache from 'mustache-express'
import { fileURLToPath } from 'url'
import { router as mainRoute } from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = express()

server.engine('mustache', mustache())
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoute)
server.use((req, res) => {
  res.render('pages/404')
})

//Rotas estarão aqui

server.listen(process.env.PORT, () => {
  console.log("Server running on port 4000...")
})
