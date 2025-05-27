#!/bin/bash
set -e

# Variables
APP_DIR="/var/www/Portfolio-KevinBertrand"  # Remplacez par le chemin absolu sur votre VPS

cd $APP_DIR
git pull origin main

# Déploiement du backend
cd apps/backend
npm install --production
pm2 restart backend || pm2 start index.js --name backend

# Déploiement du frontend
cd ../frontend
npm install
npm run build
pm2 restart frontend || pm2 start npm --name frontend -- start