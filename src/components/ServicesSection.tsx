import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  GraduationCap,
  MonitorSmartphone,
  TrendingUp,
  Package,
  Share2,
  Code2,
  ArrowRight,
} from "lucide-react";
import { CardSpotlight } from "@/components/CardSpotlight";

type WorkCategory = "elearning" | "web" | "uiux";

const services = [
  {
    icon: GraduationCap,
    title: "eLearning Solutions",
    description:
      "We create engaging and performance-oriented learning experiences that drive real outcomes.",
    features: [
      "Custom eLearning development",
      "Scenario-based & interactive learning",
      "Compliance & regulatory training",
      "Microlearning & performance support",
      "Gamified assessments & simulations",
      "LMS-ready SCORM / xAPI courses",
    ],
    exploreType: "work" as const,
    exploreTarget: "elearning" as WorkCategory,
  },
  {
    icon: MonitorSmartphone,
    title: "Website & App Development",
    description:
      "We design and develop responsive, scalable, and secure digital products.",
    features: [
      "Corporate & product websites",
      "Web applications & portals",
      "Mobile app development",
      "CMS-based & custom builds",
      "API integrations & backend systems",
    ],
    exploreType: "work" as const,
    exploreTarget: "web" as WorkCategory,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We design intuitive, human-centered experiences that users love.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "UI design systems & style guides",
      "Usability testing & optimization",
      "Web & mobile UX design",
    ],
    exploreType: "work" as const,
    exploreTarget: "uiux" as WorkCategory,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "We help brands grow visibility, traffic, and conversions through data-driven marketing strategies.",
    features: [
      "SEO & performance marketing",
      "Content & campaign strategy",
      "Paid ads (Google, social platforms)",
      "Conversion optimization",
      "Analytics & reporting",
    ],
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "We create packaging that communicates value, builds trust, and stands out on the shelf.",
    features: [
      "Product packaging design",
      "Label & print-ready designs",
      "Brand-aligned visual concepts",
      "Consumer-focused layouts",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "We build and manage social media strategies that engage, convert, and retain audiences.",
    features: [
      "Social media strategy & planning",
      "Creative posts & campaigns",
      "Content calendars",
      "Platform-specific optimization",
      "Engagement & performance tracking",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "We engineer reliable, scalable software tailored to business needs.",
    features: [
      "Custom software development",
      "Enterprise applications",
      "Internal tools & dashboards",
      "Cloud-ready & scalable architectures",
      "Ongoing maintenance & support",
    ],
  },
  {
    icon: Code2,
    title: "Automation & AI Agents",
    description:
      "We automate workflows and develop AI agents that help businesses move faster and operate smarter.",
    features: [
      "Workflow automation & process optimization",
      "API integrations & system connectivity",
      "AI agents for support, sales & operations",
      "Document / knowledge base Q&A agents",
    ],
  },
];

const ServicesSection = ({
  onExploreWork,
}: {
  onExploreWork?: (category: WorkCategory) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleExplore = (service: (typeof services)[0]) => {
    if (!service.exploreType) return;

    if (service.exploreType === "work") {
      if (!onExploreWork) return;
      onExploreWork(service.exploreTarget as WorkCategory);
    }
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Services Built for Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From concept to deployment, we deliver end-to-end solutions that
            transform how businesses operate and engage with their audiences.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <div key={service.title} className="w-full h-full">
              <ServiceCard
                service={service}
                index={index}
                isInView={isInView}
                onExplore={() => handleExplore(service)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
  onExplore: () => void;
}

const ServiceCard = ({
  service,
  index,
  isInView,
  onExplore,
}: ServiceCardProps) => {
  const Icon = service.icon;
  const hasExplore = Boolean((service as any).exploreType);

  return (
    <CardSpotlight className="card-premium h-full min-h-[440px] flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.08 * index }}
        className="flex flex-col h-full"
      >
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-accent" />
        </div>

        <h3 className="font-display text-xl font-semibold mb-3">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-6">
          {service.description}
        </p>

        {/* Features */}
        <div className="mt-auto">
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="text-xs flex gap-2 text-muted-foreground"
              >
                <span className="w-1 h-1 rounded-full bg-accent mt-1" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Explore Button */}
          {hasExplore ? (
            <button
              onClick={onExplore}
              className="mt-7 inline-flex items-center justify-center gap-2 w-full rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-3 text-sm font-semibold"
            >
              Explore Work <ArrowRight className="w-4 h-4" />
            </button>
          ) : null}
        </div>
      </motion.div>
    </CardSpotlight>
  );
};

export default ServicesSection;
