from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.routers import health
from app.api.v1.routers import resume_endpoint
from app.api.v1.routers import piece_endpoint
from app.db.base import Base
from app.db.resume_session import engine

app = FastAPI(title="Resume Builder API")

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(resume_endpoint.router)
app.include_router(piece_endpoint.router)

Base.metadata.create_all(bind=engine)

@app.get("/")
def root(): 
    pass