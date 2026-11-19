import Link from 'next/link';

import Badge from '@/components/common/Badge';
import Tag from '@/components/common/Tag';
import { Button } from '@/components/ui/button';

import type { Achievement } from '@/types/achievements';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
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
      <div className="space-y-5">
        {/* Badge */}
        <div className="flex flex-wrap gap-2">
          {achievement.featured && <Badge>Featured</Badge>}

          <Badge>{achievement.level}</Badge>

          <Badge>{achievement.category}</Badge>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold">{achievement.title}</h3>

          <p className="font-medium text-muted-foreground">{achievement.organizer}</p>
        </div>

        {/* Position & Date */}
        <div className="text-sm text-muted-foreground">
          <p>{achievement.position}</p>

          <p>{achievement.date}</p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {achievement.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Certificate */}
        {achievement.certificate && (
          <Link href={achievement.certificate} target="_blank">
            <Button variant="outline">View Certificate</Button>
          </Link>
        )}
      </div>
    </article>
  );
}
