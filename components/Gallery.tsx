'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import {
  useLanguage,
  type Translations,
} from "@/components/LanguageProvider";

type GalleryImageKey = keyof Translations["gallery"]["imagesAlt"];

type ImageItem = {
  type: "image";
  key: GalleryImageKey;
  src: string;
};

type VideoItem = {
  type: "video";
  src: string;
  poster: string;
  labelIndex: number;
};

type ActiveMedia = ImageItem | VideoItem;

const imageItems: ImageItem[] = [
  {
    type: "image",
    key: "livingRoom",
    src: "/gallery/1.jpeg",
  },
  {
    type: "image",
    key: "bathroom",
    src: "/gallery/2.jpeg",
  },
  {
    type: "image",
    key: "roof",
    src: "/gallery/3.jpeg",
  },
  {
    type: "image",
    key: "exterior",
    src: "/gallery/4.jpeg",
  },
];

const videoItems: VideoItem[] = [
  {
    type: "video",
    src: "/gallery/5.mp4",
    poster: "/gallery/1.jpeg",
    labelIndex: 0,
  },
  {
    type: "video",
    src: "/gallery/6.mp4",
    poster: "/gallery/2.jpeg",
    labelIndex: 1,
  },
  {
    type: "video",
    src: "/gallery/7.mp4",
    poster: "/gallery/3.jpeg",
    labelIndex: 2,
  },
  {
    type: "video",
    src: "/gallery/8.mp4",
    poster: "/gallery/4.jpeg",
    labelIndex: 3,
  },
  {
    type: "video",
    src: "/gallery/9.mp4",
    poster: "/gallery/1.jpeg",
    labelIndex: 4,
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const [activeMedia, setActiveMedia] = useState<ActiveMedia | null>(null);

  useEffect(() => {
    if (!activeMedia) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMedia(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMedia]);

  return (
    <section
      id="gallery"
      className="mx-auto mt-20 max-w-6xl px-6 sm:px-12 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.gallery.title}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t.gallery.description}
          </h2>
        </div>

        <div className="mt-12 space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {t.gallery.photosHeading}
            </h3>
            <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {imageItems.map((item, idx) => (
                <motion.button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveMedia(item)}
                  className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Image
                    src={item.src}
                    alt={t.gallery.imagesAlt[item.key]}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    {t.gallery.imagesAlt[item.key]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {t.gallery.videosHeading}
            </h3>
            <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
              {videoItems.map((item, idx) => (
                <motion.button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveMedia(item)}
                  className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={item.poster}
                      alt={t.gallery.videoLabels[item.labelIndex]}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-slate-950/30 transition group-hover:bg-slate-950/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition group-hover:scale-105">
                        <Play className="h-6 w-6 fill-slate-900 text-slate-900" />
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-900/80 p-3 text-sm font-medium text-white">
                    {t.gallery.videoLabels[item.labelIndex]}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {activeMedia && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur px-3 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
            >
              <motion.div
              className="relative w-full max-w-4xl rounded-3xl bg-black/70 p-4 shadow-2xl sm:mx-0"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveMedia(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-lg transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/60"
                aria-label="Close media preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mt-6 flex justify-center">
                {activeMedia.type === "image" ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900">
                    <Image
                      src={activeMedia.src}
                      alt={t.gallery.imagesAlt[activeMedia.key]}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                    <video
                      key={activeMedia.src}
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full"
                    >
                      <source src={activeMedia.src} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>

              <p className="mt-6 px-4 text-center text-sm text-slate-100">
                {activeMedia.type === "image"
                  ? t.gallery.imagesAlt[activeMedia.key]
                  : t.gallery.videoLabels[activeMedia.labelIndex]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
