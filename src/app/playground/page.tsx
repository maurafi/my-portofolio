import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import PageHeader from '@/components/layout/PageHeader';
import Divider from '@/components/layout/Divider';

import Badge from '@/components/common/Badge';
import Tag from '@/components/common/Tag';
import Avatar from '@/components/common/Avatar';
import ExternalLink from '@/components/common/ExternalLink';

import { Button } from '@/components/ui/button';

import ProjectCard from '@/components/cards/ProjectCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import AchievementCard from '@/components/cards/AchievementCard';
import CertificateCard from '@/components/cards/CertificateCard';
import SkillCard from '@/components/cards/SkillCard';

import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';
import { achievements } from '@/data/achievements';
import { certificates } from '@/data/certificates';
import { skills } from '@/data/skills';

export default function PlaygroundPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <PageHeader eyebrow="Development Playground" title="Phase 5 Final Testing" description="Halaman ini digunakan untuk menguji seluruh reusable component sebelum digunakan pada Homepage production." />

        {/* Layout Components */}
        <Section>
          <Container>
            <SectionHeader title="Layout Components" description="Container, Section, Divider, Header" />

            <Divider />

            <p className="text-muted-foreground">Semua layout component berhasil dirender.</p>
          </Container>
        </Section>

        {/* Common Components */}
        <Section>
          <Container>
            <SectionHeader title="Common Components" description="Badge, Tag, Avatar, External Link, Button" />

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Leadership</Badge>
              <Badge>Featured</Badge>

              <Tag>Next.js</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Tailwind CSS</Tag>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <Avatar src="/assets/profile/profile.jpg" alt="Maulana Rafi" fallback="MR" size="lg" />

              <Avatar alt="Fallback" fallback="MR" />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Default</Button>

              <Button variant="outline">Outline</Button>

              <Button variant="secondary">Secondary</Button>

              <Button variant="ghost">Ghost</Button>

              <Button variant="destructive">Delete</Button>
            </div>

            <div className="mt-8">
              <ExternalLink href="https://github.com/maurafi">Visit GitHub</ExternalLink>
            </div>
          </Container>
        </Section>

        {/* Project Card */}
        <Section>
          <Container>
            <SectionHeader title="Project Card" description="Testing reusable ProjectCard component" />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Experience Card */}
        <Section>
          <Container>
            <SectionHeader title="Experience Card" description="Testing reusable ExperienceCard component" />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {experiences.slice(0, 2).map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Achievement Card */}
        <Section>
          <Container>
            <SectionHeader title="Achievement Card" description="Testing reusable AchievementCard component" />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {achievements.slice(0, 2).map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Certificate Card */}
        <Section>
          <Container>
            <SectionHeader title="Certificate Card" description="Testing reusable CertificateCard component" />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {certificates.slice(0, 2).map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Skill Card */}
        <Section>
          <Container>
            <SectionHeader title="Skill Card" description="Testing reusable SkillCard component" />

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {skills.slice(0, 8).map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
