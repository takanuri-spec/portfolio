import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link: string;
  year?: string;
  imageUrl: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden bg-zinc-800 transition-all duration-700 hover:bg-zinc-900 block h-96 border-b border-r border-zinc-700"
    >
      {/* Large index number */}
      <div className="absolute top-8 left-8 text-9xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors duration-700 leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Background Image - slides up on hover */}
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
        <div className="absolute inset-0 bg-zinc-900/80"></div>
        <ImageWithFallback
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        {/* Top section */}
        <div className="mt-24">
          <div className="flex items-baseline gap-4 mb-4">
            {service.year && (
              <span className="text-xs tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors duration-700 uppercase">
                {service.year}
              </span>
            )}
          </div>

          <h3 className="text-4xl font-light text-zinc-100 group-hover:text-white transition-colors duration-700 tracking-tight mb-4 leading-tight">
            {service.title}
          </h3>

          <div className="grid">
            {/* Short description - fades out */}
            <p className="col-start-1 row-start-1 text-zinc-400 leading-relaxed text-sm tracking-wide opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              {service.description}
            </p>

            {/* Full description - fades in */}
            <p className="col-start-1 row-start-1 text-zinc-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 text-sm tracking-wide pointer-events-none group-hover:pointer-events-auto">
              {service.fullDescription}
            </p>
          </div>
        </div>

        {/* Bottom section - tags slide up */}
        <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-400">
          <div className="flex flex-wrap gap-3">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs tracking-widest bg-zinc-100 text-zinc-900 uppercase font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
    </a>
  );
}