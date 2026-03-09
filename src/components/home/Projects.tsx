import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Villa Solar",
    location: "Ahmedabad",
    size: "col-span-2 row-span-2",
    img: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=2070",
  },
  {
    id: 2,
    title: "Commercial Warehouse",
    location: "Sanand",
    size: "col-span-1 row-span-1",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
  },
  {
    id: 3,
    title: "Industrial Plant",
    location: "GIDC",
    size: "col-span-1 row-span-1",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">
          Featured Installations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`${p.size} relative group overflow-hidden rounded-3xl bg-slate-200`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-emerald-400 font-medium text-sm">
                  {p.location}
                </p>
                <h3 className="text-white text-2xl font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
