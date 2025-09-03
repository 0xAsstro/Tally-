'use client'
import AssetCard from '@/components/dashboard/AssetCard'
import InvestorProfile from '@/components/dashboard/InvestorProfile'

const PerformanceChart = () => (
  <div className="h-64 bg-slate-900 rounded-md flex items-center justify-center border border-slate-700">
    <p className="text-slate-500">A beautiful chart will be implemented here.</p>
  </div>
);

export default function Dashboard() {
  const mockAssets = [
    { icon: '📈', name: 'Stocks', value: 75430.55, change: 2.1 },
    { icon: '₿', name: 'Crypto', value: 32500.00, change: -1.5 },
    { icon: '📜', name: 'Options', value: 4850.00, change: 15.2 },
    { icon: '🔮', name: 'Predictions', value: 2200.00, change: 8.1 },
    { icon: '🎨', name: 'Collectibles', value: 17500.00, change: 3.4 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400 mt-1">Welcome back, Alex. Here's your financial snapshot.</p>
          </div>
          <button className="bg-[#10b981] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-green-500 transition-colors mt-4 sm:mt-0">
            + Add Asset
          </button>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-xl shadow-lg">
              <p className="text-slate-400 text-sm">Total Net Worth</p>
              <p className="text-4xl lg:text-5xl font-bold text-white mt-1">$132,480.55</p>
              <p className="text-green-400 mt-1">+ $2,105.10 (1.7%) Today</p>
              <div className="mt-6"><PerformanceChart /></div>
            </div>
            <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-white text-xl mb-4">Asset Allocation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mockAssets.map((asset) => (
                  <AssetCard key={asset.name} {...asset} />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <InvestorProfile />
          </div>
        </div>
      </div>
    </div>
  );
}