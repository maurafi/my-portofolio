// [UPDATED] Main Homepage Composition
// Description: Menyusun struktur halaman utama portofolio Maulana Rafi secara lengkap dan koheren.
// Menggabungkan Navbar, Hero (Section 01), ProfessionalFocus (Section 01 Support),
// Projects (Section 02 Selected Works), Experiences & Education (Section 03 & 06),
// SkillsPreview (Section 04), Achievements & Certificates (Section 05),
// ContactCTA (Section 07), dan Footer.
// Reason: Menyelesaikan target website portofolio profesional Maulana Rafi sesuai MASTER PROMPT.

import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/section/Hero';
import ProfessionalFocus from '@/components/section/ProfessionalFocus';
import Projects from '@/components/section/Projects';
import Experiences from '@/components/section/Experiences';
import SkillsPreview from '@/components/section/SkillsPreview';
import Achievements from '@/components/section/Achievements';
import ContactCTA from '@/components/section/ContactCTA';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Section 01: Profile & Introduction */}
        <Hero />

        {/* Section 01 Support: 3 Core Focus Pillars & Key Highlights */}
        <ProfessionalFocus />

        {/* Section 02: Selected Works (5 Featured Case Studies) */}
        <Projects />

        {/* Section 03 & 06: Experience, Leadership & Education Timeline */}
        <Experiences />

        {/* Section 04: Skills & Technical Expertise */}
        <SkillsPreview />

        {/* Section 05: Honors, Competition Achievements & Certifications */}
        <Achievements />

        {/* Section 07: Contact & Call to Action */}
        <ContactCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
