
if (Meteor.isClient) {
  Meteor.startup(function () {
    Template.pubreader.rendered = function(){
      pubreader();
    }
  });

}