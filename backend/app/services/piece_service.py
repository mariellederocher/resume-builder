import json

from sqlalchemy.orm import Session
from app.db.models.piece_dbmodel import Piece as PieceModel
from app.schemas.piece_schema import Piece

class PieceService:
    def __init__(self, db: Session):
        self.db = db

    def create_piece(self, payload: Piece):
        piece = PieceModel(
            id=payload.id,
            title=payload.title,
            content=payload.content,
        )
        self.db.add(piece)
        self.db.commit()
        self.db.refresh(piece)
        return piece

    def get_piece(self, piece_id: int):
        return self.db.get(PieceModel, piece_id)

    def list_pieces(self):
        return self.db.query(PieceModel).all()