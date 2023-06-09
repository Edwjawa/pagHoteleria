import {pool} from "../db.js";

const updateConstructor = (table, condicionales, data, location, info) => {
    let stringCode = 'UPDATE ' +table+ ' SET ';
    for (let i = 0; i < condicionales.length; i++) {
        if(i == condicionales.length - 1){
            stringCode = stringCode + ' WHERE ' +location+ '= ' +'\''+info+'\''+ ';';
        }else if(i == condicionales.length - 2){
            stringCode = stringCode  +condicionales[i]+ '= ' +'\''+data[i]+'\''
        }else{
            stringCode = stringCode  +condicionales[i]+ '= ' +'\''+data[i]+'\''+ ', ';
        }
        /*
        UPDATE usuario SET numDocUs= '1126644317', 
        tipoUs= '1', tipoDocUs= 'TI', nombreUs= 'Hag', 
        apellidoUS= 'aaaaaaaaaaaaaaaaaaaaaa', celularUs= 3133281396,
        generoUs= 'Male', fecNacimientoUs= '2023-05-08', 
        correoUs= "video@gmail.com" WHERE numDocUs= "1126644317"
        */
    }
    console.log(stringCode);
    return stringCode;
};

export const selectAll = (location, table) => pool.query('SELECT '+location+' FROM '+table);
export const select = (location, table, condicional, data) => pool.query('SELECT '+location+' FROM '+table+' WHERE '+condicional+'= '+data);
export const insert = (table, data) => pool.query('INSERT INTO '+table+' VALUES ('+data+');');
export const update = (table, condicionales, data, location, info) => pool.query(updateConstructor(table, condicionales, data, location, info));
export const erase = (table,condicional,data) => pool.query('DELETE FROM '+table+' WHERE ' + condicional + '= ' + data);