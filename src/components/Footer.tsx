import { useState } from "react";
import logo from "@/assets/alexier-logo.jpeg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type ModalKey = "privacy" | "terms" | "support" | null;

export function Footer() {
  const [open, setOpen] = useState<ModalKey>(null);

  return (
    <footer className="relative bg-gradient-champagne text-coffee border-t border-gold/30 pt-14 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-40 pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[40rem] rounded-full bg-gradient-gold opacity-15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="logo-halo logo-shine inline-flex animate-logo-float h-16 w-16">
              <img src={logo} alt="Alexier" className="logo-transparent h-full w-full object-contain" />
            </span>
            <div>
              <div className="font-display text-xl text-gradient-gold font-bold">Alexier Productions</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-coffee/60">India's Premium OTT Partner</div>
            </div>
          </div>

          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
            <FooterLink onClick={() => setOpen("privacy")}>Privacy Policy</FooterLink>
            <span className="text-coffee/30">|</span>
            <FooterLink onClick={() => setOpen("terms")}>Terms &amp; Conditions</FooterLink>
            <span className="text-coffee/30">|</span>
            <FooterLink onClick={() => setOpen("support")}>24×7 Support</FooterLink>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/20 text-center text-sm text-coffee/60">
          © 2026 Alexier Productions. All Rights Reserved.
        </div>
      </div>

      <Dialog open={open === "privacy"} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] bg-ivory text-coffee border-gold/40">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-gradient-gold">Privacy Policy – Alexier Productions</DialogTitle>
            <DialogDescription className="text-coffee/60">Last Updated: June 2026</DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <PrivacyContent />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={open === "terms"} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] bg-ivory text-coffee border-gold/40">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-gradient-gold">Website Terms &amp; Conditions – Alexier Productions</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <TermsContent />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={open === "support"} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-lg bg-ivory text-coffee border-gold/40">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-gradient-gold">Alexier Productions Support</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@alexierproductions.com" className="text-gradient-gold hover:underline">
                support@alexierproductions.com
              </a>
            </p>
            <p><strong>Business Support:</strong> Available 24×7</p>
            <p><strong>Response Time:</strong> Within 24 Hours</p>
            <p className="text-coffee/75 pt-2 border-t border-gold/20">
              For project inquiries, dubbing services, localization, translation, subtitling, and production support, please contact our support team.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}

function FooterLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative text-coffee/80 hover:text-coffee transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-500" />
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-lg font-semibold text-coffee mb-2">{title}</h3>
      <div className="text-sm text-coffee/80 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="pt-2">
      <Section title="1. Introduction">
        <p>Alexier Productions ("Alexier", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, contact us, or use our services.</p>
      </Section>
      <Section title="2. Information We Collect">
        <p>We may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name</li><li>Email address</li><li>Phone number</li><li>Company name</li>
          <li>Project details and requirements</li><li>Billing information</li>
          <li>Website usage data (IP address, browser type, device information)</li>
        </ul>
      </Section>
      <Section title="3. How We Use Your Information">
        <ul className="list-disc pl-5 space-y-1">
          <li>Respond to inquiries and project requests</li>
          <li>Provide dubbing, localization, translation, subtitling, and production services</li>
          <li>Process invoices and payments</li>
          <li>Improve our website and services</li>
          <li>Communicate updates and project information</li>
        </ul>
      </Section>
      <Section title="4. Data Sharing">
        <p>We do not sell your personal information. Information may be shared only with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Authorized employees and contractors</li>
          <li>Service providers assisting in project execution</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </Section>
      <Section title="5. Data Security">
        <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>
      </Section>
      <Section title="6. Data Retention">
        <p>We retain information only as long as necessary for business, legal, accounting, or contractual purposes.</p>
      </Section>
      <Section title="7. Cookies">
        <p>Our website may use cookies and analytics tools to improve user experience and understand website performance. You may disable cookies through your browser settings.</p>
      </Section>
      <Section title="8. Your Rights">
        <ul className="list-disc pl-5 space-y-1">
          <li>Access to your personal data</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of personal information (subject to legal requirements)</li>
          <li>Withdrawal of consent where applicable</li>
        </ul>
      </Section>
      <Section title="9. Third-Party Links">
        <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
      </Section>
      <Section title="10. Contact Us">
        <p>Alexier Productions<br />Email: <a href="mailto:alexierceo@gmail.com" className="text-gradient-gold hover:underline">alexierceo@gmail.com</a></p>
        <p>For privacy-related concerns, please contact us at the above email address.</p>
      </Section>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="pt-2">
      <Section title="1. Acceptance">
        <p>By accessing and using the Alexier Productions website, you agree to comply with these Terms and Conditions.</p>
      </Section>
      <Section title="2. Services">
        <p>Alexier Productions provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Dubbing Services</li><li>Voice Recording</li><li>Localization</li>
          <li>Translation</li><li>Subtitling</li><li>Audio Production</li>
          <li>Content Adaptation</li><li>Media Production Services</li>
        </ul>
      </Section>
      <Section title="3. Intellectual Property">
        <p>All content on this website, including logos, graphics, text, audio, video, and design elements is the property of Alexier Productions unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.</p>
      </Section>
      <Section title="4. User Conduct">
        <p>Users agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use the website for unlawful purposes</li>
          <li>Attempt unauthorized access</li>
          <li>Upload harmful or malicious content</li>
          <li>Violate intellectual property rights</li>
        </ul>
      </Section>
      <Section title="5. Project Confidentiality">
        <p>Alexier Productions respects client confidentiality. Any shared project materials, scripts, recordings, or business information will be handled professionally and confidentially unless disclosure is legally required.</p>
      </Section>
      <Section title="6. Limitation of Liability">
        <p>Alexier Productions shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or services.</p>
      </Section>
      <Section title="7. Changes to Services">
        <p>We reserve the right to modify, suspend, or discontinue any service or website feature without prior notice.</p>
      </Section>
      <Section title="8. Governing Law">
        <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Madhya Pradesh, India.</p>
      </Section>
      <Section title="9. Contact">
        <p>Alexier Productions<br />Email: <a href="mailto:alexierceo@gmail.com" className="text-gradient-gold hover:underline">alexierceo@gmail.com</a></p>
      </Section>
    </div>
  );
}
