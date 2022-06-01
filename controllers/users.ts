import { Request, Response } from 'express';

export const getUsuarios = ( req: Request, res: Response ) => {

    res.json({
        msg: 'GetUsuarios'
    });

}

export const getUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'GetUsuario',
        id
    });

}

export const postUsuario = ( req: Request, res: Response ) => {

    const { body } = req;
    
    res.json({
        msg: 'PostUsuario',
        body
    });

}

export const putUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;
    
    res.json({
        msg: 'PutUsuario',
        body
    });

}

export const deleteUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;
    
    res.json({
        msg: 'deleteUsuario',
        id
    });

}