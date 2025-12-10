# Technical-tes
# CRUD Users App - Backend + Frontend + Docker

Este proyecto es un CRUD simple de usuarios hecho con:

- **Backend:** NestJS + PostgreSQL + TypeORM
- **Frontend:** Next.js (axios)
- **Data Base:** PostgreSQL (Docker)

Permite crear, listar y eliminar usuarios desde una interfaz.


---


### Instrucciones para el repositorio

git clone git@github.com:Afrejef69/Technical-tes.git
cd turepositorio

### Requisitos
| Herramienta    | Versión recomendada |
| -------------- | ------------------- |
| Docker         | ≥ 20                |
| Docker Compose | ≥ 1.29              |
| Git            | ≥ 2.30              |

docker -v
docker compose version
git --version

### Levantar Servicios con Docker
1) Construir
docker compose build

2) Ejecutar
docker compose up -d

### Ejecutar Migraciones (Obligatorio)

Después de levantar Docker:

- Entrar a la carpeta de backend:

cd backend

- Ejecutar migraciones:

yarn migration:run

### Detener y Limpiar

- Detener contenedores:

docker compose down

- Eliminar contenedores + base de datos:

docker compose down -v