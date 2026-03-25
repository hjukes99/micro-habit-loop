# Micro Habit Loop

A tiny TypeScript app to track one daily habit and keep a streak alive.

## Features
- One-habit setup
- Daily check-ins
- Current and longest streak calculation
- Minimal local JSON persistence
- Smoke test scaffold

## Stack
- Node.js 20+
- TypeScript

## Setup
```bash
npm install
```

## Run
```bash
npm run build
npm start
```

## Test
```bash
npm test
```

## Docker
```bash
docker build -t micro-habit-loop .
docker run --rm micro-habit-loop
```
