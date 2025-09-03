import React from 'react';
import Sidebar from '@/components/layout/Sidebar'; // We will create this next

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <Sidebar />
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-800/30">
        {children}
      </main>
    </div>
  )
}