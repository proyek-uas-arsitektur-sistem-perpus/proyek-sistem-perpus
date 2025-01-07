# Gunakan Node.js sebagai base image
FROM node:18

# Atur working directory di container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode backend ke dalam container
COPY . .

# Expose port yang digunakan backend
EXPOSE 5000

# Jalankan aplikasi
CMD ["node", "server.js"]
