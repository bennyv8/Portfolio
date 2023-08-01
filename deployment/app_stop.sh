# Check if a Vite process is running
if pgrep -x "vite" > /dev/null; then
  # Vite process exists, so terminate it
  pkill -f "vite"
  echo "Vite process has been terminated."
else
  echo "No Vite process is currently running."
fi