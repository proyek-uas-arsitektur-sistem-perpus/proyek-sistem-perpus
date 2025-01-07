# Gunakan Node.js sebagai base image
FROM node:18

# Atur working directory di container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode frontend ke dalam container
COPY . .

# Build aplikasi React untuk production
RUN npm run build

# Gunakan Nginx untuk serve frontend
FROM nginx:1.23
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port untuk akses frontend
EXPOSE 80
