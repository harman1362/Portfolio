/**
 * Single source of truth for personal / contact details.
 * Update here and every section (Hero, Skills, Contact, Footer) follows.
 */
export const profile = {
  name: 'Harmanpreet Singh',
  role: 'Software Developer',
  location: 'Toronto, Ontario, Canada',
  availability: 'Open to remote, hybrid or onsite',
  email: 'workwithharman@gmail.com',
  phone: '+1 647-640-1362',
  phoneHref: 'tel:+16476401362',
  github: 'https://github.com/harman1362',
  // TODO: replace with your LinkedIn profile URL (e.g. https://www.linkedin.com/in/your-handle)
  linkedin: 'https://www.linkedin.com/',
  resume: `${import.meta.env.BASE_URL}HarmanpreetSingh-Resume.pdf`,
};

export const summary = {
  headline:
    'I build and ship web applications end to end — JavaScript, TypeScript and React front ends wired to REST API endpoints over SQL databases, with C#/.NET and Node.js on the back end.',
  about: [
    "I'm a software developer based in Toronto who takes web applications from user requirements through logical and physical design, then writes, modifies, integrates and tests the code that ships. JavaScript, TypeScript and React on the front end; C#/.NET, ASP.NET Core and Node.js on the back end; REST APIs over SQL Server, PostgreSQL and MySQL, with careful, documented fixes to existing programs.",
    'Before that, two years as a Tier 2 technical support representative added fast root-cause analysis on recurring incidents, precise case documentation and clear communication under tight deadlines — habits that carry straight into development work.',
  ],
};
