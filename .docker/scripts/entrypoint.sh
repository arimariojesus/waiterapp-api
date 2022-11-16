#!/usr/bin/env sh

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

yarn install --silent
yarn dev