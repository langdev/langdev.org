FROM node
WORKDIR /a
COPY package.json yarn.lock ./
RUN yarn
COPY tsconfig.json ./
COPY static/main.ts static/
RUN yarn tsc

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY index.html ./
COPY static/*.css static/*.jpg static/
COPY --from=0 /a/static/main.js static/
