export async function fetchResumes() {
  const res = await fetch("http://localhost:8000/resume/");
  return res.json();
}

export async function createResume(payload) {
  const res = await fetch("http://localhost:8000/resume/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function fetchPieces() {
  const res = await fetch("http://localhost:8000/piece/");
  return res.json();
}

export async function createPiece(payload) {
  const res = await fetch("http://localhost:8000/piece/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok ) {
    return res.json();
  }
  return Promise.reject();
  
}

export async function deletePiece(piece_id: Number) {
  await fetch("http://localhost:8000/piece/" + piece_id, {
    method: "DELETE",
  }).catch((e) => {console.error(e)});
}


