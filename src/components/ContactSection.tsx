import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    // Honeypot bot trap
    if (formData.get("website")) {
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://yutech.app.n8n.cloud/webhook/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block"
          >
            Start a Project
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-7xl mb-6"
          >
            Let's Build Something
            <br />
            <span className="text-gradient-accent">Extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to transform your digital presence? Our team is eager to hear about your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="website" className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input name="name" required className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input type="email" name="email" required className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Company</label>
                <input name="company" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent" />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  What service are you interested in?
                </label>
                <select
                  name="service"
                  required
                  className="w-full bg-black border-b border-border py-3 focus:outline-none focus:border-accent"
                >
                  <option value="">Select a service</option>
                  <option value="eLearning Solutions">eLearning Solutions</option>
                  <option value="Website & App Development">Website & App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Packaging Design">Packaging Design</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Automation">Automation</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={4} name="message" required className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent resize-none" />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-premium group mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </motion.button>

              {status === "success" && <p className="text-green-500 text-sm mt-4">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-500 text-sm mt-4">Something broke. Try again.</p>}
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="card-premium flex gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <h4>Email Us</h4>
                <p className="text-sm text-muted-foreground">yughmatechnologies@gmail.com</p>
              </div>
            </div>

            <div className="card-premium flex gap-4">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <h4>Call Us</h4>
                <p className="text-sm text-muted-foreground">+91 7892450278</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;