#!/bin/bash

# Specify the content to be written to the .env.local file
ENV_CONTENT="# TEST\nVITE_API_URL=http://194.163.167.131:9000/rangurura/api/v1\nVITE_BASE_URL=http://194.163.167.131:9000/rangurura"

# Check if .env.local file exists
if [ -f .env.local ]; then
    # If the file exists, override its contents
    echo -e "$ENV_CONTENT" > .env.local
    echo "Existing .env.local file updated."
else
    # If the file doesn't exist, create it and write the content
    echo -e "$ENV_CONTENT" > .env.local
    echo ".env.local file created."
fi