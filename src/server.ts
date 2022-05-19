import express, { json } from 'express'
import cors from 'cors'
import { routes } from './Routes/routes'

const app = express()
const PORT = 4000

app.use(cors({
  origin: '*'
}))

app.use(express.json())
app.use(routes)
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`))