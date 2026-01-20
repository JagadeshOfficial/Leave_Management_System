"use client";

import React, { useState } from 'react';
import {
    Download,
    Eye,
    TrendingUp,
    DollarSign,
    Calendar,
    PieChart,
    ArrowUpRight,
    ArrowDownRight,
    Briefcase,
    CreditCard,
    FileText,
    ChevronRight,
    Search,
    Filter
} from 'lucide-react';

export default function MyPayslipsPage() {
    const [selectedYear, setSelectedYear] = useState('2026');

    // Mock Data
    const salaryStats = {
        netPay: "₹ 1,45,000",
        grossPay: "₹ 1,60,000",
        deductions: "₹ 15,000",
        nextPayDate: "Oct 31, 2026",
        ytdEarnings: "₹ 14,50,000"
    };

    const payslips = [
        { month: 'September', year: '2026', date: 'Sep 30, 2026', net: '₹ 1,45,000', status: 'Paid', downloadUrl: '#' },
        { month: 'August', year: '2026', date: 'Aug 31, 2026', net: '₹ 1,45,000', status: 'Paid', downloadUrl: '#' },
        { month: 'July', year: '2026', date: 'Jul 31, 2026', net: '₹ 1,45,000', status: 'Paid', downloadUrl: '#' },
        { month: 'June', year: '2026', date: 'Jun 30, 2026', net: '₹ 1,65,000', status: 'Paid', bonus: true, downloadUrl: '#' },
        { month: 'May', year: '2026', date: 'May 31, 2026', net: '₹ 1,45,000', status: 'Paid', downloadUrl: '#' },
    ];

    return (
        <div className="min-h-screen space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-20">

            {/* 1. Hero / Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-800 tracking-tight">Financial Hub</h1>
                    <p className="text-slate-500 mt-2 font-medium text-lg">Your earnings, deductions, and financial wellness.</p>
                </div>

                <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                    {['2026', '2025'].map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${selectedYear === year
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. The "Salary Card" & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Card */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#0B1121] text-white shadow-2xl p-10 group">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

                    {/* Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3">
                                    <CreditCard size={14} /> Salary Wallet
                                </div>
                                <h2 className="text-6xl font-black tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                    {salaryStats.netPay}
                                </h2>
                                <p className="text-slate-400 font-medium mt-2">Net Pay • September 2026</p>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                <TrendingUp className="text-emerald-400" size={28} />
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Gross Earnings</p>
                                <p className="text-2xl font-bold">{salaryStats.grossPay}</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Deductions</p>
                                <p className="text-2xl font-bold text-red-400">-{salaryStats.deductions}</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Upcoming Payday</p>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-emerald-400" />
                                    <p className="text-xl font-bold">{salaryStats.nextPayDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Stats */}
                <div className="space-y-6">
                    {/* YTD Card */}
                    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <Briefcase size={20} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">YTD Earnings</span>
                        </div>
                        <h3 className="text-3xl font-black text-slate-800">{salaryStats.ytdEarnings}</h3>
                        <p className="text-sm text-slate-500 mt-2 font-medium">Apr 2026 - Present</p>

                        <div className="mt-6 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full w-[75%] bg-indigo-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* Breakdown Chart Placeholder */}
                    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                            <PieChart size={80} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 mb-6">Salary Structure</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center gap-2 text-slate-600 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Basic
                                </span>
                                <span className="font-bold">50%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center gap-2 text-slate-600 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> HRA
                                </span>
                                <span className="font-bold">40%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center gap-2 text-slate-600 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span> PF & Tax
                                </span>
                                <span className="font-bold">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Payslip History List (Stylish Tickets) */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <h3 className="text-2xl font-bold text-slate-800">Payslip History</h3>
                    <div className="flex gap-4">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-500 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-48 transition-all"
                            />
                        </div>
                        <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {payslips.map((slip, index) => (
                        <div key={index} className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 hover:border-indigo-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            {slip.bonus && (
                                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-black uppercase px-2 py-1 rounded-bl-xl rounded-tr-xl">
                                    Bonus Included
                                </div>
                            )}

                            <div className="flex items-center gap-6">
                                <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                    <span className="text-xs font-bold uppercase text-slate-400 group-hover:text-indigo-400">{slip.month.substring(0, 3)}</span>
                                    <span className="text-xl font-black text-slate-800 group-hover:text-indigo-600">{slip.year.substring(2)}</span>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{slip.month} {slip.year}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm font-medium text-slate-500">Credited on {slip.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase">{slip.status}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-8">
                                <div className="text-right">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Net Pay</p>
                                    <p className="text-2xl font-black text-slate-800">{slip.net}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md">
                                        <Eye size={16} /> View
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5">
                                        <Download size={16} /> Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
