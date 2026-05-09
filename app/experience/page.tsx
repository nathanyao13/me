import ExperienceCard from '@/app/components/ExperienceCard';

const experiences = [
  {
    company: 'Applovin',
    role: 'Software Engineer Intern',
    date: 'Summer 2026',
    description: 'Current Internship. Ads Experience Team.',
    href: 'https://www.applovin.com/en',
  },
  {
    company: 'Broadcom',
    role: 'Software Engineer Intern',
    date: 'Summer 2025',
    description: 'Worked on Internal Backend and Full Stack Software Tools for Hardware and Acoustic Engineers.',
    href: 'https://www.broadcom.com/',
  },
  {
    company: 'CMU Machine Learning Department',
    role: 'Teaching Assistant',
    date: 'Spring 2026',
    description: 'Worked as a TA for 10707: Advanced Deep Learning, a graduate-level course on deep learning theory and research.',
    href: 'https://mld-instructors.github.io/10707-s26-website/index.html#announcement',
  },
  {
    company: 'CMU Statistics and Data Science Department',
    role: 'Teaching Assistant',
    date: 'Spring 2026',
    description: 'Worked as a TA for 36401: Modern Regression, a course on regression methods for applied data analysis.',
    href: '/files/36401_syllabus.pdf',
  },
  {
    company: 'CMU Tepper School of Business',
    role: 'Research Assistant',
    date: 'Spring 2025',
    description: 'Worked with Professor Minkyung Kim to apply causal inference methods to analyze public policy in the real estate sector',
    href: 'https://scholars.cmu.edu/13042-minkyung-kim',
  },
  {
    company: 'St. Louis City SC',
    role: 'Professional Soccer Player',
    date: 'Spring 2023',
    description: 'Played MLSNEXT for STLCITYSC academy throughout high school. Held an Amateur contract with STLCITY 2 in MLSNEXT Pro',
    href: 'https://www.stlcitysc.com/',
  },
];

export default function Experience() {
  return (
    <div className="py-12">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h1 className="text-6xl font-thin text-gray-900 mb-6">experience.</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-16">
          I would describe myself as interdisciplinary.
        </p>
        <div className="grid grid-cols-4">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: `${i * 0.05}s` }}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
