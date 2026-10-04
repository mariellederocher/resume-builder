export default function Sidebar() {
    return (
      <div className="w-64 flex-shrink-0 bg-white border-r p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Siderbar Header</h2>

        <div className="flex-1 space-y-3 overflow-auto">
          <button className="w-full text-left px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Summary Variants
          </button>
          <button className="w-full text-left px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Experience Bullets
          </button>
          <button className="w-full text-left px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Projects
          </button>
          <button className="w-full text-left px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Skills Blocks
          </button>
        </div>
      </div>
    );
}