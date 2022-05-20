FROM node:lts-alpine AS builder
WORKDIR /home/node
COPY ../*.json /home/node/
COPY ../*.ts /home/node
RUN npm ci --no-audit
RUN npm run build

FROM node:lts-alpine
WORKDIR /home/node/app
COPY --from=builder /home/node/bin .
RUN yarn install --production

ENV PORT=80
EXPOSE 80

CMD ["node", "server.js"]