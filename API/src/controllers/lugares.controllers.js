import { pool } from "../db/db.js";
import handleErrors from "../middleware/handleErrors.js";

export const getLugares = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM lugar");
    res.json(rows);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const getLugaresByDestacado = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM lugar WHERE destacado = 1");
    if (rows.length === 0) {
      res.json({ message: "No hay lugares destacados" });
    }

    res.json(rows);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const getLugaresById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM lugar WHERE id = ?", [id]);
    if (rows.length === 0) {
      res.json({ message: "No hay lugares con ese id" });
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrors(res, error);
  }
};
