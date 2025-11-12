# --- Stage 1: Build the Next.js app ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Build Next.js app
RUN npm run build

# --- Stage 2: Run the production server ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# ✅ Make Next.js bind to 0.0.0.0 instead of localhost
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy built app from builder
COPY --from=builder /app ./

# Expose port 3000 for ECS
EXPOSE 3000

# ✅ Start the Next.js app (listening on 0.0.0.0:3000)
CMD ["npm", "run", "start"]
