'use client'
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/users`);
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const load = async () => await fetchUsers();
    load();
  }, []);

  const deleteUser = async (id: number) => {
    const confirmDelete = confirm(`¿Seguro que deseas eliminar al usuario con ID ${id}?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/users/${id}`);
      alert("Usuario eliminado");
      fetchUsers();  // 🟢 Actualiza la lista luego de eliminar
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="mx-auto p-24 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-5 text-center">Lista de Usuarios</h1>

      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-center">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Email</th>
              <th className="p-2">Edad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="text-center border-b">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.age} años</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
