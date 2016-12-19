// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Hacer el tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Seguir la guia',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Leer documentos',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discusiones',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});
