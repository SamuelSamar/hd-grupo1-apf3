# Dockerfile para construir y servir una aplicación Angular con Nginx
FROM node:18-alpine AS builder
WORKDIR /app

# Copiamos package files e instalamos dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiamos el resto del código fuente
COPY . .

# Construimos la aplicación
RUN npm run build

# Etapa de producción
# Usamos una imagen de Nginx para servir el contenido estático
FROM nginx:alpine

# Copiamos la configuración personalizada de Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

# Copiamos el build desde builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]