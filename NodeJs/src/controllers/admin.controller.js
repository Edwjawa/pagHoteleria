import { selectAll, insert, update, erase } from "./crud.globalController.js";

export const dataGet = async (req,res) => {
    try {
        const {data} = req.body;
        const [rows] = await selectAll("*", data);
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
}

export const dataInsert = async (req, res) => {
    try {
        const {type, data} = req.body;
        const [rows] = await insert(type, data);
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
}

export const dataUpdate = async (req, res) => {
    try {
        const {type, arrayColumns, condicional, arrayInfo} = req.body;
        const [rows] = await update(type, arrayColumns, condicional, arrayInfo);
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
}

export const dataDelete = async (req, res) => {
    try {
        const {type, condicional, info} = req.body;
        const [rows] = await erase (type, condicional, info);
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
}