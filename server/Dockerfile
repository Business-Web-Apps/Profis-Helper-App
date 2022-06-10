# Use node as the base image
FROM node:16.13.1-alpine3.14 as builder

# Define how verbose should npm install be
ARG NPM_LOG_LEVEL=silent
# Hide Open Collective message from install logs
ENV OPENCOLLECTIVE_HIDE=1
# Hiden NPM security message from install logs
ENV NPM_CONFIG_AUDIT=false
# Hide NPM funding message from install logs
ENV NPM_CONFIG_FUND=false

# Set the working directory
WORKDIR /app

# Copy files specifying dependencies
COPY ./package*.json ./

# Install dependencies
RUN npm ci --loglevel=$NPM_LOG_LEVEL

# Copy Prisma schema
COPY ./prisma/schema.prisma ./prisma/

# Generate Prisma client
RUN npm run prisma:generate

# Copy all the files
COPY . .

# Build code
RUN npm run build

# Expose the port the server listens to
EXPOSE 3000

# Run server
CMD [ "node", "dist/main.js"]