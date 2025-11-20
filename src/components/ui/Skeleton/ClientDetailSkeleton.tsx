
const ClientDetailSkeleton = () => {
  return (
    <main className="min-h-screen font-jakarta animate-pulse">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm mb-8">
          <div className="w-20 h-4 bg-gray-300 rounded"></div>
          <span className="w-4 h-4 bg-gray-300 rounded"></span>
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <span className="w-4 h-4 bg-gray-300 rounded"></span>
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
        </nav>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-8 mb-8 flex flex-col sm:flex-row gap-6">
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-6 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/5"></div>
              <div className="h-4 bg-gray-300 rounded w-1/6"></div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl px-4 py-3 w-32 text-center">
            <div className="h-6 bg-gray-300 rounded w-full mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>

            <div className="bg-white rounded-xl p-6 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientDetailSkeleton;
