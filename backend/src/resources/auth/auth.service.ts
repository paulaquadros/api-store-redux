import { Usuario } from '../../models/Usuario';
import bycrpt from 'bcryptjs';
import { LoginDto } from './auth.types';
import { tiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

export const checkCredentials = async ({
  email,
  senha,
}: LoginDto): Promise<Usuario | null> => {
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return null;
  const ok = await bycrpt.compare(senha, usuario.senha);
  return ok ? usuario : null;
};

export const checkIsAdmin = async (id: string): Promise<boolean> => {
  const usuario = await Usuario.findOne({ where: { id } });
  if (!usuario) return false;
  return usuario.tipoUsuarioId === tiposUsuarios.ADMIN;
};
