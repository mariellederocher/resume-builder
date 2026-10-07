import { ResumePiece } from "../../types/ResumePiece";

interface Props {
    piece: ResumePiece;
}

export default function ResumePieceCard({ piece }: Props) {
    function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
        e.dataTransfer.setData("application/json", JSON.stringify(piece));
    }


    return (
        <div
            className="draggable-piece"
            draggable
            onDragStart={handleDragStart}
        >
            <h3>{piece.title}</h3>
            <p>ID = {piece.id}</p>
            <p>{piece.content}</p>
            <p>Type = {piece.type}</p>
            <p>Tags = {piece.tags}</p>
        </div>
    );
}