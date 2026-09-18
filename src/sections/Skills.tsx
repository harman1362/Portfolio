import { motion } from 'framer-motion';
import { Code, Monitor, Database, Wrench, Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { profile, summary } from '../data/profile';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'SQL']
    },
    {
      title: 'Frameworks & Web',
      icon: Monitor,
      skills: ['React', '.NET', 'ASP.NET Core', 'Node.js', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend, APIs & Data',
      icon: Database,
      skills: [
        'REST APIs', 'JSON/XML integration',
        'SQL Server', 'PostgreSQL', 'MySQL',
        'Schema design', 'Stored procedures'
      ]
    },
    {
      title: 'Practices & Tooling',
      icon: Wrench,
      skills: [
        'Git', 'CI/CD', 'Agile/Scrum',
        'Code review', 'Unit testing',
        'AI-assisted development'
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading>Skills & Expertise</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Get to know me!</h3>
            <div className="space-y-4">
              {summary.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { label: 'Based in', value: profile.location },
                { label: 'Availability', value: profile.availability },
                { label: 'Email', value: profile.email }
              ].map((item) => (
                <li key={item.label} className="flex gap-2">
                  <span className="font-semibold text-gray-800 min-w-[92px]">{item.label}:</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="w-5 h-5 text-blue-600" />
                  <h6 className="font-semibold">{category.title}</h6>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
