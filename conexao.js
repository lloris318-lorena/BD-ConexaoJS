import mysql from 'mysql2';

//npm i mysql2 --save Instalar pacote no js

export default class Connection {
    static connection(){
        const conect = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"biblio"
        });
        conect.connect((err) => {
            if(err){
                console.log("Erro de conexão");
            }
            console.log("Conectou!");
        });
        return conect;
    }
}

