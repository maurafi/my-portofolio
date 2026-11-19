// [UPDATED] Experience Type Definition
// Description: Menambahkan atribut opsional achievements pada interface Experience untuk menampung
// poin capaian terukur (misal: efisiensi waktu 5 minggu Kaizen Takagi, jumlah partisipan Edufair/HIMSIKA).
// Reason: Menyesuaikan kebutuhan Section 03 Experience & Leadership sesuai pedoman MASTER PROMPT.

export interface Experience {
  id: string;

  organization: string;

  position: string;

  employmentType?:
    | "Internship"
    | "Organization"
    | "Volunteer"
    | "Leadership"
    | "Committee"
    | "Research";

  startDate: string;

  endDate: string;

  location?: string;

  category:
    | "Professional"
    | "Leadership"
    | "Organization"
    | "Volunteer"
    | "Education";

  summary: string;

  responsibilities: string[];

  achievements?: string[];

  skills: string[];

  images?: string[];

  featured: boolean;
}
