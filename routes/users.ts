import { Router } from 'express';
import { getUsuarios, 
         getUsuario, 
         putUsuario, 
         postUsuario, 
         deleteUsuario } from '../controllers/users';

const router = Router();

router.get('/',       getUsuarios);
router.get('/:id',    getUsuario);
router.post('/',      postUsuario);
router.put('/:id',    putUsuario);
router.delete('/:id', deleteUsuario);


export default router;