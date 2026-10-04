from pydantic import BaseModel, ConfigDict

class Piece(BaseModel):
    id: int
    title: str
    content: str

class PieceRead(BaseModel):
    id: int
    title: str
    content: str

    model_config = ConfigDict(from_attributes=True)