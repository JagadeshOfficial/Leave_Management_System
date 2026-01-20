'use client';
import React, { useState, useEffect } from 'react';
import {
    Users,
    Briefcase,
    Clock,
    TrendingUp,
    Calendar,
    CheckCircle2,
    ArrowUpRight,
    FileText,
    Bell,
    MoreHorizontal,
    Plus,
    Plane
} from 'lucide-react';
import Image from 'next/image';
import AttendanceWidget from '@/components/dashboard/AttendanceWidget';

export default function DashboardPage() {
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
        setCurrentDate(now.toLocaleDateString('en-US', options));
    }, []);

    const stats = [
        { title: 'Total Employees', value: '1,248', trend: '+12%', icon: Users, color: 'blue' },
        { title: 'Open Jobs', value: '34', trend: '+4', icon: Briefcase, color: 'purple' },
        { title: 'On Leave Today', value: '12', trend: '-2', icon: Plane, color: 'orange' },
        { title: 'Avg. Attendance', value: '96%', trend: '+1.2%', icon: Clock, color: 'emerald' },
    ];

    const quickActions = [
        { title: 'Post a Job', icon: Briefcase, color: 'bg-purple-50 text-purple-600 hover:bg-purple-100' },
        { title: 'Add Employee', icon: Plus, color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
        { title: 'Run Payroll', icon: ArrowUpRight, color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' },
        { title: 'Announcement', icon: Bell, color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-2 uppercase tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Live Updates
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Good Morning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Admin</span>
                    </h1>
                    <p className="text-slate-500 mt-1">Here's what's happening at Zentra today.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm transition-all">
                        <Calendar size={16} />
                        <span>{currentDate || 'Loading...'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all">
                        <Plus size={16} />
                        <span>Apply Leave</span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="group relative bg-white p-6 rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className={`absolute top-0 right-0 p-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                            <stat.icon size={100} className={`text-${stat.color}-600`} />
                        </div>

                        <div className="relative z-10 flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                <TrendingUp size={12} />
                                {stat.trend}
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                            <div className="text-sm font-medium text-slate-500">{stat.title}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart / Activity Area */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {quickActions.map((action, i) => (
                                <button key={i} className={`flex flex-col items-center justify-center p-4 rounded-2xl gap-3 transition-all hover:scale-105 ${action.color}`}>
                                    <action.icon size={24} />
                                    <span className="text-xs font-bold">{action.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity Feed */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-fit">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
                            <button className="text-xs font-bold text-blue-600 hover:text-blue-700">View All</button>
                        </div>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            {[
                                { title: 'New Employee Onboarded', desc: 'Sarah Jenkins joined the Design Team', time: '2 mins ago', icon: Users, color: 'bg-blue-500' },
                                { title: 'Leave Request Approved', desc: 'Marketing team vacation request approved', time: '1 hour ago', icon: CheckCircle2, color: 'bg-emerald-500' },
                                { title: 'Payroll Run Completed', desc: 'Monthly payroll for Oct 2026 processed', time: '4 hours ago', icon: FileText, color: 'bg-purple-500' },
                                { title: 'New Job Application', desc: 'Senior React Developer position', time: 'Yesterday', icon: Briefcase, color: 'bg-orange-500' },
                            ].map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                                            <span className="text-[10px] sm:text-xs font-medium text-slate-400">{item.time}</span>
                                        </div>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Profile & Calendar */}
                <div className="space-y-8">

                    {/* Time & Attendance Widget */}
                    <AttendanceWidget />

                    {/* Mini Profile Card */}
                    <div className="bg-[#0f172a] text-white p-8 rounded-3xl relative overflow-hidden text-center group">
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600 to-transparent opacity-20"></div>
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px] rounded-full mb-4 shadow-xl shadow-blue-900/50">
                                <div className="w-full h-full bg-[#0f172a] rounded-full flex items-center justify-center overflow-hidden">
                                    <Users size={40} className="text-white/80" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Admin User</h3>
                            <p className="text-slate-400 text-sm mb-6">Head of Operations</p>

                            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                <div>
                                    <div className="text-2xl font-bold">12</div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-500">Pending Tasks</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">98%</div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-500">Efficiency</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Holidays */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-md font-bold text-slate-900">Upcoming Holidays</h3>
                            <MoreHorizontal size={20} className="text-slate-400" />
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: 'Diwali', date: 'Nov 12, 2026', type: 'Floating' },
                                { name: 'Christmas', date: 'Dec 25, 2026', type: 'Public' },
                                { name: 'New Year', date: 'Jan 01, 2027', type: 'Public' },
                            ].map((h, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex flex-col items-center justify-center text-xs font-bold leading-none">
                                        <span>{h.date.split(' ')[0]}</span>
                                        <span className="text-[10px] opacity-70">{h.date.split(' ')[1].replace(',', '')}</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{h.name}</div>
                                        <div className="text-xs text-slate-400">{h.type} Holiday</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
