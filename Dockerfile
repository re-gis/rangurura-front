# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Create an app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND yarn.lock are copied
# where available (Yarn)
COPY ["package.json", "package-lock.json", "./"]

# Install dependencies using NPM
RUN rm -rf node_modules
RUN npm install -g npm@10.8.0 --force
RUN npm install next@latest --force
RUN npm install webpack@latest --force
RUN npm uninstall eslint --engine-strict=false
RUN npm audit fix --force
RUN npm install eslint@^8.56.0 --engine-strict=false --force
RUN npm install --engine-strict=false --force

# If you are building your code for production
# RUN npm install --production=true

# Bundle app source
COPY . .

# Build the application (if needed)
# Replace with your actual build command
# In Next.js, the build output is typically in the .next folder
RUN npm cache clean --force
RUN npm run  build

# Expose the port your application will listen on
EXPOSE 5200

ENV NODE_ENV=production

# Define the command to run your application
CMD [ "npm", "run","dev" ]
