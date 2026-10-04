from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from app.db.base import Base


class Resume(Base):
    __tablename__ = "resumes"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    sections = Column(String)