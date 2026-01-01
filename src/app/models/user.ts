export interface User {
  id: number;
  fullName: string;
  role: 'ADMIN' | 'ARTISAN' | 'CLIENT';
  avatarUrl?: string;

  // Facultatif (profil artisan)
  jobTitle?: string;      // Plombier, Électricien...
  location?: string;
}
