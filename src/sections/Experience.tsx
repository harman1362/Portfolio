import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Experience = () => {
  const experience = [
    {
      title: 'Tier 2 Technical Support Representative',
      company: 'Concentrix',
      period: 'Apr 2024 – Aug 2025',
      location: 'Canada',
      points: [
        'Resolved 30–40 escalated technical support tickets daily, diagnosing reported issues and restoring service within response targets.',
        'Performed root-cause analysis on recurring incidents, applied documented fixes, and escalated complex cases with clear technical detail.',
        'Maintained precise case records and contributed to knowledge-base documentation so repeat issues were resolved faster.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Arethos Venture',
      period: 'Jan 2021 – Jul 2022',
      location: 'Mohali, India',
      points: [
        'Developed and shipped features for client software products across UI, business logic and database layers in an agile team.',
        'Designed and maintained SQL schemas, queries and stored procedures, and built REST API endpoints that kept features fast and reliable.',
        'Applied object-oriented design patterns, wrote unit tests, participated in code reviews and story estimation, and documented technical decisions.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Post-Graduate Diploma',
      field: 'Information Technology',
      school: 'Conestoga College',
      period: '2022 – 2023',
      location: 'Kitchener, ON',
      points: ['Software development, web technologies and database coursework']
    },
    {
      degree: 'B.Tech',
      field: 'Computer Science & Engineering',
      school: 'Chandigarh Group of Colleges, Landran',
      period: '2017 – 2021',
      location: 'India',
      points: ['Computer science fundamentals: data structures, databases and software engineering']
    }
  ];

  return (
    <section id="experience" className="py-16 bg-blue-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading>Experience & Education</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Experience</h3>
            <div className="relative">
              <div className="absolute left-8 w-1 h-full bg-blue-200 z-0" />
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <ExperienceCard key={index} {...item} />
                ))}
              </div>
            </div>

            {/* Additional experience from the resume — kept brief, off the main timeline */}
            <div className="relative pl-16 mt-8">
              <motion.div className="absolute left-[29px] top-3 w-4 h-4 bg-blue-300 rounded-full border-4 border-white shadow z-10" />
              <div className="bg-white/70 border border-blue-100 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                  Additional experience
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Operations Manager — Subway, Ontario</li>
                  <li>Production Operator — Greenfield Agriculture Products Inc., Kitchener, ON</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Education</h3>
            <div className="relative">
              <div className="absolute left-8 w-1 h-full bg-purple-200 z-0" />
              <div className="space-y-8">
                {education.map((item, index) => (
                  <EducationCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ title, company, period, location, points }: any) => (
  <motion.div className="relative pl-16">
    <motion.div className="absolute left-[29px] top-3 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <Briefcase className="w-5 h-5 text-blue-600" />
        <div>
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>{location}</span>
        <span>•</span>
        <span>{period}</span>
      </div>
      <ul className="space-y-2">
        {points.map((point: string, i: number) => (
          <motion.li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const EducationCard = ({ degree, field, school, period, location, points }: any) => (
  <motion.div className="relative pl-16">
    <motion.div className="absolute left-[29px] top-3 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10" />
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <GraduationCap className="w-5 h-5 text-purple-600" />
        <div>
          <h3 className="font-bold text-lg leading-tight">{degree}</h3>
          <p className="text-sm text-gray-600">{field}</p>
          <p className="text-sm text-gray-600">{school}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>{location}</span>
        <span>•</span>
        <span>{period}</span>
      </div>
      <ul className="space-y-2">
        {points.map((point: string, i: number) => (
          <motion.li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0" />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);
