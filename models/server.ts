import express, { Application } from 'express';
import userRouter from '../routes/users';

class Server{
    
    private app: Application;
    private port: string;
    private apiPaths= {
        users: '/api/users'
    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8000';

        // Definir mis rutas
        this.routes();

    }

    routes() {
        this.app.use( this.apiPaths.users, userRouter )
    }

    listen() {

        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en http://localhost/${this.port}`)
        })
    }

}

export default Server;