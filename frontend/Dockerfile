# ---- BUILD STAGE ----
FROM node:20 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- RUN STAGE ----
FROM node:20

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

EXPOSE 3000
CMD ["npm", "start"]

