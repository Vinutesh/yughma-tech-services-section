import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================= PROJECT DATA ================= */

const projects = {
  elearning: [
    {
      title: "Customer support training- The P.E.T.E framework",
      video: "/videos/Customer support training- The P.E.T.E framework.mp4",
      thumbnail: "/thumbnails/petethumbnail.png",
      description: "Customer support training module using the P.E.T.E framework.",
    },
    {
      title: "Health app product demo",
      video: "/videos/Health app product demo - Desktop.mp4",
      thumbnail: "/thumbnails/healthcare.png",
      description: "Desktop demo walkthrough for a healthcare product app.",
    },
    {
      title: "How to have efficient meetings",
      video: "/videos/How to have efficient meetings.mp4",
      thumbnail: "/thumbnails/efficentmeetings.png",
      description: "Corporate learning module on running efficient meetings.",
    },
    {
      title: "Information security awareness ",
      video: "/videos/Information security awareness - contemporary.mp4",
      thumbnail: "/thumbnails/infoawareness.png",
      description: "Modern infosec awareness training for employees.",
    },
    {
      title: "Healthy food promotion ",
      video: "/videos/Healthy food promotion.mp4",
      thumbnail: "/thumbnails/Healthy food promotion.png",
      description: "Promotional training module for healthy food products.",
    },
    {
      title: "Shipping and logistics services ",
      video: "/videos/Shipping and logistics services.mp4",
      thumbnail: "/thumbnails/Shipping and logistics services.png",
      description: "Training module for shipping and logistics operations.",
    },
    {
      title: "CSR and sustainability ",
      video: "/videos/CSR and sustainability.mp4",
      thumbnail: "/thumbnails/CSR and sustainability.png",
      description:
        "Training module for corporate social responsibility and sustainability practices.",
    },
  ],

  web: [
    {
      title: "B2B Product Catalogue Website",
      description:
        "A medical-themed responsive product catalogue website with clean UI, WhatsApp CTA, and professional branding.",
      images: [
        "/projects/home.png",
        "/projects/about-us.png",
        "/projects/products.png",
        "/projects/contact-us.png",
      ],
      live: "https://innovativehealthcareproducts.vercel.app/",
    },
  ],

  uiux: [
    {
      title: "Yughma Academy",
      description:
        "A clean learning platform concept with cohort onboarding, mentors, and outcomes pages.",
      route: "/projects/yughma-academy",
    },
    {
      title: "Yughma Finance",
      description:
        "A premium fintech dashboard concept with scheduling, confirmation, and risk insights.",
      route: "/projects/yughma-finance",
    },
    {
      title: "Yughma Events",
      description:
        "An immersive event platform UI concept with ticketing, checkout, and event tiers.",
      route: "/projects/yughma-events",
    },
  ],
};

export type Category = keyof typeof projects;

type ProjectItem = {
  title: string;
  description?: string;

  // video projects
  video?: string;
  thumbnail?: string;

  // web projects
  images?: string[];
  live?: string;

  // uiux projects
  route?: string;
};

/* ================= VIDEO PREVIEW COMPONENT ================= */

function VideoPreview({
  projectKey,
  video,
  thumbnail,
  title,
  playingKey,
  setPlayingKey,
}: {
  projectKey: string;
  video: string;
  thumbnail?: string;
  title: string;
  playingKey: string | null;
  setPlayingKey: (key: string | null) => void;
}) {
  const isPlaying = playingKey === projectKey;

  return (
    <div className="relative w-full h-44 overflow-hidden rounded-xl border border-white/10 bg-black/30">
      {!isPlaying ? (
        <>
          {thumbnail ? (
            <img
              src={encodeURI(thumbnail)}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-white/50">
              No thumbnail available
            </div>
          )}

          <div className="absolute inset-0 bg-black/35" />

          <button
            onClick={() => setPlayingKey(projectKey)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play video for ${title}`}
          >
            <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-105 transition">
              <Play className="w-7 h-7 text-black ml-1" />
            </span>
          </button>
        </>
      ) : (
        <>
          <video
            src={encodeURI(video)}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />

          <button
            onClick={() => setPlayingKey(null)}
            className="absolute top-2 right-2 text-xs px-3 py-1 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
}

/* ================= MACBOOK FRAME ================= */

function MacbookFrame({ image, title }: { image: string; title: string }) {
  return (
    <div className="w-full">
      <div className="relative w-full rounded-2xl bg-[#0b0b0f] border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black/70 border border-white/10 z-10" />

        <div className="p-3">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
            <img
              src={encodeURI(image)}
              alt={`${title} preview`}
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 h-3 w-[85%] rounded-b-[999px] bg-gradient-to-b from-white/10 to-white/0 blur-[0.2px]" />
    </div>
  );
}

/* ================= WEB PREVIEW ================= */

function WebProjectPreview({ title, images }: { title: string; images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="w-full">
      <MacbookFrame image={activeImage} title={title} />

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
        {images.map((img) => {
          const isActive = img === activeImage;

          return (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              className={`shrink-0 rounded-xl border overflow-hidden transition ${
                isActive
                  ? "border-white/40 ring-2 ring-white/20"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={encodeURI(img)}
                alt={`${title} thumbnail`}
                className="w-24 h-16 object-cover"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ================= MODAL ================= */

const WorkModal = ({
  category,
  onClose,
}: {
  category: Category;
  onClose: () => void;
}) => {
  const list = projects[category] as ProjectItem[];
  const navigate = useNavigate();

  const [playingKey, setPlayingKey] = useState<string | null>(null);

  const handleClose = () => {
    setPlayingKey(null);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg overflow-y-auto"
    >
      <div className="container mx-auto px-6 py-24 relative">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-xs uppercase tracking-widest text-white/60 hover:text-white"
        >
          Close ✕
        </button>

        <h2 className="text-4xl md:text-5xl font-semibold mb-16 capitalize text-white">
          {category} Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((project) => {
            const projectKey = `${category}-${project.title}`;

            return (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg ${
                  project.images ? "md:col-span-2" : ""
                }`}
              >
                {/* ELEARNING VIDEO */}
                {project.video ? (
                  <div className="mb-5">
                    <VideoPreview
                      projectKey={projectKey}
                      video={project.video}
                      thumbnail={project.thumbnail}
                      title={project.title}
                      playingKey={playingKey}
                      setPlayingKey={setPlayingKey}
                    />
                  </div>
                ) : null}

                {/* WEB PROJECT PREVIEW */}
                {project.images && project.images.length > 0 ? (
                  <div className="mb-6">
                    <WebProjectPreview title={project.title} images={project.images} />
                  </div>
                ) : null}

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                {project.description ? (
                  <p className="text-sm text-white/70">{project.description}</p>
                ) : null}

                {/* VIEW LIVE */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg"
                  >
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}

                {/* UIUX OPEN ROUTE */}
                {project.route ? (
                  <button
                    onClick={() => {
                      handleClose();
                      navigate(project.route!);
                    }}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg"
                  >
                    Open Project <ArrowRight className="w-4 h-4" />
                  </button>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

/* ================= WORK SECTION ================= */

const WorkSection = ({
  openCategory,
  onCategoryOpened,
}: {
  openCategory: Category | null;
  onCategoryOpened: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [activeCategory, setActiveCategory] = useState<null | Category>(null);

  // Auto open modal directly from Services Explore button
  useEffect(() => {
    if (!openCategory) return;

    setActiveCategory(openCategory);
    onCategoryOpened();
  }, [openCategory, onCategoryOpened]);

  return (
    <>
      <section
        id="work"
        ref={ref}
        className="relative py-32 overflow-visible scroll-mt-28 bg-transparent"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block"
          >
            Our Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mb-20"
          >
            Successful Projects
          </motion.h2>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              onClick={() => setActiveCategory("elearning")}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="card-premium cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest text-accent">
                eLearning
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Enterprise Learning
              </h3>
            </motion.div>

            <motion.div
              onClick={() => setActiveCategory("web")}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="card-premium cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest text-accent">
                Web
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Web Platforms
              </h3>
            </motion.div>

            <motion.div
              onClick={() => setActiveCategory("uiux")}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="card-premium cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest text-accent">
                UI/UX
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                UI/UX Case Studies
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeCategory && (
          <WorkModal
            category={activeCategory}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSection;
