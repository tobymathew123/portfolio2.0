import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">

        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new ideas.
        </p>

        {/* Contact Card */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-8 md:p-12">
          <div className="space-y-8">

            {/* Phone Item */}
            <div className="flex items-center space-x-6">
              <div className="p-4 rounded-full bg-primary/10 shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-1">Phone</h4>
                <a
                  href="tel:+919606220616"
                  className="text-muted-foreground hover:text-primary transition-colors text-base"
                >
                  +91 9606220616
                </a>
              </div>
            </div>

            {/* Location Item */}
            <div className="flex items-center space-x-6">
              <div className="p-4 rounded-full bg-primary/10 shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-1">Location</h4>
                <span className="text-muted-foreground text-base">
                  Trivandrum, IND
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-6"></div>

            {/* Social Links (Mail icon added here) */}
            <div className="flex justify-center space-x-8 pt-2">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tobymmathew300804/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin size={32} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tobymatheww/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E4405F] transition-colors transform hover:scale-110 duration-300"
              >
                <Instagram size={32} />
              </a>

              {/* Mail Icon */}
              <a
                href="mailto:tobymmathew@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
              >
                <Mail size={32} />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
