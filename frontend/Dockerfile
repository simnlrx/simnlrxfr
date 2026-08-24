FROM node:24-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_OPEN_TO_WORK=false
ARG NEXT_PUBLIC_SHOW_PHONE=true
ENV NEXT_PUBLIC_OPEN_TO_WORK=$NEXT_PUBLIC_OPEN_TO_WORK
ENV NEXT_PUBLIC_SHOW_PHONE=$NEXT_PUBLIC_SHOW_PHONE
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_OPEN_TO_WORK=false
ARG NEXT_PUBLIC_SHOW_PHONE=true
ENV NEXT_PUBLIC_OPEN_TO_WORK=$NEXT_PUBLIC_OPEN_TO_WORK
ENV NEXT_PUBLIC_SHOW_PHONE=$NEXT_PUBLIC_SHOW_PHONE
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir -p /data/analytics && chown -R nextjs:nodejs /data
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
