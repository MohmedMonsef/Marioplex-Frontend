FROM belalelhossany/start as builder
WORKDIR '/app'
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/dist /user/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
