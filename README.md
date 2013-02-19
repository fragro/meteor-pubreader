#Meteor Port of NLM/NCBI PubReader

This is a Meteor port of the NLM/NCBI PubReader designed for the Meteorite package system.

##Usage

You must include the following in your client-side code for this to work.

	Template.pubreader.rendered = function(){
		pubreader();
	}

You must also include a <em>pubreader</em> template, an example of which is located in /lib/template/template.html.

To render the PubReader in Meteor simply call the rendering function. The CSS is designed so
that Pubreader is attached to the body of the document.

  	var html = Meteor.render(function () {
  		return Template.pubreader(data);
    });

That's it. Now append the rendered HTML to the body of the document and witness PubReader in all its glory.

## Public domain notice

This work is in the public domain and may be reproduced, published or
otherwise used without the permission of the National Library of Medicine (NLM).

We request only that the NLM is cited as the source of the work.

Although all reasonable efforts have been taken to ensure the accuracy and
reliability of the software and data, the NLM and the U.S. Government  do
not and cannot warrant the performance or results that may be obtained  by
using this software or data. The NLM and the U.S. Government disclaim all
warranties, express or implied, including warranties of performance,
merchantability or fitness for any particular purpose.

