from node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm i -g serve
ENTRYPOINT ["serve", "-s", "build"]