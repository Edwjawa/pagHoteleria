import { select, insert, update,erase } from "./crud.globalController.js";

export const userGet = async (req, res) => {
    try {
        const {data} = req.body;
        const [rows] = await select("*", "usuario", "correoUs", "\'"+data+"\'");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
}

export const userPost = async(req, res) => {
    try {
        const {numDoc, tipoUsu, tipoDoc, name, lastname, numcel, typegender, birthDate, email, password} = req.body;
        const data = "\'" +numDoc+ "\'," + "\'" +tipoUsu+ "\'," + "\'" +tipoDoc+ "\'," + "\'" +name+ "\'," + "\'" +lastname+ "\'," + "\'" +numcel+ "\'," + "\'" +typegender+ "\'," + "\'" +birthDate+ "\'," + "\'" +email+ "\'," + "\'" +password+ "\'";
        console.log(data);
        const [rows] = await insert('usuario (numDocUs, tipoUs, tipoDocUs, nombreUs, apellidoUS, celularUs, generoUs, fecNacimientoUs, correoUs, contraseñaUs)', data);
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }

};

export const userPut = async(req, res) => {
    try {
        const {numDoc, tipoUsu, tipoDoc, name, lastname, numcel, typegender, birthDate, email, password} = req.body;
        const [rows] = await update('usuario', ['numDocUs', 'tipoUs', 'tipoDocUs', 'nombreUs','apellidoUS', 'celularUs', 'generoUs', 'fecNacimientoUs', 'correoUs', 'contraseñaUs'], [numDoc, tipoUsu, tipoDoc, name, lastname, numcel, typegender, birthDate, email, password],'numDocUs' ,numDoc);
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
    
};

export const userDelete = async(req, res) => {
    try {
        const {numDoc} = req.body;
        const [rows] = await erase ("usuario","numDocUs", numDoc);
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message:"We have technical dificulties" + error
        });
    }
    
};
