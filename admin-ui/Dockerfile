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

WORKDIR /app

# Copy files specifying dependencies
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm ci --loglevel=$NPM_LOG_LEVEL

# Copy all the files
COPY . .

# Build code
RUN npm run build


FROM nginx´

# Expose the port the server listens to
EXPOSE 3001

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
