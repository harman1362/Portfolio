import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { profile, summary } from '../data/profile';

export const Hero = () => {
  return (
    <header id="hero" className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center py-16 sm:py-24">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]" />

      {/* Content */}
      <div className="container relative mx-auto px-4 lg:px-6 z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs sm:text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {profile.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-6 text-white"
          >
            Hi, I'm {profile.name.split(' ')[0]} — a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-3xl mx-auto mb-6 sm:mb-8"
          >
            {summary.headline}
          </motion.p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-white/90">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{profile.location}</span>
            </motion.div>
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white/20 transition-colors"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{profile.email}</span>
            </motion.a>
            <motion.a
              href={profile.phoneHref}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{profile.phone}</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View Projects
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
