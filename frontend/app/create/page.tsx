'use client'
import axios from "axios";
import { useState } from "react";

type FormErrors = {
  name?: string;
  email?: string;
  age?: string;
}

export default function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState<number | string>("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; age?: string }>({});
    const [success, setSuccess] = useState("");

    const validate = () => {
      const newErrors: FormErrors = {};

      if (!name.trim()) newErrors.name = "It's mandatory to put a name.";
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "wrong email";
      if (!age || Number(age) < 18) newErrors.age = "Must be of legal age";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }

    const createUser = async () => {
      setSuccess("");
      if (!validate()) return;
        try {
            await axios.post(process.env.NEXT_PUBLIC_API_URL + `/users`, {
                name,
                email,
                age: Number(age),
            });
            setSuccess("User create succesfully");
            setName("");
            setEmail("");
            setAge("");
        } catch (err: unknown) {
            if (axios.isAxiosError(err) && err.response?.data?.message) {
              setErrors({ email: err.response.data.message });
            } else {
              setErrors({ email: "Unexpected error" });
            }
        }
    };

    return (
    <main className="container-center">
      <h1 className="title-dark">Crear Usuario</h1>

      <input 
        placeholder="Nombre" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        className="input-dark"
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      <input 
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input-dark mt-3"
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <input 
        type="number"
        placeholder="Edad"
        value={age}
        onChange={e => setAge(e.target.value)}
        className="input-dark mt-3"
      />
      {errors.age && <p className="error-text">{errors.age}</p>}

      <button onClick={createUser} className="btn-dark mt-4">
        Guardar
      </button>
      {success && <p className="success-text mt-2">{success}</p>}
    </main>
    );
}
