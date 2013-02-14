
if (Meteor.isClient) {

  Template.pubreader.rendered = function(){
    pubreader();
    console.log('firing pubreader');
  }

  MathJax.Hub.Config({ 
    SVG: { 
      scale: 90, 
      linebreaks: {
        automatic: true, 
        width: "container" 
      } 
    }, 
    showProcessingMessages: false, 
    messageStyle: "none"
  }); 

}