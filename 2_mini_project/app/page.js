export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">Welcome to MyWebsite</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">This is a simple website build with next.js and tailwindCss for learning purpose</p>
        <div className="flex justify-center gap-4">

        <button className="bg-blue-700 border border-blue-700 px-3 py-2 rounded-lg hover:bg-blue-500 hover:border-blue-500 transition-colors text-white">Get started</button>
        <button className="border border-gray-400 px-3 py-2 rounded-lg">Learn more</button>
        </div>
      </div>
      
    </div>
  );
}
