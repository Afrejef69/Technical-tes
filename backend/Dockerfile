# ---- BUILD STAGE ----
FROM node:20 AS builder

WORKDIR /app

# Copiar package.json y package-lock.json y hacer npm install
COPY package*.json ./
RUN npm install

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# ---- RUN STAGE ----
FROM node:20

WORKDIR /app

# Copiar package.json y solo instalar dependencias de producción
COPY package*.json ./
RUN npm install --only=production

# Copiar la carpeta dist del builder
COPY --from=builder /app/dist ./dist

# Exponer el puerto de la app
EXPOSE 3001

# Comando de ejecución
CMD ["node", "dist/main.js"]
