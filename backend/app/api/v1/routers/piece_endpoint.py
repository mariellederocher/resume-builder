from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.piece_schema import Piece, PieceRead, PieceUpdate
from app.services.piece_service import PieceService
from app.db.resume_session import get_db

router = APIRouter(prefix="/piece", tags=["Piece"])

@router.post("/", response_model=PieceRead)
def create_piece(payload: Piece, db: Session = Depends(get_db)):
    service = PieceService(db)
    if service.get_piece(payload.id):
        raise HTTPException(status_code=409, detail="Piece ID already exists")
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

@router.patch("/{piece_id}", response_model=PieceUpdate)
def update_piece(piece_id: int, payload: PieceUpdate, db: Session = Depends(get_db)):
    service = PieceService(db)
    piece = service.get_piece(piece_id)
    if not piece:
        raise HTTPException(status_code=404, detail="Piece not found")
    updated = service.update_piece(piece, payload)
    return updated

@router.delete("/{piece_id}", status_code=204)
def delete_metric(piece_id: int, db: Session = Depends(get_db)):
    service = PieceService(db)
    piece = service.get_piece(piece_id)
    if not piece:
        raise HTTPException(status_code=404, detail="Piece not found")
    service.delete_piece(piece)


