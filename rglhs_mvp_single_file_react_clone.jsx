export default function RGLHSMVP() {
  const notices = [
    { id: 1, title: "ভর্তি বিজ্ঞপ্তি (২০২৫) — সংশোধিত", date: "2024-12-18", href: "#" },
    { id: 2, title: "এসএসসি ২০২৪ — আসন বিন্যাস (Seat Plan)", date: "2024-02-14", href: "#" },
    { id: 3, title: "৩য় শ্রেণি — অপেক্ষমান তালিকা-১", date: "2024-12-24", href: "#" },
    { id: 4, title: "বার্ষিক ক্রীড়া প্রতিযোগিতা — ফলাফল প্রকাশ", date: "2025-03-02", href: "#" },
    { id: 5, title: "বিদ্যালয়ের ইউনিফর্ম ও পোশাক নীতিমালা আপডেট", date: "2025-01-05", href: "#" },
  ];

  const teachers = [
    { name: "Md. A. Rahman", subject: "Headmaster", phone: "01309-127024" },
    { name: "Farzana Haque", subject: "Bangla", phone: "" },
    { name: "M. S. Islam", subject: "Mathematics", phone: "" },
    { name: "R. K. Roy", subject: "Science", phone: "" },
  ];

  const cards = [
    { title: "নোটিশ", desc: "ভর্তি, পরীক্ষা ও প্রশাসনিক বিজ্ঞপ্তি", href: "#notices" },
    { title: "শিক্ষকবৃন্দ", desc: "বিভাগ ও শিক্ষক তালিকা", href: "#teachers" },
    { title: "ছবির গ্যালারী", desc: "স্কুলের ইভেন্টের ছবি", href: "#gallery" },
    { title: "যোগাযোগ", desc: "ঠিকানা ও যোগাযোগের তথ্য", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Top bar */}
      <div className="w-full bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span>রাজশাহী গভঃ ল্যাবরেটরী হাই স্কুল</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#notices" className="opacity-90 hover:opacity-100">নোটিশ</a>
            <a href="#about" className="opacity-90 hover:opacity-100">পরিচিতি</a>
            <a href="#teachers" className="opacity-90 hover:opacity-100">শিক্ষকবৃন্দ</a>
            <a href="#contact" className="opacity-90 hover:opacity-100">যোগাযোগ</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold">Established 1969 — Rajshahi</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Govt. Laboratory High School, Rajshahi
              </h1>
              <p className="mt-3 text-slate-600 max-w-prose">
                শিক্ষার জন্য এসো, সেবার জন্য যাও — আধুনিক কারিকুলাম, সহ-শিক্ষা কার্যক্রম ও শুদ্ধাচার চর্চায় অঙ্গীকারবদ্ধ একটি সরকারি বিদ্যালয়।
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#notices" className="rounded-2xl px-5 py-3 bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700">সর্বশেষ নোটিশ</a>
                <a href="#about" className="rounded-2xl px-5 py-3 bg-white border font-semibold shadow hover:bg-slate-50">আরও জানুন</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
                <img
                  alt="School campus placeholder"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1080&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-xl shadow border text-sm">Rajshahi • Bangladesh</div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-6" id="cards">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <a key={c.title} href={c.href} className="group block rounded-2xl border shadow hover:shadow-md bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg group-hover:underline">{c.title}</h3>
                  <p className="text-sm text-slate-500">{c.desc}</p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Notices */}
      <section id="notices" className="max-w-6xl mx-auto px-4 mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold">নোটিশ বোর্ড</h2>
            <p className="text-slate-600">ভর্তি, পরীক্ষা, সভা ও অন্যান্য আপডেট</p>
          </div>
          <div className="flex gap-2">
            <input placeholder="Search notices" className="rounded-xl border px-3 py-2 text-sm" />
            <select className="rounded-xl border px-3 py-2 text-sm">
              <option>All</option>
              <option>Admission</option>
              <option>Exam</option>
              <option>General</option>
            </select>
          </div>
        </div>
        <ul className="mt-4 divide-y rounded-2xl border bg-white shadow">
          {notices.map((n) => (
            <li key={n.id} className="p-4 hover:bg-slate-50 flex items-center justify-between">
              <div>
                <a className="font-semibold hover:underline" href={n.href}>{n.title}</a>
                <div className="text-xs text-slate-500">Published: {new Date(n.date).toLocaleDateString()}</div>
              </div>
              <a href={n.href} className="text-sm rounded-full border px-3 py-1">View</a>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-extrabold">পরিচিতি</h2>
            <p>
              রাজশাহী গভঃ ল্যাবরেটরী হাই স্কুল ১৯৬৯ সালে প্রতিষ্ঠিত একটি সুপ্রতিষ্ঠিত সরকারি মাধ্যমিক বিদ্যালয়।
              শৃঙ্খলা, নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে শিক্ষার্থীদের ভবিষ্যৎ গড়ায় বিদ্যালয়টি অঙ্গীকারবদ্ধ।
            </p>
            <ul className="list-disc pl-5 text-slate-700">
              <li>শ্রেণি: ৩য়–১০ম</li>
              <li>ঠিকানা: লক্ষ্মীপুর, রাজশাহী</li>
              <li>স্লোগান: “Enter to Learn, Leave to Serve.”</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6].map((i) => (
              <img key={i} className="rounded-xl border object-cover aspect-square" alt="gallery" src={`https://picsum.photos/seed/rglhs${i}/400/400`} />
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-extrabold">শিক্ষকবৃন্দ (সংক্ষিপ্ত)</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachers.map((t) => (
            <div key={t.name} className="rounded-2xl border bg-white p-4 shadow">
              <div className="h-24 w-24 rounded-full bg-slate-200 mx-auto mb-3" />
              <h3 className="text-center font-semibold">{t.name}</h3>
              <p className="text-center text-sm text-slate-600">{t.subject}</p>
              {t.phone && <p className="text-center text-xs text-slate-500 mt-1">☎ {t.phone}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 mt-12">
        <div className="rounded-2xl border bg-white p-6 shadow">
          <h2 className="text-2xl font-extrabold">যোগাযোগ</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">ঠিকানা</h4>
              <p className="text-sm text-slate-700">Govt. Laboratory High School, Rajshahi-6000</p>
            </div>
            <div>
              <h4 className="font-semibold">ফোন</h4>
              <p className="text-sm text-slate-700">Telephone: 02588802304 | Cell: 01309-127024</p>
            </div>
            <div>
              <h4 className="font-semibold">ইমেইল</h4>
              <p className="text-sm text-slate-700">glhsr1969@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Govt. Laboratory High School, Rajshahi — MVP Demo</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
