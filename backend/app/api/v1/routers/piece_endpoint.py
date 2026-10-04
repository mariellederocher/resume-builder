from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.piece_schema import Piece, PieceRead
from app.services.piece_service import PieceService
from app.db.resume_session import get_db

router = APIRouter(prefix="/piece", tags=["Piece"])

@router.post("/", response_model=PieceRead)
def create_piece(payload: Piece, db: Session = Depends(get_db)):
    service = PieceService(db)
    return service.create_piece(payload)

@router.get("/{piece_id}", response_model=PieceRead)
def get_piece(piece_id: int, db: Session = Depends(get_db)):
    service = PieceService(db)
    piece = service.get_piece(piece_id)
    if not piece:
        raise HTTPException(status_code=404, detail="Piece not found")
    return piece

@router.get("/", response_model=list[PieceRead])
def list_pieces(db: Session = Depends(get_db)):
    service = PieceService(db)
    return service.list_pieces()