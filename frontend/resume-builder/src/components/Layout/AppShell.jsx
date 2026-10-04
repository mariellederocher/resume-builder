import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function AppShell() {
    return (
        <div className="flex flex-col h-screen">
            <header className="w-full border-b p-4 bg-white">
                <Header />
            </header>

            
            <div className="flex flex-1">
                {/* Sidebar must NOT shrink */}
                <div className="w-64 flex-shrink-0 bg-red-200">
                    <Sidebar /> 
                </div>

                <main className="flex-1 overflow-auto p-6 bg-gray-50">
                <Outlet />
                </main>
            </div>
        </div>
    );
}