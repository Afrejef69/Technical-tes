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
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#0f0f0f] py-20 px-6 text-gray-200">
      <div className="w-full max-w-3xl bg-[#1a1a1a] shadow-xl rounded-2xl p-8 border border-gray-800 animate-fade">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Lista de Usuarios</h1>

        {users.length === 0 ? (
          <p className="text-center text-gray-400">No hay usuarios registrados.</p>
        ) : (
          <table className="w-full border-collpse rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-200 text-center">
              <tr className="bg-[#222] text-gray-300">
                <th className="py-3 px-2">ID</th>
                <th className="py-3 px-2">Nombre</th>
                <th className="py-3 px-2">Email</th>
                <th className="py-3 px-2">Edad</th>
                <th className="py-3 px-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="text-center border-b border-gray-800 hover:bg-[#2c2c2c] transition">
                  <td className="p-3 text-gray-400">{u.id}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3 text-gray-300">{u.email}</td>
                  <td className="p-3 text-gray-300">{u.age} años</td>
                  <td className="p-3">
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
      </div>
    </main>
  );
}
