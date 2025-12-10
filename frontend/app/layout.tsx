import "./globals.css";
import NavBar from "@/components/NavBar";

const menuItems = [
  { name: "Crear Usuario", url: "/create" },
  { name: "Lista Usuarios", url: "/users" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NavBar menuItems={menuItems} />
        {children}
      </body>
    </html>
  );
}
