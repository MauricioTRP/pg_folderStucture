import { Router } from "express";
import * as db from "../db/db.mjs"

// Creamos instancia del enrutador
const router = Router()

router.get("/", async (req, res) => {
  try {
    // texto consulta SQL
    const text = "SELECT * FROM ropa"
    const result = await db.query(text)
  
    res.json(result)
  } catch (error) {
    console.error(error)

    res.json(error)
  }
})

router.get("/:id")

// INSERT INTO ropa
router.post("/", async (req, res) => {
  //* req.body = { talla: valor, tipo: valor } */
  const prenda = req.body
  try {
    const text = "INSERT INTO ropa(tipo, talla) VALUES($1, $2) RETURNING *"
    const values = [prenda.tipo, prenda.talla]

    const result = await db.query(text, values)
    res.json(result)
  } catch (error) {
    console.error(error)
    res.json(error)
  }
})

export { router }