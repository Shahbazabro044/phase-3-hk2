import Image from "next/image";
import Main from "./components/Main";
import AIChatbot from "./components/AIchatbot";


export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">

      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md border-b border-sky-100 px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-sky-600">
          📝 TODO APP
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-medium">
            Welcome, Shahbaz 👋
          </span>

          <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>

      </nav>

      {/* ✅ Main Content */}
      <main className="p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-sky-100">
          <h2 className="text-xl font-semibold text-sky-600 mb-2">
            Dashboard
          </h2>

          <p className="text-gray-600">
            Your todos will appear here 🙂
          </p>
        </div>
      </main>
      <Main/>
      <AIChatbot/>

    </div>
  );
}
