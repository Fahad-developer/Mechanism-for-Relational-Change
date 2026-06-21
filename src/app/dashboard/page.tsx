"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line,
} from "recharts";

// ── Auth ──
function getUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("mrc_token");
  if (!raw) return null;
  try {
    return JSON.parse(atob(raw));
  } catch {}
  return null;
}

type Tab = "overview" | "blogs" | "accounts" | "payment-methods" | "leads" | "volunteers";

const sidebarTabs: { key: Tab; label: string; icon: string }[] = [
  { key: "overview", label: "Overview", icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" },
  { key: "blogs", label: "Blog Posts", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },

  { key: "accounts", label: "Accounts", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
  { key: "payment-methods", label: "Payment Methods", icon: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" },
  { key: "leads", label: "Contact Leads", icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" },
  { key: "volunteers", label: "Volunteers", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
];

const PIE_COLORS = ["#059669", "#F59E0B", "#3B82F6", "#EF4444", "#8B5CF6", "#EC4899"];

// ── Blog form helpers ──
function makeSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "post";
}

interface BlogPost {
  _id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  slug: string;
  views?: number;
  createdAt?: string;
}

interface PaymentMethod {
  _id: string;
  name: string;
  type: string;
  details: string;
  icon?: string;
  isActive: boolean;
  order: number;
}

interface Lead {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  message?: string;
  status: string;
  createdAt: string;
}

const typeLabels: Record<string, string> = {
  bank: "Bank Transfer", easypaisa: "Easypaisa", jazzcash: "JazzCash",
  paypal: "PayPal", stripe: "Stripe", other: "Other",
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [loading, setLoading] = useState(false);

  // Data
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [accounts, setAccounts] = useState<any[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  // Payment method form
  const [pmForm, setPmForm] = useState({ name: "", type: "bank", details: "", isActive: true, order: 0 });
  const [editingPm, setEditingPm] = useState<PaymentMethod | null>(null);
  const [pmMsg, setPmMsg] = useState("");

  // Blog form
  const [editBlog, setEditBlog] = useState<BlogPost | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formCategory, setFormCategory] = useState("Education");
  const [formImage, setFormImage] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [blogError, setBlogError] = useState("");

  // Account form
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [accMsg, setAccMsg] = useState("");

  // Filters
  const [leadFilter, setLeadFilter] = useState("all");
  const [volunteerFilter, setVolunteerFilter] = useState("all");

  // ── Inactivity logout: 15 min ──
  const INACTIVITY_MS = 15 * 60 * 1000;

  useEffect(() => {
    const u = getUser();
    if (!u) { router.replace("/login"); return; }
    setUser(u);
    fetchAll();
  }, [router]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function reset() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        localStorage.removeItem("mrc_token");
        router.replace("/login");
      }, INACTIVITY_MS);
    }

    const events = ["mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, reset));
    reset();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, [router]);

  async function fetchAll() {
    try {
      const [bRes, aRes, pmRes, lRes, vRes] = await Promise.all([
        fetch("/api/blogs"),
        fetch("/api/users/list"),
        fetch("/api/payment-methods"),
        fetch("/api/leads"),
        fetch("/api/volunteers"),
      ]);
      const bData = await bRes.json();
      const aData = await aRes.json();
      const pmData = await pmRes.json();
      const lData = await lRes.json();
      const vData = await vRes.json();
      if (bData.blogs) setBlogs(bData.blogs);
      if (aData.users) setAccounts(aData.users);
      if (pmData.methods) setPaymentMethods(pmData.methods);
      if (lData.leads) setLeads(lData.leads);
      if (vData.volunteers) setVolunteers(vData.volunteers);
    } catch {}
  }

  // ── Blog CRUD ──
  function openNewBlog() {
    setEditBlog(null); setBlogError("");
    setFormTitle(""); setFormExcerpt(""); setFormContent(""); setFormCategory("Education"); setFormImage(""); setFormSlug("");
  }
  function openEditBlog(b: BlogPost) {
    setEditBlog(b);
    setFormTitle(b.title); setFormExcerpt(b.excerpt); setFormContent(b.content);
    setFormCategory(b.category); setFormImage(b.image); setFormSlug(b.slug);
  }

  async function saveBlog(e: FormEvent) {
    e.preventDefault();
    setLoading(true); setBlogError("");
    const payload: BlogPost = {
      title: formTitle, excerpt: formExcerpt, content: formContent,
      category: formCategory, image: formImage, slug: formSlug || makeSlug(formTitle),
    };
    try {
      if (editBlog?._id) {
        await fetch("/api/blogs", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id: editBlog._id, ...payload }) });
        setEditBlog(null); fetchAll();
      } else {
        const res = await fetch("/api/blogs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        const data = await res.json();
        if (data.error) { setBlogError(data.error); }
        else { setEditBlog(null); fetchAll(); }
      }
    } catch { setBlogError("Server error"); }
    setLoading(false);
  }

  async function deleteBlog(id: string) {
    if (!confirm("Delete this blog post?")) return;
    await fetch("/api/blogs", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id: id }) });
    fetchAll();
  }

  // ── Accounts ──
  async function createAccount(e: FormEvent) {
    e.preventDefault(); setLoading(true); setAccMsg("");
    try {
      const res = await fetch("/api/users/create", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: newUser, password: newPass }) });
      const d = await res.json();
      setAccMsg(d.success ? `Account "${newUser}" created!` : d.error || "Failed");
      if (d.success) { setNewUser(""); setNewPass(""); setShowPass(false); fetchAll(); }
    } catch { setAccMsg("Server error"); }
    setLoading(false);
  }

  async function deleteAccount(username: string) {
    if (!confirm(`Delete "${username}"?`)) return;
    setAccMsg("");
    try {
      const res = await fetch("/api/users/delete", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username }) });
      const d = await res.json();
      if (d.error) setAccMsg(d.error);
      else fetchAll();
    } catch { setAccMsg("Server error"); }
  }

  // ── Payment Methods ──
  function openNewPm() { setEditingPm(null); setPmForm({ name: "", type: "bank", details: "", isActive: true, order: 0 }); setPmMsg(""); }
  function openEditPm(pm: PaymentMethod) {
    setEditingPm(pm);
    setPmForm({ name: pm.name, type: pm.type, details: pm.details, isActive: pm.isActive, order: pm.order });
    setPmMsg("");
  }

  async function savePm(e: FormEvent) {
    e.preventDefault(); setLoading(true); setPmMsg("");
    try {
      if (editingPm) {
        await fetch("/api/payment-methods", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id: editingPm._id, ...pmForm }) });
      } else {
        await fetch("/api/payment-methods", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(pmForm) });
      }
      setEditingPm(null); fetchAll(); setPmMsg("Saved!");
    } catch { setPmMsg("Error saving"); }
    setLoading(false);
  }

  async function deletePm(id: string) {
    if (!confirm("Delete this payment method?")) return;
    await fetch("/api/payment-methods", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id: id }) });
    fetchAll();
  }

  // ── Volunteer Status ──
  async function updateVolunteerStatus(_id: string, status: string) {
    await fetch("/api/volunteers", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id, status }) });
    fetchAll();
  }

  // ── Lead Status ──
  async function updateLeadStatus(_id: string, status: string) {
    await fetch("/api/leads", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id, status }) });
    fetchAll();
  }

  function logout() { localStorage.removeItem("mrc_token"); router.replace("/login"); }

  if (!user) return null;

  // ── Charts data ──
  const viewsByCategory = blogs.reduce<Record<string, number>>((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + (b.views || 0);
    return acc;
  }, {});
  const pieData = Object.entries(viewsByCategory).map(([name, value]) => ({ name, value }));
  const postsByMonth = blogs.reduce<Record<string, number>>((acc, b) => {
    if (!b.createdAt) return acc;
    const m = new Date(b.createdAt).toLocaleString("default", { month: "short" });
    acc[m] = (acc[m] || 0) + 1;
    return acc;
  }, {});
  const lineData = Object.entries(postsByMonth).map(([name, posts]) => ({ name, posts }));
  const blogViewData = blogs.map((b) => ({ title: b.title.length > 20 ? b.title.slice(0, 20) + "…" : b.title, views: b.views || 0 }));

  const filteredLeads = leadFilter === "all" ? leads : leads.filter((l) => l.status === leadFilter);
  const filteredVolunteers = volunteerFilter === "all" ? volunteers : volunteers.filter((v) => v.status === volunteerFilter);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 flex">
      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 z-40 flex h-full w-56 flex-col border-r border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
        <div className="flex items-center gap-2.5 border-b border-zinc-800 px-5 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">M</div>
          <span className="text-sm font-semibold text-zinc-100">Dashboard</span>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {sidebarTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                tab === t.key
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
              }`}
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
              </svg>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-zinc-800 px-3 py-3">
          <button onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:bg-red-500/10 hover:text-red-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="ml-56 flex-1 px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-zinc-100">{sidebarTabs.find((t) => t.key === tab)?.label || "Dashboard"}</h1>
            <p className="text-sm text-zinc-500">Logged in as {user.username}</p>
          </div>
        </div>

        {/* ── OVERVIEW ── */}
        {tab === "overview" && (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Blog Posts", value: blogs.length, color: "text-emerald-400" },
                { label: "Accounts", value: accounts.length, color: "text-amber-400" },
                { label: "Total Views", value: blogs.reduce((s, b) => s + (b.views || 0), 0), color: "text-violet-400" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</p>
                  <p className={`mt-1 text-3xl font-bold ${s.color}`}>{String(s.value)}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Payment Methods", value: paymentMethods.length, color: "text-emerald-400" },
                { label: "Contact Leads", value: leads.length, color: "text-blue-400" },
                { label: "Volunteers", value: volunteers.length, color: "text-amber-400" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{s.label}</p>
                  <p className={`mt-1 text-3xl font-bold ${s.color}`}>{String(s.value)}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="mb-4 text-sm font-semibold text-zinc-200">Views per Blog Post</h3>
                {blogViewData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={blogViewData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="title" tick={{ fill: "#a1a1aa", fontSize: 10 }} />
                      <YAxis tick={{ fill: "#a1a1aa", fontSize: 11 }} />
                      <Tooltip contentStyle={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 8, color: "#e4e4e7" }} />
                      <Bar dataKey="views" fill="#059669" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : <p className="py-12 text-center text-sm text-zinc-500">No blog data yet.</p>}
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="mb-4 text-sm font-semibold text-zinc-200">Posts by Category</h3>
                {pieData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                        {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                      </Pie>
                      <Tooltip contentStyle={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 8, color: "#e4e4e7" }} />
                    </PieChart>
                  </ResponsiveContainer>
                ) : <p className="py-12 text-center text-sm text-zinc-500">No category data yet.</p>}
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 lg:col-span-2">
                <h3 className="mb-4 text-sm font-semibold text-zinc-200">Posts Published Over Time</h3>
                {lineData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="name" tick={{ fill: "#a1a1aa", fontSize: 11 }} />
                      <YAxis tick={{ fill: "#a1a1aa", fontSize: 11 }} allowDecimals={false} />
                      <Tooltip contentStyle={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 8, color: "#e4e4e7" }} />
                      <Line type="monotone" dataKey="posts" stroke="#059669" strokeWidth={2} dot={{ fill: "#059669" }} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : <p className="py-8 text-center text-sm text-zinc-500">No timeline data yet.</p>}
              </div>
            </div>
          </div>
        )}

        {/* ── BLOGS ── */}
        {tab === "blogs" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="text-sm text-zinc-500">{blogs.length}/30 posts</p>
                {blogs.length >= 30 && <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">Limit reached</span>}
              </div>
              <button
                onClick={openNewBlog}
                disabled={blogs.length >= 30}
                className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 px-5 py-2 text-xs font-semibold text-white transition-all hover:from-emerald-500 hover:to-teal-500 disabled:cursor-not-allowed disabled:opacity-40"
                title={blogs.length >= 30 ? "Maximum 30 posts reached" : ""}
              >+ New Post</button>
            </div>
            {(editBlog !== undefined) && (formTitle || editBlog === null) && (
              <form onSubmit={saveBlog} className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="mb-4 text-sm font-semibold text-zinc-200">{editBlog ? "Edit Post" : "New Post"}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input placeholder="Title" value={formTitle} onChange={(e) => { setFormTitle(e.target.value); if (!editBlog) setFormSlug(makeSlug(e.target.value)); }} className="col-span-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                  <div className="col-span-2">
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">Featured Image</label>
                    <div className="flex items-center gap-3">
                      <input type="file" accept="image/*" onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const fd = new FormData();
                        fd.append("file", file);
                        const res = await fetch("/api/upload", { method: "POST", body: fd });
                        const data = await res.json();
                        if (data.path) setFormImage(data.path);
                      }} className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-300 file:mr-3 file:rounded-lg file:border-0 file:bg-zinc-700 file:px-3 file:py-1 file:text-xs file:text-zinc-200" />
                      {formImage && <span className="shrink-0 truncate text-xs text-emerald-400">Uploaded</span>}
                    </div>
                  </div>
                  <input placeholder="Slug (auto-generated)" value={formSlug} onChange={(e) => setFormSlug(e.target.value)} className="rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                  <select value={formCategory} onChange={(e) => setFormCategory(e.target.value)} className="col-span-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 focus:border-emerald-500/50 focus:outline-none">
                    {["Education", "Women Empowerment", "Leadership", "Climate", "Health Rights", "Events"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <textarea placeholder="Excerpt" value={formExcerpt} onChange={(e) => setFormExcerpt(e.target.value)} rows={2} className="col-span-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                  <textarea placeholder="Content (full article)" value={formContent} onChange={(e) => setFormContent(e.target.value)} rows={5} className="col-span-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                </div>
                <div className="mt-4 flex gap-3">
                  <button type="submit" disabled={loading} className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-2 text-xs font-semibold text-white disabled:opacity-60">{loading ? "Saving..." : "Save"}</button>
                  <button type="button" onClick={() => setEditBlog(null)} className="rounded-full border border-zinc-700 px-6 py-2 text-xs font-semibold text-zinc-400">Cancel</button>
                </div>
                {blogError && <p className="mt-2 text-xs text-red-400">{blogError}</p>}
              </form>
            )}
            <div className="space-y-3">
              {blogs.map((b, i) => (
                <div key={b._id || i} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-all hover:bg-zinc-800/30">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-zinc-200">{b.title}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-zinc-500">
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-400">{b.category}</span>
                      <span>{b.views || 0} views</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2 pl-4">
                    <button onClick={() => openEditBlog(b)} className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-400 transition-all hover:border-emerald-500/30 hover:text-emerald-400">Edit</button>
                    <button onClick={() => b._id && deleteBlog(b._id)} className="rounded-full border border-red-500/20 px-3 py-1 text-xs font-medium text-red-400 transition-all hover:bg-red-500/10">Delete</button>
                  </div>
                </div>
              ))}
              {blogs.length === 0 && <p className="py-8 text-center text-sm text-zinc-500">No blog posts yet.</p>}
            </div>
          </div>
        )}

        {/* ── ACCOUNTS ── */}
        {tab === "accounts" && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-sm font-semibold text-zinc-200">Create Account</h3>
              <form onSubmit={createAccount} className="mt-4 space-y-4">
                <input type="text" placeholder="Username" value={newUser} onChange={(e) => setNewUser(e.target.value)} className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                <div className="relative">
                  <input type={showPass ? "text" : "password"} placeholder="Password" value={newPass} onChange={(e) => setNewPass(e.target.value)} className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 pr-10 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
                    {showPass ? (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
                <button type="submit" disabled={loading} className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-2.5 text-xs font-semibold text-white disabled:opacity-60">{loading ? "Creating..." : "Create Account"}</button>
                {accMsg && <p className={`text-sm font-medium ${accMsg.includes("created") ? "text-emerald-400" : "text-red-400"}`}>{accMsg}</p>}
              </form>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-sm font-semibold text-zinc-200">Existing Accounts ({accounts.length})</h3>
              {accounts.length === 0 ? <p className="mt-4 text-sm text-zinc-500">No accounts.</p> : (
                <ul className="mt-4 space-y-2">
                  {accounts.map((a) => (
                    <li key={a.username} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5">
                      <div>
                        <p className="text-sm font-medium text-zinc-200">{a.username}</p>
                        <p className="text-xs text-zinc-500">{a.role} · {new Date(a.createdAt).toLocaleDateString()}</p>
                      </div>
                      <button
                        onClick={() => deleteAccount(a.username)}
                        disabled={accounts.length <= 1}
                        className="rounded-full border border-red-500/20 px-3 py-1 text-xs font-medium text-red-400 transition-all hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                        title={accounts.length <= 1 ? "Cannot delete the last account" : ""}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* ── PAYMENT METHODS ── */}
        {tab === "payment-methods" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-zinc-500">{paymentMethods.length} methods</p>
              <button onClick={openNewPm} className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 px-5 py-2 text-xs font-semibold text-white transition-all hover:from-emerald-500 hover:to-teal-500">+ Add Method</button>
            </div>

            {/* Add/Edit Form */}
            {(editingPm !== undefined) && (pmForm.name || editingPm === null) && (
              <form onSubmit={savePm} className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="mb-4 text-sm font-semibold text-zinc-200">{editingPm ? "Edit Payment Method" : "New Payment Method"}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input placeholder="Method name (e.g. Bank Alfalah)" value={pmForm.name} onChange={(e) => setPmForm({ ...pmForm, name: e.target.value })} className="rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                  <select value={pmForm.type} onChange={(e) => setPmForm({ ...pmForm, type: e.target.value })} className="rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 focus:border-emerald-500/50 focus:outline-none" required>
                    {Object.entries(typeLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                  <textarea placeholder="Payment details (account number, IBAN, etc.)" value={pmForm.details} onChange={(e) => setPmForm({ ...pmForm, details: e.target.value })} rows={3} className="col-span-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500/50 focus:outline-none" required />
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm text-zinc-400">
                      <input type="checkbox" checked={pmForm.isActive} onChange={(e) => setPmForm({ ...pmForm, isActive: e.target.checked })} className="rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/30" />
                      Active
                    </label>
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-zinc-400">Order:</label>
                      <input type="number" value={pmForm.order} onChange={(e) => setPmForm({ ...pmForm, order: Number(e.target.value) })} className="w-20 rounded-xl border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-zinc-100 focus:border-emerald-500/50 focus:outline-none" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <button type="submit" disabled={loading} className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-2 text-xs font-semibold text-white disabled:opacity-60">{loading ? "Saving..." : "Save"}</button>
                  <button type="button" onClick={() => { setEditingPm(null); setPmMsg(""); }} className="rounded-full border border-zinc-700 px-6 py-2 text-xs font-semibold text-zinc-400">Cancel</button>
                </div>
                {pmMsg && <p className="mt-2 text-xs text-emerald-400">{pmMsg}</p>}
              </form>
            )}

            {/* Payment Methods List */}
            <div className="space-y-3">
              {paymentMethods.map((pm) => (
                <div key={pm._id} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-all hover:bg-zinc-800/30">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-semibold text-zinc-200">{pm.name}</p>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${pm.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-zinc-800 text-zinc-500"}`}>{pm.isActive ? "Active" : "Inactive"}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-zinc-500">
                      <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-400">{typeLabels[pm.type] || pm.type}</span>
                      <span className="truncate text-zinc-600">{pm.details.slice(0, 60)}{pm.details.length > 60 ? "…" : ""}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2 pl-4">
                    <button onClick={() => openEditPm(pm)} className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-400 transition-all hover:border-emerald-500/30 hover:text-emerald-400">Edit</button>
                    <button onClick={() => deletePm(pm._id)} className="rounded-full border border-red-500/20 px-3 py-1 text-xs font-medium text-red-400 transition-all hover:bg-red-500/10">Delete</button>
                  </div>
                </div>
              ))}
              {paymentMethods.length === 0 && <p className="py-8 text-center text-sm text-zinc-500">No payment methods yet.</p>}
            </div>
          </div>
        )}

        {/* ── LEADS ── */}
        {tab === "leads" && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <p className="text-sm text-zinc-500">{leads.length} total</p>
              <select value={leadFilter} onChange={(e) => setLeadFilter(e.target.value)} className="rounded-xl border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-300 focus:border-emerald-500/50 focus:outline-none">
                <option value="all">All Stages</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="converted">Converted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="space-y-3">
              {filteredLeads.map((l) => (
                <div key={l._id} className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-all hover:bg-zinc-800/30">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-zinc-200">{l.name}</p>
                      <p className="text-xs text-zinc-500">{l.email}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      l.status === "new" ? "bg-blue-500/10 text-blue-400" :
                      l.status === "contacted" ? "bg-amber-500/10 text-amber-400" :
                      l.status === "qualified" ? "bg-violet-500/10 text-violet-400" :
                      l.status === "converted" ? "bg-emerald-500/10 text-emerald-400" :
                      "bg-zinc-500/10 text-zinc-400"
                    }`}>{l.status}</span>
                  </div>
                  <div className="mt-2 space-y-1 text-xs text-zinc-500">
                    <p><span className="text-zinc-400">Subject:</span> {l.subject}</p>
                    <p><span className="text-zinc-400">Message:</span> {l.message.slice(0, 120)}{l.message.length > 120 ? "…" : ""}</p>
                    <p><span className="text-zinc-400">Received:</span> {new Date(l.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {l.status === "new" && <button onClick={() => updateLeadStatus(l._id, "contacted")} className="rounded-full border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400 hover:bg-amber-500/10">Mark Contacted</button>}
                    {l.status === "contacted" && <button onClick={() => updateLeadStatus(l._id, "qualified")} className="rounded-full border border-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400 hover:bg-violet-500/10">Qualify</button>}
                    {l.status === "qualified" && <button onClick={() => updateLeadStatus(l._id, "converted")} className="rounded-full border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/10">Convert</button>}
                    {(l.status === "new" || l.status === "contacted" || l.status === "qualified") && (
                      <button onClick={() => updateLeadStatus(l._id, "closed")} className="rounded-full border border-zinc-500/20 px-3 py-1 text-xs font-medium text-zinc-400 hover:bg-zinc-500/10">Close</button>
                    )}
                  </div>
                </div>
              ))}
              {filteredLeads.length === 0 && <p className="py-8 text-center text-sm text-zinc-500">No leads found.</p>}
            </div>
          </div>
        )}

        {/* ── VOLUNTEERS ── */}
        {tab === "volunteers" && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <p className="text-sm text-zinc-500">{volunteers.length} total</p>
              <select value={volunteerFilter} onChange={(e) => setVolunteerFilter(e.target.value)} className="rounded-xl border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-300 focus:border-emerald-500/50 focus:outline-none">
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
              </select>
            </div>
            <div className="space-y-3">
              {filteredVolunteers.map((v) => (
                <div key={v._id} className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-all hover:bg-zinc-800/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-zinc-200">{v.name}</p>
                      <p className="text-xs text-zinc-500">{v.email} · {v.phone}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      v.status === "new" ? "bg-blue-500/10 text-blue-400" :
                      v.status === "contacted" ? "bg-amber-500/10 text-amber-400" :
                      v.status === "approved" ? "bg-emerald-500/10 text-emerald-400" :
                      "bg-red-500/10 text-red-400"
                    }`}>{v.status}</span>
                  </div>
                  <div className="mt-2 space-y-1 text-xs text-zinc-500">
                    <p><span className="text-zinc-400">Skills:</span> {v.skills}</p>
                    <p><span className="text-zinc-400">Availability:</span> {v.availability}</p>
                    <p><span className="text-zinc-400">Submitted:</span> {new Date(v.createdAt).toLocaleDateString()}</p>
                    {v.message && <p className="italic text-zinc-400">&ldquo;{v.message}&rdquo;</p>}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {v.status !== "contacted" && <button onClick={() => updateVolunteerStatus(v._id, "contacted")} className="rounded-full border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400 hover:bg-amber-500/10">Mark Contacted</button>}
                    {v.status !== "approved" && <button onClick={() => updateVolunteerStatus(v._id, "approved")} className="rounded-full border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/10">Approve</button>}
                    {v.status !== "declined" && <button onClick={() => updateVolunteerStatus(v._id, "declined")} className="rounded-full border border-red-500/20 px-3 py-1 text-xs font-medium text-red-400 hover:bg-red-500/10">Decline</button>}
                  </div>
                </div>
              ))}
              {filteredVolunteers.length === 0 && <p className="py-8 text-center text-sm text-zinc-500">No volunteers found.</p>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
