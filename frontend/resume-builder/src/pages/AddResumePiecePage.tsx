import { useEffect, useState } from "react";
import { useResumeStore } from "../store/useResumeStore";
import { fetchPieces, createPiece, deletePiece } from "../services/api";
import { ResumePiece } from "../types/ResumePiece";

export default function addResumePiecePage() {
  const pieces = useResumeStore((s) => s.pieces);
  const setPieces = useResumeStore((s) => s.setPieces);
  const addPiece = useResumeStore((s) => s.createPiece);
  const deletePiece = useResumeStore((s) => s.deletePiece);

  const [form, setForm] = useState<{
    id: number;
    title: string;
    content: string;
    type: string;
  }>({
    id: 1,
    title: "",
    content: "",
    type: "work",
  });

  useEffect(() => {
    fetchPieces().then(setPieces);
    }, []);

    function handleDeleteClick(piece: ResumePiece) {
        deletePiece(piece);
        fetchPieces().then(setPieces);
    }
  

  function handleSubmit(e: { preventDefault: () => void; }) {
      e.preventDefault();
      createPiece(form).then((newPiece) => {
        addPiece(newPiece);
        setForm({ id: 1, title: "", content: "", type: "work" });
      },
    (error) => {});
  }

  return (
    <div className="body">
        <div className="default-section">
            <h2>Create Resume Piece</h2>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="ID"
                type="number"
                value={form.id}
                onChange={(e) =>
                setForm({ ...form, id: Number(e.target.value) })
                }
            />
            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                setForm({ ...form, title: e.target.value })
                }
            />
            <input
                placeholder="Content"
                value={form.content}
                onChange={(e) =>
                setForm({ ...form, content: e.target.value })
                }
            />
            <input
                placeholder="Type"
                value={form.type}
                onChange={(e) =>
                setForm({ ...form, type: e.target.value })
                }
            />

            <div className="">
                <button>Create Piece</button>
            </div>
            </form>
        </div>

        <div className="default-section">
            <h2>Saved Pieces {pieces.length}</h2>
            <div className="default-section">
                <ul>
                    {pieces.map((r) => (
                        <li key={r.id}>
                            <strong>{r.id} {r.title}</strong> — {r.content}
                            <button onClick={() => handleDeleteClick}>DELETE</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
    
  )

}