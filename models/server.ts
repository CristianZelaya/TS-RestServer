import express, { Application } from 'express';
import userRouter from '../routes/users';
import cors from 'cors';
import db from '../db/connection';

class Server{
    
    private app: Application;
    private port: string;
    private apiPaths= {
        users: '/api/users'
    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        // Metodos iniciales
        this.middlewares();

        // Definir mis rutas
        this.routes();

    }

    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Database Online');
            
        } catch (error: any) {

            throw new Error( error );
            
        }

    }

    //  Son funciones que se ejecutan antes que las rutas
    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta publica
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.apiPaths.users, userRouter );

    }

    listen() {

        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en http://localhost/${this.port}`)
        });

    }

}

export default Server;