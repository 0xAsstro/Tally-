'use client'

// This defines the "shape" of the data each card expects
type AssetCardProps = {
  icon: string;
  name: string;
  value: number;
  change: number;
};

// A helper function to format numbers as currency
const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export default function AssetCard({ icon, name, value, change }: AssetCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-[#1e293b] border border-slate-700 p-4 rounded-xl shadow-lg">
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change.toFixed(1)}%
          </p>
        </div>
      </div>
      <p className="text-2xl font-bold text-white mt-3 text-right">
        {formatCurrency(value)}
      </p>
    </div>
  );
}