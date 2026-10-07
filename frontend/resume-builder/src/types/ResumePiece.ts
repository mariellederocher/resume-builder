export interface ResumePiece {
  id: number;
  title: string;
  content: string;
  type: "summary" | "work" | "prject" | "skill";
  tags: string[];
  variants: string[];
}

export interface ResumePieceCreate {
  id: number;
}