'use client'
import axios from "axios";
import { useState } from "react";

export default function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState<number | string>("");

    const createUser = async () => {
        try {
            await axios.post(process.env.NEXT_PUBLIC_API_URL + `/users`, {
                name,
                email,
                age: Number(age),
            });
            alert("Create user!");
            setName("");
            setEmail("");
            setAge("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className="mx-auto p-24">
      <h1 className="text-3xl font-bold mb-5">Crear Usuario</h1>

      <input 
        placeholder="Nombre" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        className="border p-2 w-full mb-3"
      />

      <input 
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input 
        type="number"
        placeholder="Edad"
        value={age}
        onChange={e => setAge(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button onClick={createUser} className="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </main>
    );
}
