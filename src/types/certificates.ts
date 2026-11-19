export interface Certificate {
  id: string;

  title: string;

  issuer: string;

  issueDate: string;

  expirationDate?: string;

  credentialId?: string;

  credentialUrl?: string;

  image?: string;

  category: 'Technical' | 'Leadership' | 'Data' | 'Programming' | 'Business' | 'Workshop' | 'Seminar';

  skills: string[];

  featured: boolean;
}
