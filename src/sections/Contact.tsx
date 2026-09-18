import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { profile } from '../data/profile';

export const Contact = () => {
  const details = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
      icon: Phone
    },
    {
      label: 'Location',
      value: profile.location,
      href: undefined,
      icon: MapPin
    },
    {
      label: 'GitHub',
      value: profile.github.replace('https://', ''),
      href: profile.github,
      icon: Github
    }
  ];

  return (
    <section id="contact" className="py-16 bg-blue-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm {profile.availability.toLowerCase()}. Whether you have a role in mind, a question, or just
            want to say hi, feel free to reach out — I usually reply the same day.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {details.map((item) => {
              const Card = item.href ? motion.a : motion.div;
              return (
                <Card
                  key={item.label}
                  {...(item.href
                    ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined,
                        rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                    : {})}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg"
                >
                  <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-gray-600 text-sm break-words">{item.value}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.a>
            <motion.a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
