export interface Achievement {
  id: string;

  title: string;

  organizer: string;

  date: string;

  level:
    | "School"
    | "University"
    | "Regional"
    | "National"
    | "International";

  category:
    | "Competition"
    | "Organization"
    | "Academic"
    | "Leadership"
    | "Research"
    | "Certification";

  position:
    | "Winner"
    | "Runner Up"
    | "Finalist"
    | "Selected Participant"
    | "Participant"
    | "Awardee";

  description: string;

  image?: string;

  certificate?: string;

  featured: boolean;

  tags: string[];
}