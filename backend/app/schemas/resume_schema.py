import json

from pydantic import BaseModel, ConfigDict
from pydantic import field_validator

class ResumeSection(BaseModel):
    title: str
    content: str

class Resume(BaseModel):
    id: int
    name: str
    email: str
    sections: list[ResumeSection]

class ResumeRead(BaseModel):
    id: int
    name: str
    email: str
    sections: list[ResumeSection]

    model_config = ConfigDict(from_attributes=True)

    @field_validator("sections", mode="before")
    @classmethod
    def parse_sections(cls, value):
        if isinstance(value, str):
            return json.loads(value)
        return value