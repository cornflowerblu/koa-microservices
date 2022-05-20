FROM node:lts-alpine AS builder
WORKDIR /home/node
COPY /users/*.json /home/node/
COPY /users/*.ts /home/node
COPY /users/bin /home/node/bin
RUN npm ci --no-audit
RUN npm run build


WORKDIR /home/node/app
COPY --from=builder /home/node/bin .
RUN yarn install --production

ENV PORT=80
EXPOSE 80

CMD ["node", "server.js"]