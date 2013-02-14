
if (Meteor.isClient) {

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