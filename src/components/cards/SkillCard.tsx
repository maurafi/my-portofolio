import Badge from '@/components/common/Badge';

import type { Skill } from '@/types/skills';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="space-y-4">
        {/* Icon */}
        <div className="text-4xl">{skill.icon ?? '🛠️'}</div>

        {/* Name */}
        <div>
          <h3 className="text-lg font-semibold">{skill.name}</h3>

          <p className="text-sm text-muted-foreground">{skill.category}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Badge>{skill.level}</Badge>

          {skill.featured && <Badge>Featured</Badge>}
        </div>
      </div>
    </article>
  );
}
