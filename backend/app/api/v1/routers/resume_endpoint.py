from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.resume_schema import Resume, ResumeRead
from app.services.resume_service import ResumeService
from app.db.resume_session import get_db

router = APIRouter(prefix="/resume", tags=["Resume"])

@router.post("/", response_model=ResumeRead)
def create_resume(payload: Resume, db: Session = Depends(get_db)):
    service = ResumeService(db)
    return service.create_resume(payload)

@router.get("/{resume_id}", response_model=ResumeRead)
def get_resume(resume_id: int, db: Session = Depends(get_db)):
    service = ResumeService(db)
    resume = service.get_resume(resume_id)
    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")
    return resume

@router.get("/", response_model=list[ResumeRead])
def list_resumes(db: Session = Depends(get_db)):
    service = ResumeService(db)
    return service.list_resumes()