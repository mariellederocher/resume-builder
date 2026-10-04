from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from app.db.base import Base


class Piece(Base):
    __tablename__ = "pieces"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)