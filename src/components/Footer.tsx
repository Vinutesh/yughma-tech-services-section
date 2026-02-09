import { motion } from "framer-motion";

const Footer = () => {
  const links = {
    services: [
      { label: "Software Development", href: "#services" },
      { label: "Automation & AI Agents", href: "#services" },
      { label: "eLearning", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "Website & App Development", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Packaging Design", href: "#services" },
      { label: "Social Media Marketing", href: "#services" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
    social: [
      { label: "LinkedIn", href: "#" }, // replace with your real link
      { label: "Instagram", href: "#" }, // optional
    ],
  };

  return (
    <footer className="py-16 sm:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              YUGHMA TECHNOLOGIES
            </motion.a>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Engineering digital experiences that scale. Transforming visionary
              ideas into exceptional products.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {links.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2025 Yughma Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
