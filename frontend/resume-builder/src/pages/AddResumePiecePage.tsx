import { useEffect, useState } from "react";
import { useResumeStore } from "../store/useResumeStore";
import { fetchPieces, createPiece } from "../services/api";

export default function addResumePiecePage() {
  const pieces = useResumeStore((s) => s.pieces);
  const setPieces = useResumeStore((s) => s.setPieces);
  const addPiece = useResumeStore((s) => s.createPiece);

  const [form, setForm] = useState<{
    id: number;
    title: string;
    content: string;
  }>({
    id: pieces.length,
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchPieces().then(setPieces);
}, []);
  

  function handleSubmit(e: { preventDefault: () => void; }) {
      e.preventDefault();
      createPiece(form).then((newPiece) => {
        addPiece(newPiece);
        setForm({ id: pieces.length, title: "", content: "" });
      });
    }

  return (
    <div className="body">
        <div className="default-section">
            <h2>Create Resume Piece</h2>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="ID"
                type="number"
                value={pieces.length}
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
                            <strong>{r.title}</strong> — {r.content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
    
  )

}