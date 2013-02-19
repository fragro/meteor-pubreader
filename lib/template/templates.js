
if (Meteor.isClient) {
  Template.pubreader.rendered = function(){
    pubreader();
  }
}