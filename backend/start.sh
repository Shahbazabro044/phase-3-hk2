#!/bin/bash
echo "Starting FastAPI Todo Application..."
uvicorn main:app --reload --host 0.0.0.0 --port 8000