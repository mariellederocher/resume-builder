import json

from sqlalchemy.orm import Session
from app.db.models.resume_dbmodel import Resume as ResumeModel
from app.schemas.resume_schema import Resume

class ResumeService:
    def __init__(self, db: Session):
        self.db = db

    def create_resume(self, payload: Resume):
        resume = ResumeModel(
            id=payload.id,
            name=payload.name,
            email=payload.email,
            sections=json.dumps(
                [section.model_dump() for section in payload.sections]
            ),
        )
        self.db.add(resume)
        self.db.commit()
        self.db.refresh(resume)
        return resume

    def get_resume(self, resume_id: int):
        return self.db.get(ResumeModel, resume_id)

    def list_resumes(self):
        return self.db.query(ResumeModel).all()