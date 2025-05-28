#!/bin/bash
set -e

# Variables
APP_DIR="/var/www/Portfolio-KevinBertrand"  # Remplacez par le chemin absolu sur votre VPS

cd $APP_DIR
git pull origin main
