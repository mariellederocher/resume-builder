import { create } from "zustand";
import { ResumePiece } from "../types/ResumePiece";
import { Resume } from "../types/Resume";

interface ResumeStoreState {
  pieces: ResumePiece[];
  resumes: Resume[];
  selectedPieces: ResumePiece[];

  setResumes: (resumes: Resume[]) => void;
  addResume: (resume: Resume) => void;
  setPieces: (pieces: ResumePiece[]) => void;
  createPiece: (piece: ResumePiece) => void;
  deletePiece: (piece: ResumePiece) => void;
  addSelectedPiece: (piece: ResumePiece) => void;
  removeSelectedPiece: (id: string | number) => void;
}

export const useResumeStore = create<ResumeStoreState>((set) => ({
    pieces: [],
    resumes: [],
    selectedPieces: [],
    
    setResumes: (resumes) => set({ resumes }),
    addResume: (resume) =>
        set((s) => ({ resumes: [...s.resumes, resume] })),

    setPieces: (pieces) => set({ pieces }),
    createPiece: (piece) =>
        set((s) => ({ pieces: [...s.pieces, piece] })),
    deletePiece: (id) =>
        set((s) => ({
            selectedPieces: s.selectedPieces.filter((p) => String(p.id) !== String(id)),
        })),
    
    addSelectedPiece: (piece) =>
        set((s) => ({ selectedPieces: [...s.selectedPieces, piece] })),
    removeSelectedPiece: (id) =>
        set((s) => ({
            selectedPieces: s.selectedPieces.filter((p) => String(p.id) !== String(id)),
        })),
}));