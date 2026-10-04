def format_resume(resume):
    return f"{resume.name}\n{resume.email}\n\n" + "\n\n".join(
        f"{section.title}\n{section.content}" for section in resume.sections
    )