import profileImage from './profile.jpg'
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

export const contact = {
  phone: '+49 157 8624 6977',
  email: 'sabrina@lemling.it',
  address: { street: 'Herrngartenstr.', zip: '65185', city: 'Wiesbaden' },
}

export const profile = {
  personal: {
    name: 'Sabrina Lemling',
    jobTitle: 'IT Consultant & Software Developer',
    image: profileImage,
    company: 'Sabrina Lemling IT Consulting',
    insurance: {
      name: 'Hiscox SA',
      address: { street: ' Arnulfstraße 31', city: '80636 München' },
      scope: 'Germany',
    },
    vatId: '',
  },
  contact: [
    { icon: faPhone, value: contact.phone },
    { icon: faEnvelope, value: contact.email },
    { icon: faLocationDot, value: 'Wiesbaden' },
  ],
  competencies: {
    Dev: [
      { title: 'React', level: 85 },
      { title: 'Typescript', level: 75 },
      { title: 'Node.js', level: 65 },
      { title: 'Go', level: 25 },
    ],
    Agile: [
      { title: 'Scrum', level: 95 },
      { title: 'Kanban', level: 80 },
      { title: 'Facilitation', level: 85 },
    ],
  },
  education: [
    {
      title: 'Master of Science',
      subtitle: `University Bielefeld \n Neuroinformatics`,
      from: '2013',
      to: '2015',
    },
    {
      title: 'Bachelor of Science',
      subtitle: 'University Osnabrück \n Neuropsychology',
      from: '2009',
      to: '2013',
    },
  ],
  certifications: [
    {
      title: 'Scrum Master',
      subtitle: 'A-CSM',
      authority: 'Scrum Alliance',
      date: '07/2019',
    },
    {
      title: 'Product Owner',
      subtitle: 'PSPO II',
      authority: 'scrum.org',
      date: '07/2021',
    },
  ],
}
