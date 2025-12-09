export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsuarios(): Promise<Usuario[]> {
  const res = await fetch(`${API_URL}/usuarios`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function createUsuario(usuario: Omit<Usuario, 'id'>): Promise<Usuario> {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario),
  });
  if (!res.ok) throw new Error('Error al crear usuario');
  return res.json();
}

export async function deleteUsuario(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/usuarios/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error al eliminar usuario');
}
