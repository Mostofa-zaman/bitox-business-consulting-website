import ButtonTwo from "@/components/common/ButtonTwo";



export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to Next.js
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Start building your application 🚀
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
  <ButtonTwo/>
      </div>
    </main>
  );
}