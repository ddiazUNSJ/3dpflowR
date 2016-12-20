// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';
import { FlowRouter } from 'meteor/kadira:flow-router';
FlowRouter.wait();
WhenEverYourAppIsReady(function() {
  FlowRouter.initialize({hashbang: true});
});


