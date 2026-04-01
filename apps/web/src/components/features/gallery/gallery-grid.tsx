'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, MapPin } from 'lucide-react';
import { galleryProjects } from '@hv/constants';
import { cn } from '@hv/utils';
import { StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';

const categories = ['All', ...new Set(galleryProjects.map((p) => p.category))];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeFilter === 'All'
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'rounded-full px-4 py-2 font-body text-sm font-medium transition-colors',
                activeFilter === cat
                  ? 'bg-primary-container text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <button
                onClick={() => setLightbox(project.id)}
                className="group relative block w-full overflow-hidden rounded-xl text-left"
              >
                <div className="relative aspect-[4/3] bg-surface-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-display text-sm font-semibold text-surface">
                      {project.title}
                    </p>
                    {project.location && (
                      <p className="mt-1 flex items-center gap-1 font-body text-xs text-surface/70">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Lightbox */}
        {lightbox && (() => {
          const project = galleryProjects.find((p) => p.id === lightbox);
          if (!project) return null;
          return (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-on-background/90 p-4 backdrop-blur-sm"
              onClick={() => setLightbox(null)}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface/10 text-surface transition-colors hover:bg-surface/20"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              <div
                className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="90vw"
                  />
                </div>
                <div className="bg-on-background p-4">
                  <p className="font-display text-base font-semibold text-surface">{project.title}</p>
                  {project.location && (
                    <p className="mt-1 flex items-center gap-1.5 font-body text-sm text-surface/60">
                      <MapPin className="h-3.5 w-3.5" />{project.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
