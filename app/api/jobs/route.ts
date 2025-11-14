import { NextResponse } from 'next/server';

export interface Job {
  id: string;
  company: string;
  position: string;
  country: string;
  city: string;
  experienceLevel: string;
  employmentType: string;
  visaSponsorship: boolean;
  salary: string;
  postedDate: string;
  applicationLink: string;
  description: string;
  skills: string[];
}

// Mock job data representing real European tech opportunities
const mockJobs: Job[] = [
  {
    id: '1',
    company: 'Luxembourg Tech Hub',
    position: 'Junior Software Developer',
    country: 'Luxembourg',
    city: 'Luxembourg City',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€45,000 - €55,000',
    postedDate: '2025-11-10',
    applicationLink: 'https://careers.example.lu/junior-dev',
    description: 'Join our growing team as a Junior Software Developer. We welcome new graduates and provide comprehensive visa sponsorship support for international candidates.',
    skills: ['JavaScript', 'React', 'Node.js', 'Git']
  },
  {
    id: '2',
    company: 'PayTech Solutions Luxembourg',
    position: 'Graduate Frontend Engineer',
    country: 'Luxembourg',
    city: 'Esch-sur-Alzette',
    experienceLevel: 'New Graduate',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€42,000 - €52,000',
    postedDate: '2025-11-12',
    applicationLink: 'https://paytech.lu/careers/frontend',
    description: 'Excellent opportunity for recent graduates. Full visa assistance including work permit and relocation support. Building next-generation payment solutions.',
    skills: ['React', 'TypeScript', 'CSS', 'REST APIs']
  },
  {
    id: '3',
    company: 'FinSecure Luxembourg',
    position: 'Junior Backend Developer',
    country: 'Luxembourg',
    city: 'Luxembourg City',
    experienceLevel: 'Entry Level (0-1 year)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€48,000 - €58,000',
    postedDate: '2025-11-11',
    applicationLink: 'https://finsecure.lu/jobs/backend-junior',
    description: 'FinTech company seeking junior backend developers. We sponsor work visas and provide relocation packages for talented international developers.',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker']
  },
  {
    id: '4',
    company: 'Nordic Software Oy',
    position: 'Junior Full Stack Developer',
    country: 'Finland',
    city: 'Helsinki',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€38,000 - €48,000',
    postedDate: '2025-11-13',
    applicationLink: 'https://nordicsoftware.fi/careers/fullstack',
    description: 'Finnish tech company offering visa sponsorship for talented junior developers. Great work-life balance and comprehensive benefits including relocation assistance.',
    skills: ['JavaScript', 'Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: '5',
    company: 'Rovio Entertainment',
    position: 'Graduate Game Developer',
    country: 'Finland',
    city: 'Espoo',
    experienceLevel: 'New Graduate',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€40,000 - €50,000',
    postedDate: '2025-11-09',
    applicationLink: 'https://rovio.com/careers/graduate-dev',
    description: 'Join the creators of Angry Birds! We welcome fresh graduates and provide full visa sponsorship support. Start your career in game development.',
    skills: ['C++', 'Unity', 'C#', 'Game Design']
  },
  {
    id: '6',
    company: 'Supercell',
    position: 'Junior Mobile Developer',
    country: 'Finland',
    city: 'Helsinki',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€42,000 - €52,000',
    postedDate: '2025-11-08',
    applicationLink: 'https://supercell.com/careers/mobile-dev',
    description: 'Mobile gaming giant seeking junior developers. Excellent visa sponsorship program for international talent. Competitive salary and equity options.',
    skills: ['Swift', 'Kotlin', 'iOS', 'Android']
  },
  {
    id: '7',
    company: 'Wolt',
    position: 'Junior Software Engineer',
    country: 'Finland',
    city: 'Helsinki',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€39,000 - €49,000',
    postedDate: '2025-11-14',
    applicationLink: 'https://wolt.com/careers/junior-engineer',
    description: 'Delivery platform expanding rapidly. Seeking junior engineers with visa sponsorship available. Fast-paced startup environment with growth opportunities.',
    skills: ['Python', 'React', 'Kubernetes', 'AWS']
  },
  {
    id: '8',
    company: 'Bolt Technology',
    position: 'Graduate Software Developer',
    country: 'Estonia',
    city: 'Tallinn',
    experienceLevel: 'New Graduate',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€30,000 - €40,000',
    postedDate: '2025-11-12',
    applicationLink: 'https://bolt.eu/careers/graduate-dev',
    description: 'European mobility platform hiring graduates. Full visa sponsorship and relocation package. Work on products used by millions across Europe.',
    skills: ['Java', 'Kotlin', 'Microservices', 'Kafka']
  },
  {
    id: '9',
    company: 'Wise (formerly TransferWise)',
    position: 'Junior Frontend Engineer',
    country: 'Estonia',
    city: 'Tallinn',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€32,000 - €42,000',
    postedDate: '2025-11-11',
    applicationLink: 'https://wise.com/careers/frontend-junior',
    description: 'FinTech unicorn offering visa sponsorship. Build products that help people move money internationally. Transparent salary and equity structure.',
    skills: ['React', 'TypeScript', 'GraphQL', 'Testing']
  },
  {
    id: '10',
    company: 'Skype Technologies',
    position: 'Junior Backend Engineer',
    country: 'Estonia',
    city: 'Tallinn',
    experienceLevel: 'Entry Level (0-1 year)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€33,000 - €43,000',
    postedDate: '2025-11-10',
    applicationLink: 'https://skype.com/careers/backend',
    description: 'Microsoft-owned communication platform. Excellent visa sponsorship program for talented developers. Work with global team on cutting-edge technology.',
    skills: ['C++', 'Distributed Systems', 'Linux', 'WebRTC']
  },
  {
    id: '11',
    company: 'Pipedrive',
    position: 'Junior Full Stack Developer',
    country: 'Estonia',
    city: 'Tallinn',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€31,000 - €41,000',
    postedDate: '2025-11-13',
    applicationLink: 'https://pipedrive.com/careers/fullstack-junior',
    description: 'CRM software company with strong international culture. Visa sponsorship and relocation support provided. Great learning environment for junior developers.',
    skills: ['PHP', 'React', 'MySQL', 'Redis']
  },
  {
    id: '12',
    company: 'Veriff',
    position: 'Graduate Software Engineer',
    country: 'Estonia',
    city: 'Tallinn',
    experienceLevel: 'New Graduate',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€30,000 - €38,000',
    postedDate: '2025-11-09',
    applicationLink: 'https://veriff.com/careers/graduate',
    description: 'Identity verification startup seeking graduates. Full visa sponsorship including work permit processing. Work with AI and machine learning technologies.',
    skills: ['Python', 'Machine Learning', 'JavaScript', 'Computer Vision']
  },
  {
    id: '13',
    company: 'Amazon Development Center',
    position: 'Junior SDE - Internship to Full-time',
    country: 'Luxembourg',
    city: 'Luxembourg City',
    experienceLevel: 'Entry Level (Internship)',
    employmentType: 'Permanent (after internship)',
    visaSponsorship: true,
    salary: '€50,000 - €62,000 (full-time)',
    postedDate: '2025-11-14',
    applicationLink: 'https://amazon.jobs/lu/junior-sde',
    description: 'Start with internship, convert to full-time. Complete visa sponsorship support. Work on AWS and e-commerce platforms. Excellent benefits and career growth.',
    skills: ['Java', 'Python', 'Data Structures', 'Algorithms']
  },
  {
    id: '14',
    company: 'Klarna',
    position: 'Junior Data Engineer',
    country: 'Finland',
    city: 'Helsinki',
    experienceLevel: 'Entry Level (0-2 years)',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€41,000 - €51,000',
    postedDate: '2025-11-12',
    applicationLink: 'https://klarna.com/careers/data-engineer',
    description: 'FinTech leader in buy-now-pay-later. Seeking junior data engineers with visa sponsorship available. Work with big data and AI/ML systems.',
    skills: ['Python', 'SQL', 'Spark', 'Data Pipelines']
  },
  {
    id: '15',
    company: 'Playtech',
    position: 'Graduate QA Automation Engineer',
    country: 'Estonia',
    city: 'Tartu',
    experienceLevel: 'New Graduate',
    employmentType: 'Permanent',
    visaSponsorship: true,
    salary: '€28,000 - €36,000',
    postedDate: '2025-11-11',
    applicationLink: 'https://playtech.com/careers/qa-graduate',
    description: 'Gaming technology company hiring fresh graduates. Visa sponsorship provided. Learn QA automation in a fast-paced environment. Lower cost of living in Tartu.',
    skills: ['Testing', 'Selenium', 'Java', 'CI/CD']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');
  const experienceLevel = searchParams.get('experienceLevel');
  const visaOnly = searchParams.get('visaOnly') === 'true';

  let filteredJobs = mockJobs;

  if (country && country !== 'all') {
    filteredJobs = filteredJobs.filter(job =>
      job.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (experienceLevel && experienceLevel !== 'all') {
    filteredJobs = filteredJobs.filter(job =>
      job.experienceLevel.toLowerCase().includes(experienceLevel.toLowerCase())
    );
  }

  if (visaOnly) {
    filteredJobs = filteredJobs.filter(job => job.visaSponsorship);
  }

  // Sort by posted date (most recent first)
  filteredJobs.sort((a, b) =>
    new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  );

  return NextResponse.json({ jobs: filteredJobs });
}
