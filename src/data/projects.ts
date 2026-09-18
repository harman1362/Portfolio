import type { Project } from '../types';

/**
 * Featured projects. Every entry maps to a real repository on
 * https://github.com/harman1362 — no placeholder links.
 */
export const projects: Project[] = [
  {
    id: 'eventhub',
    title: 'EventHub — Event Management Platform',
    description:
      'A full-stack event platform built on the MERN stack: organisers publish events, attendees register, admins manage listings.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    longDescription:
      'EventHub brings events from many organisers into a single place. A React single-page front end talks to a Node.js/Express REST API backed by MongoDB, with a separate admin area for publishing events, an attendee registration flow and cookie-based session handling.',
    role: 'Full Stack Developer',
    duration: 'Personal project',
    features: [
      'Event listing, event detail and registration flows',
      'Admin area for creating and managing events',
      'Role-based views separating admin and attendee access',
      'Client-side routing across Home, Events, Event Detail and Admin',
      'REST API integration through a central Axios client',
      'Lightweight global state with Zustand and toast-based user feedback',
    ],
    technologies: [
      'React', 'React Router', 'Zustand', 'Axios',
      'Node.js', 'Express', 'MongoDB', 'REST APIs',
    ],
    githubLink: 'https://github.com/harman1362/EventHub',
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    description:
      'A CRUD admin front end for employee records — create, list and update records against a REST API.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    longDescription:
      'A component-driven React application for managing employee records. Each screen is a small reusable component — table view, create form and edit form — wired to REST endpoints with explicit loading and error states.',
    role: 'Front End Developer',
    duration: 'Personal project',
    features: [
      'Employee table view with create and edit forms',
      'Reusable component structure (table, create, edit)',
      'REST API calls with Axios and explicit loading/error handling',
      'Responsive layout built with Tailwind CSS utilities',
      'Consistent iconography with Heroicons',
    ],
    technologies: [
      'React', 'JavaScript', 'Tailwind CSS', 'Axios',
      'REST APIs', 'Heroicons',
    ],
    githubLink: 'https://github.com/harman1362/AFS-Frontend-React',
  },
  {
    id: 'police-data-api',
    title: 'Public Safety Data API',
    description:
      'A Node.js service that collects publicly published incident data, stores it in MongoDB and serves it over a REST API.',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    tags: ['Node.js', 'Express', 'MongoDB', 'Puppeteer'],
    longDescription:
      'A back-end service that scrapes publicly published incident data, normalises it into structured documents and exposes it as clean JSON for a separate front end to consume. Written as a layered Node.js project: scraper, models, routes.',
    role: 'Backend Developer',
    duration: 'Personal project',
    features: [
      'Scraping pipeline built with Puppeteer and Cheerio',
      'MongoDB persistence through Mongoose schemas',
      'Express router layer exposing clean JSON endpoints',
      'Environment-based configuration with dotenv',
      'CORS enabled so a separate front end can consume the API',
    ],
    technologies: [
      'Node.js', 'Express', 'MongoDB', 'Mongoose',
      'Puppeteer', 'Cheerio', 'REST APIs',
    ],
    githubLink: 'https://github.com/harman1362/canadianForcesServer',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'A split front-end / back-end expense tracker: React UI posting to an Express REST API.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Express', 'REST API'],
    longDescription:
      'A small two-repository project that separates concerns cleanly: a React front end for entering and reviewing daily expenses, and an Express server that exposes the API it talks to.',
    role: 'Full Stack Developer',
    duration: 'Personal project',
    features: [
      'React front end for adding and listing daily expenses',
      'Separate Express server exposing REST endpoints',
      'CORS and JSON body handling configured for the SPA',
      'Environment configuration through dotenv',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'REST APIs', 'CORS'],
    githubLink: 'https://github.com/harman1362/expense-tracker-frontend',
  },
  {
    id: 'task-scheduler',
    title: 'Task Scheduler',
    description:
      'A task scheduling application built in Angular with TypeScript — typed models, a service layer and unit tests.',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    tags: ['Angular', 'TypeScript', 'SCSS'],
    longDescription:
      'An Angular application for scheduling and tracking tasks, structured around typed models, a dedicated task service and a routed module layout, with unit tests wired through Karma and Jasmine.',
    role: 'Front End Developer',
    duration: 'Personal project',
    features: [
      'Angular application with routing and a modular structure',
      'Typed task models with a dedicated task service',
      'SCSS styling with reusable component styles',
      'Unit tests wired through Karma and Jasmine',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Karma', 'Jasmine'],
    githubLink: 'https://github.com/harman1362/Tasks-Scheduler',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'This site — a React 18 + TypeScript single-page portfolio built with Vite and published to GitHub Pages.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    longDescription:
      'A typed React single-page application that presents experience, skills and projects with section navigation and detail modals. Built with Vite, styled with Tailwind CSS, animated with Framer Motion and deployed to GitHub Pages.',
    role: 'Developer',
    duration: 'Personal project',
    features: [
      'React 18 + TypeScript component architecture',
      'Vite build tooling with a GitHub Pages deploy pipeline',
      'Tailwind CSS utility styling and a responsive layout',
      'Framer Motion scroll and hover animations',
      'Project detail modals with keyboard (Esc) support',
    ],
    technologies: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS',
      'Framer Motion', 'GitHub Pages',
    ],
    githubLink: 'https://github.com/harman1362/Portfolio',
  },
];
