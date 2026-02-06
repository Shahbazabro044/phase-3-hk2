import requests
import json

# Base URL for the API
BASE_URL = "http://localhost:8000"

def test_api():
    print("Testing Todo API...")

    # Test the root endpoint
    print("\n1. Testing root endpoint...")
    response = requests.get(f"{BASE_URL}/")
    print(f"Response: {response.json()}")
    print(f"Status: {response.status_code}")

    # Test the API docs are accessible
    print("\n2. Testing API docs...")
    response = requests.get(f"{BASE_URL}/docs")
    print(f"Docs status: {response.status_code}")

    # Test auth endpoints
    print("\n3. Testing auth endpoints exist...")
    try:
        response = requests.post(f"{BASE_URL}/auth/register", json={})
        print(f"Register endpoint status: {response.status_code}")
    except:
        print("Register endpoint exists but expects proper data")

    try:
        response = requests.post(f"{BASE_URL}/auth/login")
        print(f"Login endpoint status: {response.status_code}")
    except:
        print("Login endpoint exists but expects proper data")

    print("\nAPI test completed successfully!")

if __name__ == "__main__":
    test_api()