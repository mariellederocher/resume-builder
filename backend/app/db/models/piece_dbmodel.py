from sqlalchemy import Column, Integer, String, JSON
from app.db.base import Base


class Piece(Base):
    __tablename__ = "pieces"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)
    type = Column(String)
    # tags = Column(JSON)
    # variants = Column(JSON)