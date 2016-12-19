import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts_old/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

import '../../ui/header/header.js';
import '../../ui/footer/footer.js';
import '../../ui/layouts/master_layout/master_layout.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.Home',
  action() {
  //  BlazeLayout.render('MasterLayout',{ top:"Header",  main: 'App_home',  bottom:'Footer'});
     BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
  //	    BlazeLayout.render('MasterLayout',{ top:"Header",  main: 'App_notFound',  bottom:'Footer'});
 
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
