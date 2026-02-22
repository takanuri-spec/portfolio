interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export function Hero({ name, title, description }: HeroProps) {
  return (
    <div className="mb-16">
      <div className="flex items-baseline gap-8 mb-8">
        <div className="text-7xl font-light text-zinc-50 tracking-tighter leading-none">
          {name}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm tracking-widest text-zinc-500 uppercase mb-4">Role</p>
          <p className="text-2xl text-zinc-200 font-light tracking-tight">{title}</p>
        </div>
        <div>
          <p className="text-sm tracking-widest text-zinc-500 uppercase mb-4">Philosophy</p>
          <p className="text-zinc-300 leading-relaxed tracking-wide">{description}</p>
        </div>
      </div>
    </div>
  );
}