// data/experiences.js

export const experiences = [
  {
    id: 1,
    orgName: 'Trigon Engineering Society',
    logo: '/trigon.jpg',
    roles: [
      {
        position: 'Vice President',
        bullets: [
          'Organized and executed a variety of service events including collaborations with Habitat for Humanity, the Virginia Discovery Museum, and other local organizations.',
          'Oversaw a 5x growth in the number of service events and substantial growth in participation and excitement.',
        ],
        link: '/experience/trigon-vp',
      },
      {
        position: 'Recruitment Chair',
        bullets: [
          'Led planning, budgeting, and execution of annual recruitment events. Managed budget of $3000.',
          'Restructured process information storage including implementing a new candidate member database to store info on 200+ rushees.',
          'Garnered a record number of interest with 25% increase in candidate members.',
        ],
        link: '/experience/trigon-recruitment',
      },
    ],
  },
  {
    id: 2,
    orgName: 'Pansophic Learning',
    logo: '/pansophic2.png',
    roles: [
      {
        position: 'Intern',
        bullets: [
          'Worked at direction of VP of Operations on various cross-functional projects at a private-equity backed education management company servicing 55,000 students across six countries.',
          'Worked on a team to implement Oracle’s NetSuite ERP during requirements gathering and system design phases.',
          'Researched and proposed AI applications to help improve efficiency of the legal department.',
          'Designed an automation to reduce invoice preparation time for complex, usage-based product offering. Process involved pulling client service use data from SharePoint and linking the billing and pricing services to generate invoices.',
          'Researched local laws, contractors, and procedures across numerous jurisdictions to standardize hazard management plans across 100+ charter schools. Organized findings in a searchable database.',
          'Worked with the project management office to facilitate key initiatives and streamline project tracking processes. Completed projects in implementation of AI note-takers, school inventory management, facility management software, and incident reporting systems.',
        ],
      },
    ],
  },
  // …more orgs…
];
