import express from 'express'
import { router as ropa } from './routes/ropa.mjs'
// import { router as usuario } from ''

const app = express()

app.listen(3000, () => console.log("App en puerto 3000"))

app.use(express.json())

app.use("/ropa", ropa)
// app.use("/usuario", usuario)
// /ropas -> /ropa/:id 