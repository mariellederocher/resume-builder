from pydantic import BaseModel, ConfigDict
from typing import Optional

class Piece(BaseModel):
    id: int
    title: str
    content: str
    type: str
    # tags: list[str] = []
    # variants: list[int] = []

class PieceRead(BaseModel):
    id: int
    title: str
    content: str
    type: str
    # tags: list[str]
    # variants: list[int]

    model_config = ConfigDict(from_attributes=True)

class PieceUpdate(BaseModel):
    title: str | None = None
    content: str | None = None
    type: str | None = None
    # tags: list[str] | None = None
    # variants: list[int] | None = None

class MetricFilters(BaseModel):
    title: str | None = None
    type: str | None = None
    # tags: list[str] | None = None
    # variants: list[int] | None = None