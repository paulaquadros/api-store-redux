import { Request, Response, NextFunction } from 'express';
import { tiposUsuarios } from '../resources/tipoUsuario/tipoUsuario.constants';

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.tipoUsuarioId === tiposUsuarios.ADMIN) next();
  else res.status(401).json({ msg: 'Você não tem permissão fazer isso' });
};

export default checkAdmin;
