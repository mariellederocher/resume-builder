# Resume Builder

An app for creating resumes modurally in order to tailor them to different job postings. Allows you to create and combine pieces in different resumes sections. 

## Running Locally
Run backend service:
```
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
Run frontend app: 
```
npm run dev       
```

Resume Builder Page at localhost:5173/build

Piece Maker Page at localhost:5173/piece

## Current Features
* React App that is connected to a backend FastAPI service. 
* Resume Builder Page that has an input form to save new resumes, a list of previously saved resumes, and a resume piece cards that can be dragged and dropped into a canvas at the bottom of the page. 
* Resume Piece Maker Page that has an input form for making and saving new resume pieces, as well as a list of previously saved pieces. 
* Persistent PostgreSQL databases for saved resumes and resume pieces that can be written to and read from via FastAPI endpoints. 

## Next Planned Features:
* Tagging resumes pieces for different sections (Work Experience, Projects) and titles (Technical Artist @ Motusi.inc). 
* Saving the arranged resume pieces into properly formatted full resumes. 
* Preview for formatted resumes.
* Improved interface navigation and design.
* Upload and view job descriptions for comparison in the app. 
* Make a simple recommendation engine for searching resumes pieces using tag and keyword matching. 
* Job description keyword extraction. 