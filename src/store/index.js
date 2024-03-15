import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const profile = {
  info: {
    name: 'Muhammad Ubaid Raza',
    title: 'Full Stack Web Developer',
    email: 'mubaidr@gmail.com',
    location: 'Rawalpindi, Pakistan',
    profiles: [
      {
        title: 'Sponsor Me',
        url: 'https://github.com/sponsors/mubaidr?o=esb',
        icon: '💰',
      },
      {
        title: 'Github',
        url: 'https://github.com/mubaidr',
        icon: '🧟',
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mubaidr',
        icon: '🤵',
      },
      {
        title: 'Freelancer',
        url: 'https://www.freelancer.com/u/razamubaid',
        icon: '👷',
      },
      {
        title: 'CodersRank',
        url: 'https://profile.codersrank.io/user/mubaidr',
        icon: '🏅',
      },
      {
        title: 'Twitter',
        url: 'https://www.twitter.com/mubaidr',
        icon: '👥',
      },
    ],
  },
  sections: {
    about: {
      title: 'About',
      summary:
        "Web developer with more than 6 years of well-rounded experience with a degree in the Computer & Information Sciences, extensive knowledge of modern Web techniques and love for coffee. I'm also passionate about open source. Specializing in API, Dashboard, Portfolio, and Web Application development, I am renowned for crafting scalable, efficient, and user-centric solutions that drive business growth.",
      objective:
        'Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.',
    },
    skills: {
      title: 'Skills',
      lists: [
        {
          title: 'Languages & Frameworks',
          list: [
            {
              title: 'Node.js',
            },
            {
              title: 'TypeScript',
            },
            {
              title: 'JavaScript',
            },
            {
              title: 'Nuxt',
            },
            {
              title: 'VueJS',
            },
            {
              title: 'React',
            },
            {
              title: 'NestJs',
            },
            {
              title: 'ExpressJs',
            },            
            {
              title: 'AdonisJs',
            },
            {
              title: 'ASP.NET',
            },
            {
              title: 'C#',
            },
          ],
        },
        {
          title: 'Databases',
          list: [
            {
              title: 'MSSQL',
            },
            {
              title: 'PostgreSQL',
            },
            {
              title: 'MongoDB',
            },
            {
              title: 'Firebase',
            },
            {
              title: 'Supabase',
            },
          ],
        },
        {
          title: 'Other',
          list: [
            {
              title: 'Docker',
            },
            {
              title: 'Jest',
            },
            {
              title: 'Pug',
            },            
            {
              title: 'Vitest',
            },
            {
              title: 'Puppeteer',
            },            
            {
              title: 'Automation and Webscraping',
            },
            {
              title: 'Tailwind css',
            },
            {
              title: 'Bulma',
            },
            {
              title: 'Bootstrap',
            },
            {
              title: 'Stylus',
            },
            {
              title: 'SASS/SCSS',
            },
            {
              title: 'Git',
            },
            {
              title: 'Rest API',
            },
            {
              title: 'GraphQL API',
            },
            {
              title: 'Apache Cordova',
            },
            {
              title: 'Chrome Extensions',
            },
            {
              title: 'Firefox Extensions',
            },
          ],
        },
      ],
    },
  },
}

const getters = {
  info(state) {
    return state.info
  },
  skills(state) {
    return state.skills
  },
  sections(state) {
    return state.sections
  },
  portfolio(state) {
    return state.portfolio
  },
}

const store = new Vuex.Store({
  state: profile,
  getters,
})

export default store
