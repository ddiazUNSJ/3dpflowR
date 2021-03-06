import './header.html';
/*****************************************************************************/
/* Header: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Header.events({
    
  'click .dale': function(){
    console.log("You clicked en cerrar sesion");
    Meteor.logout();
    
      Router.go('/#contact');
     // Router.current().render('overview').data();
     
}
    /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  
});

Template.Header.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
// Flowrouter
   activeIfTemplateIs: function (template) {
    var currentRoute = FlowRouter.getRouteName();
    return currentRoute && template === currentRoute ? 'active' : '';
  } , 
  // Para IronRoute
  // activeIfTemplateIs: function (template) {
  //   var currentRoute = Router.current();
  //   return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
  // } , 
  nombre: function(){
    var nombre= Meteor.user().profile.nombre;
      return nombre;
    }
});


/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.created = function () {
};

Template.Header.rendered = function () {
};

Template.Header.destroyed = function () {
};


