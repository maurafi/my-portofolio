import Link from 'next/link';

import Badge from '@/components/common/Badge';
import Tag from '@/components/common/Tag';
import { Button } from '@/components/ui/button';

import type { Certificate } from '@/types/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
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
          {certificate.featured && <Badge>Featured</Badge>}

          <Badge>{certificate.category}</Badge>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold">{certificate.title}</h3>

          <p className="font-medium text-muted-foreground">{certificate.issuer}</p>
        </div>

        {/* Date */}
        <div className="text-sm text-muted-foreground">
          <p>Issued: {certificate.issueDate}</p>

          {certificate.expirationDate && <p>Expires: {certificate.expirationDate}</p>}
        </div>

        {/* Credential ID */}
        {certificate.credentialId && <p className="text-sm text-muted-foreground">Credential ID: {certificate.credentialId}</p>}

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>

        {/* Action */}
        {certificate.credentialUrl && (
          <Link href={certificate.credentialUrl} target="_blank">
            <Button variant="outline">View Credential</Button>
          </Link>
        )}
      </div>
    </article>
  );
}
