import Button from "@/components/ui/Button";

const AdminDashboard = () => {
    const bookings = [
        { id: "BK001", name: "Rahul S.", package: "Spiti Expedition", date: "2026-06-12", status: "Pending" },
        { id: "BK002", name: "Ananya K.", package: "Chopta Trek", date: "2026-05-20", status: "Confirmed" },
        { id: "BK003", name: "Vikram M.", package: "Manali Getaway", date: "2026-04-15", status: "Inquiry" },
    ];

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:row justify-between items-start mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-heading mb-2">Admin <span className="text-brand-teal">Panel</span></h1>
                        <p className="text-brand-dark/50 font-body">Manage your tour packages, bookings, and testimonials.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="sm">Edit Packages</Button>
                        <Button variant="primary" size="sm">+ New Destination</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stats Bar */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "Active Bookings", val: "12", color: "text-brand-teal" },
                            { label: "Pending Inquiries", val: "5", color: "text-brand-green" },
                            { label: "Monthly Revenue", val: "₹1.2L", color: "text-cta" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-brand-sand/50 shadow-sm">
                                <p className="uppercase text-[10px] font-bold tracking-widest text-brand-dark/30 mb-2">{stat.label}</p>
                                <p className={`text-4xl font-heading font-black ${stat.color}`}>{stat.val}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Bookings Table */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-brand-sand/50 shadow-sm overflow-x-auto">
                        <h3 className="text-2xl font-heading mb-8">Recent Bookings</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-brand-sand/30 font-heading text-sm text-brand-dark/40 uppercase tracking-widest">
                                    <th className="pb-4">Booking ID</th>
                                    <th className="pb-4">Traveler</th>
                                    <th className="pb-4">Package</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="font-body text-brand-dark/70">
                                {bookings.map((bk) => (
                                    <tr key={bk.id} className="border-b border-brand-sand/10 hover:bg-brand-bg transition-colors">
                                        <td className="py-4 font-bold text-brand-dark">{bk.id}</td>
                                        <td className="py-4">{bk.name}</td>
                                        <td className="py-4">{bk.package}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${bk.status === 'Confirmed' ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-sand/50 text-brand-dark/50'
                                                }`}>
                                                {bk.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Quick Actions */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-brand-teal text-white p-8 rounded-3xl shadow-xl shadow-brand-teal/20">
                            <h4 className="text-xl font-heading mb-4">Batch Updates</h4>
                            <p className="text-sm opacity-80 mb-6">Update departure dates for upcoming Himachal batches.</p>
                            <Button variant="secondary" size="sm" className="w-full">Manage Batches</Button>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-brand-sand/50">
                            <h4 className="text-xl font-heading mb-4">Reviews</h4>
                            <p className="text-sm text-brand-dark/50 mb-6">2 new testimonials waiting for approval.</p>
                            <Button variant="outline" size="sm" className="w-full">Moderate Reviews</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
