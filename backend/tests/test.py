import requests

RESUMEBASE = "http://localhost:8000/resume/"
PIECEBASE = "http://localhost:8000/piece/"

def create_resume(id, name, email, sections):
    payload = {
        "id": id,
        "name": name,
        "email": email,
        "sections": sections
    }
    r = requests.post(RESUMEBASE, json=payload)
    print("Created: ", r.json())

def add_sample():
    create_resume("1", "ellie", "gmail", [])

def create_piece(id, title, content):
    payload = {
        "id": id,
        "title": title,
        "content": content,
    }
    r = requests.post(PIECEBASE, json=payload)
    print("Created: ", r.json())

def add_sample_piece():
    create_piece("1", "ellie", "gmail")

if __name__ == "__main__":
    add_sample_piece()
    print("DB: ", requests.get(f"{PIECEBASE}").json())

# print("DB: ", requests.get(f"http://localhost:8000/resume/").json())