// certifications.ts
// Certification data for the CertificationsShowcase component

export const platforms = [
  { id: 'platzi', name: 'Platzi', icon: '🟢' },
  { id: 'google', name: 'Google', icon: '🔵' },
  { id: 'udemy', name: 'Udemy', icon: '🟣' },
  { id: 'coursera', name: 'Coursera', icon: '🔷' },
  { id: 'microsoft', name: 'Microsoft', icon: '🟦' },
  { id: 'meta', name: 'Meta', icon: '🔵' },
];

export interface Certification {
  name: string;
  platform: string;
  platformName: string;
  icon: string;
  url: string;
}

export const certifications: Certification[] = [
  // Platzi
  { name: 'Desarrollo Web Full Stack', platform: 'platzi', platformName: 'Platzi', icon: '💻', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'React.js Avanzado', platform: 'platzi', platformName: 'Platzi', icon: '⚛️', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Node.js Backend', platform: 'platzi', platformName: 'Platzi', icon: '🟩', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'TypeScript Profesional', platform: 'platzi', platformName: 'Platzi', icon: '🔷', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Arquitectura de Software', platform: 'platzi', platformName: 'Platzi', icon: '🏗️', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'DevOps con AWS', platform: 'platzi', platformName: 'Platzi', icon: '☁️', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Base de Datos SQL y NoSQL', platform: 'platzi', platformName: 'Platzi', icon: '🗄️', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Diseño UI/UX', platform: 'platzi', platformName: 'Platzi', icon: '🎨', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Python para Data Science', platform: 'platzi', platformName: 'Platzi', icon: '🐍', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Angular Framework', platform: 'platzi', platformName: 'Platzi', icon: '🅰️', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Git y GitHub Profesional', platform: 'platzi', platformName: 'Platzi', icon: '🔀', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Marketing Digital', platform: 'platzi', platformName: 'Platzi', icon: '📈', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Inteligencia Artificial', platform: 'platzi', platformName: 'Platzi', icon: '🤖', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Docker y Kubernetes', platform: 'platzi', platformName: 'Platzi', icon: '🐳', url: 'https://platzi.com/p/mateoferrer66/' },
  { name: 'Inglés para Developers', platform: 'platzi', platformName: 'Platzi', icon: '🇺🇸', url: 'https://platzi.com/p/mateoferrer66/' },

  // Google
  { name: 'Google Analytics Certification', platform: 'google', platformName: 'Google', icon: '📊', url: 'https://skillshop.google.com/' },
  { name: 'Google Ads Search', platform: 'google', platformName: 'Google', icon: '🔍', url: 'https://skillshop.google.com/' },
  { name: 'Google Cloud Fundamentals', platform: 'google', platformName: 'Google', icon: '☁️', url: 'https://cloud.google.com/certification' },
  { name: 'Google UX Design', platform: 'google', platformName: 'Google', icon: '🎨', url: 'https://grow.google/certificates/ux-design/' },
  { name: 'Google IT Support', platform: 'google', platformName: 'Google', icon: '🔧', url: 'https://grow.google/certificates/it-support/' },

  // Udemy
  { name: 'Complete Web Developer', platform: 'udemy', platformName: 'Udemy', icon: '🌐', url: 'https://www.udemy.com/user/mateoferrer/' },
  { name: 'Machine Learning A-Z', platform: 'udemy', platformName: 'Udemy', icon: '🧠', url: 'https://www.udemy.com/user/mateoferrer/' },
  { name: 'Advanced CSS and Sass', platform: 'udemy', platformName: 'Udemy', icon: '🎨', url: 'https://www.udemy.com/user/mateoferrer/' },
  { name: 'Three.js 3D Web Development', platform: 'udemy', platformName: 'Udemy', icon: '🎮', url: 'https://www.udemy.com/user/mateoferrer/' },
  { name: 'REST APIs with Node.js', platform: 'udemy', platformName: 'Udemy', icon: '🔌', url: 'https://www.udemy.com/user/mateoferrer/' },

  // Coursera
  { name: 'Deep Learning Specialization', platform: 'coursera', platformName: 'Coursera', icon: '🧬', url: 'https://www.coursera.org/' },
  { name: 'IBM Data Science Professional', platform: 'coursera', platformName: 'Coursera', icon: '📊', url: 'https://www.coursera.org/' },
  { name: 'Front-End Web Development', platform: 'coursera', platformName: 'Coursera', icon: '🖥️', url: 'https://www.coursera.org/' },

  // Microsoft
  { name: 'Azure Fundamentals (AZ-900)', platform: 'microsoft', platformName: 'Microsoft', icon: '☁️', url: 'https://learn.microsoft.com/certifications/' },
  { name: 'Power Platform Fundamentals', platform: 'microsoft', platformName: 'Microsoft', icon: '⚡', url: 'https://learn.microsoft.com/certifications/' },
  { name: 'Microsoft 365 Fundamentals', platform: 'microsoft', platformName: 'Microsoft', icon: '📝', url: 'https://learn.microsoft.com/certifications/' },

  // Meta
  { name: 'Meta Front-End Developer', platform: 'meta', platformName: 'Meta', icon: '⚛️', url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer' },
  { name: 'Meta Back-End Developer', platform: 'meta', platformName: 'Meta', icon: '🔧', url: 'https://www.coursera.org/professional-certificates/meta-back-end-developer' },
];
