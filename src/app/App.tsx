import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { services } from './data/services';
import { profile } from './data/profile';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="max-w-[1800px] mx-auto px-12 py-24">
        <Hero
          name={profile.name}
          title={profile.title}
          description={profile.description}
        />

        <div className="mb-20">
          <div className="flex items-baseline gap-6 mb-4">
            <h2 className="text-sm tracking-widest text-zinc-500 uppercase">
              Selected Works
            </h2>
            <div className="flex-1 h-px bg-zinc-700"></div>
            <span className="text-sm tracking-widest text-zinc-500">
              2026
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-t border-zinc-700">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="/showcase2.html"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest text-zinc-900 uppercase transition-all duration-300 bg-zinc-100 hover:bg-white"
          >
            Visual Showcase
          </a>
        </div>

        <footer className="mt-32 pt-12 border-t border-zinc-700">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-zinc-400">© 2026 {profile.name}. All Rights Reserved.</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-xs tracking-widest text-zinc-500 uppercase">Connect</p>
              <div className="flex items-center gap-6">
                {profile.socialLinks.github && (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
                  >
                    <Github className="size-5" />
                  </a>
                )}
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {profile.socialLinks.email && (
                  <a
                    href={`mailto:${profile.socialLinks.email}`}
                    className="text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
                  >
                    <Mail className="size-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}