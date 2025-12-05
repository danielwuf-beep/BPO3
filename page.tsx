'use client';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [usSalary, setUsSalary] = useState(50000);
  const [usOverhead, setUsOverhead] = useState(12000);
  const [coSalary, setCoSalary] = useState(14000);
  const [coOverhead, setCoOverhead] = useState(3000);
  const [fteCount, setFteCount] = useState(10);

  const annualUS = (usSalary + usOverhead) * fteCount;
  const annualCO = (coSalary + coOverhead) * fteCount;
  const savings = annualUS - annualCO;
  const pct = annualUS > 0 ? (savings / annualUS) * 100 : 0;

  const chartData = [
    { name: 'US', Cost: annualUS },
    { name: 'Colombia', Cost: annualCO }
  ];

  return (
    <div className="min-h-screen p-10">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">BPO Outsourcing Cost Dashboard</h1>
        <p className="text-center text-gray-600 mb-10">Corporate comparison between the US and Colombia</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">US Costs</h2>
            <label>Salary per FTE</label>
            <input type="number" value={usSalary} onChange={e => setUsSalary(Number(e.target.value))} className="input" />
            <label>Overhead per FTE</label>
            <input type="number" value={usOverhead} onChange={e => setUsOverhead(Number(e.target.value))} className="input" />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Colombia Costs</h2>
            <label>Salary per FTE</label>
            <input type="number" value={coSalary} onChange={e => setCoSalary(Number(e.target.value))} className="input" />
            <label>Overhead per FTE</label>
            <input type="number" value={coOverhead} onChange={e => setCoOverhead(Number(e.target.value))} className="input" />
          </div>
        </div>

        <div className="mb-10">
          <label>Number of FTEs</label>
          <input type="number" value={fteCount} onChange={e => setFteCount(Number(e.target.value))} className="input w-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-center">
          <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h3 className="text-lg text-gray-500">Annual US Cost</h3>
            <p className="text-3xl font-bold text-blue-700">${annualUS.toLocaleString()}</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow">
            <h3 className="text-lg text-gray-500">Annual Colombia Cost</h3>
            <p className="text-3xl font-bold text-green-700">${annualCO.toLocaleString()}</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl shadow">
            <h3 className="text-lg text-gray-500">Savings</h3>
            <p className="text-3xl font-bold text-purple-700">${savings.toLocaleString()}</p>
            <p className="text-md text-purple-500">{pct.toFixed(2)}% reduction</p>
          </div>
        </div>

        <div className="h-96 bg-gray-50 p-6 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
