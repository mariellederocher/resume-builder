import { useEffect, useState } from "react";
import DragCanvas from "../components/DragCanvas/DragCanvas";
import { ResumeSection } from "../types/Resume";
import ResumePieceCard from "../components/ResumePieceCard/ResumePieceCard";
import { useResumeStore } from "../store/useResumeStore";
import { fetchResumes, createResume, fetchPieces } from "../services/api";

export default function ResumeBuilderPage() {
  const pieces = useResumeStore((s) => s.pieces);
  const resumes = useResumeStore((s) => s.resumes);
  const setPieces = useResumeStore((s) => s.setPieces);
  const setResumes = useResumeStore((s) => s.setResumes);
  const addResume = useResumeStore((s) => s.addResume);
  const selectedPieces = useResumeStore((s) => s.selectedPieces);

  const [form, setForm] = useState<{
    id: number;
    name: string;
    email: string;
    sections: ResumeSection[];
  }>({
    id: resumes.length,
    name: "",
    email: "",
    sections: [],
  });

  useEffect(() => {
    fetchResumes().then(setResumes);
  }, []);

  useEffect(() => {
    fetchPieces().then(setPieces);
  }, []);

  // Sync sections with selectedPieces from DragCanvas
  useEffect(() => {
    setForm((f) => ({
      ...f,
      sections: selectedPieces.map((p) => ({
        title: p.title,
        content: p.content,
      })),
    }));
  }, [selectedPieces]);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    createResume(form).then((newResume) => {
      addResume(newResume);
      setForm({ id: resumes.length, name: "", email: "", sections: [] });
    });
  }

  return (
    <div className="body">
      <div className="default-section">
        <h2>Resume Pieces</h2>
        <div className="default-section">
          {pieces.map((p) => (
            <ResumePieceCard key={p.id} piece={p} />
          ))}
        </div>
      </div>

      <div className="default-section">
        <h2>Create Resume</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="ID"
            type="number"
            value={resumes.length}
            onChange={(e) =>
              setForm({ ...form, id: Number(e.target.value) })
            }
          />
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <div className="">
            Sections are generated from pieces dropped onto the canvas.
          </div>

          <button>
            Create Resume
          </button>
        </form>
      </div>

      <div className="default-section">
        <h2>Saved Resumes</h2>
        <ul>
          {resumes.map((r) => (
            <li
              key={r.id}
            >
              <strong>{r.name}</strong> — {r.email}
              <div className="">
                {r.sections.map((s, idx) => (
                  <div key={idx}>
                    <h4>{s.title}</h4>
                    <p>{s.content}</p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      
      <DragCanvas />
    </div>
  );
}