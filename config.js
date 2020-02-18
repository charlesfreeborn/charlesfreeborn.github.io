'use strict';

module.exports = {
  url: 'https://lumen.netlify.com', //change url to mine
  pathPrefix: '/',
  title: 'Freeborn Charles Blog',
  subtitle: 'Web Development | JAMstack | Python',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2', // put my analytics here
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    // {
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'Freeborn Charles Blog',
    photo: '/CharlesFreeborn.jpg',
    bio: 'Hi there, I"m Freeborn Charles ... ',
    contacts: {
      email: 'charles.eteure@gmail.com',
      twitter: 'charliecodes',
      github: 'charlesfreeborn',
      linkedin: 'charleseteure/',
    }
  }
};
