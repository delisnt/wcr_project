# Usa un'immagine ufficiale di Node.js come base
FROM node:18 AS build

# Imposta la cartella di lavoro
WORKDIR /app

# Copia il file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia tutti i file del progetto
COPY . .

# Compila l'app Angular in modalità produzione
RUN npm run build --prod

# Usa un'immagine leggera di Nginx per servire l'applicazione
FROM nginx:alpine

# Copia i file compilati nella directory di Nginx
COPY --from=build /app/dist/wcr_project/browser /usr/share/nginx/html

# Esponi la porta 80
EXPOSE 80

# Avvia Nginx
CMD ["nginx", "-g", "daemon off;"]
