import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import app
from database import Base, get_db

# Create a test database
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Create the database tables
Base.metadata.create_all(bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Todo API is running!"}

def test_auth_routes_exist():
    # Test that auth routes are accessible
    # Registration will fail without proper data, but should return 422 for validation error
    response = client.post("/auth/register")
    assert response.status_code in [422, 400]  # Validation error is expected

    # Login will fail without proper data, but should return 422 for validation error
    response = client.post("/auth/login")
    assert response.status_code in [422, 400]  # Validation error is expected

if __name__ == "__main__":
    pytest.main([__file__])