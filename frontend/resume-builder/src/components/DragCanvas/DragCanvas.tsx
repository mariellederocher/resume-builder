import { DragDropProvider, useDroppable, useDraggable } from "@dnd-kit/react"
import { ResumePiece } from "../../types/ResumePiece";
import { useResumeStore } from "../../store/useResumeStore";

export default function DragCanvas() {
    const selectedPieces = useResumeStore((s) => s.selectedPieces);
    const addSelectedPieces = useResumeStore((s) => s.addSelectedPiece);

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        if (!data) return;

        try {
            const piece: ResumePiece = JSON.parse(data);
            addSelectedPieces(piece);
        } catch { } //ignore
    }

    return (
        <div
            className="drag-canvas-section"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            >
                <h2>Drag pieces here to build your resume</h2>
                
                <div className="resume-drag-canvas">
                    {selectedPieces.length === 0 && (
                        <p>
                            Drag a card from the left column and drop it here.
                        </p>
                    )}
                
                    {selectedPieces.map((p) => (
                    <div
                        key={p.id}
                        className="draggable-piece"
                    >
                        <h4>{p.title}</h4>
                        <p>
                            {p.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// function DroppableSlot({ id, label }: { id: string; label: string }) {
//     const {ref}  = useDroppable({id});

//     return (
//         <div 
//             ref={ref} 
//             className="resume-drag-canvas" 
//         >
//             <h4>{label}</h4>
//         </div>
//     );
// }