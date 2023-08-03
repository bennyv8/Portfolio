#!/bin/bash

# Assuming Vite is running on localhost and port 3000
VITE_URL="https://bennyvan.com"

# Function to check if Vite is running
check_vite_running() {
  # Use curl to make an HTTP request to Vite server
  if curl -s -o /dev/null -I -w "%{http_code}" "$VITE_URL" | grep -q "200"; then
    echo "Vite is running!"
    return 0  # Success
  else
    echo "Vite is not running or not responding"
    return 1  # Failure
  fi
}

# Call the function to check Vite status
check_vite_running