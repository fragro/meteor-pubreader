Package.describe({
  summary: "pubreader - A reader designed to allow increase readability of journal and conference papers produced by NLM"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
		'lib/js/figpopup.js',
		'lib/js/jquery.hoverIntent.js',
		'lib/js/rangeinput.js',
		'lib/js/modernizr.jr.min.js',
		'lib/js/jquery.touchSwipe.js',
		'lib/js/jquery.throttle.js',
		'lib/js/jr.boots.js',
		'lib/template/templates.js',
		'lib/js/jquery.jr.paginationstatus.js',
		'lib/js/jr.utils.js',
		'lib/js/jquery.jr.historykeeper.js',
		'lib/js/jats.reader.js',
		'lib/js/jquery.jr.links.js',
		'lib/js/jquery.jr.panel.cmap.js',
		'lib/js/jquery.jr.panel.typo.js',
		'lib/js/jquery.jr.panel.js',
		'lib/js/jquery.jr.objectbox.js',
		'lib/js/jquery.jr.pageturnsensor.js',
		'lib/js/jquery.jr.switcher.js',
		'lib/js/jquery.jr.panel.istrip.js',
		'lib/js/jquery.jr.pageprogressbar.js',
		'lib/js/jquery.jr.pagemanager.js',
		'lib/css/jr.objectbox.css',
		'lib/css/jr.ui.css',
		'lib/css/jr.panel.typo.css',
		'lib/css/jr.panel.css',
		'lib/css/jr.pageprogressbar.css',
		'lib/css/jr.pagemanager.css',
		'lib/css/jr.pageturnsensor.css',
		'lib/css/jats-reader.css',
		'lib/css/jr.content.css',
		'lib/css/jr.panel.istrip.css',
		'lib/css/jr.panel.cmap.css',
		'lib/img/attn.png',
		'lib/img/help-kbd.png',
		'lib/img/help-pmc.png',
		'lib/img/help-links.png',
		'lib/img/help-artnav.png',
		'lib/img/help.png',
		'lib/img/pmc.logo.svg',
		'lib/img/help.xml',
		'lib/img/help-figtabs.png',
		'lib/img/jrb.back.ms.jpg',
		'lib/img/help-ncbi.png',
		'lib/img/help-isnav.png',
		'lib/img/mglss24.png',
		'lib/img/jrb.back.jpg',
		'lib/img/help-reading.png',
		/*'lib/js/config/TeX-AMS-MML_SVG.js',
		'lib/js/MathJax.js',
		'lib/js/extensions/MathMenu.js',
		'lib/js/extensions/MathEvents.js',
		'lib/js/extensions/MathZoom.js',
		'lib/js/extensions/asciimath2jax.js',
		'lib/js/extensions/mml2jax.js',
		'lib/js/extensions/jsMath2jax.js',
		'lib/js/extensions/FontWarnings.js',
		'lib/js/extensions/tex2jax.js',
		'lib/js/extensions/toMathML.js',
		'lib/js/extensions/v1.0-warning.js',
		'lib/js/extensions/HTML-CSS/handle-floats.js',
		'lib/js/extensions/TeX/newcommand.js',
		'lib/js/extensions/TeX/mhchem.js',
		'lib/js/extensions/TeX/extpfeil.js',
		'lib/js/extensions/TeX/enclose.js',
		'lib/js/extensions/TeX/unicode.js',
		'lib/js/extensions/TeX/mathchoice.js',
		'lib/js/extensions/TeX/AMSmath.js',
		'lib/js/extensions/TeX/cancel.js',
		'lib/js/extensions/TeX/color.js',
		'lib/js/extensions/TeX/verb.js',
		'lib/js/extensions/TeX/begingroup.js',
		'lib/js/extensions/TeX/autobold.js',
		'lib/js/extensions/TeX/noUndefined.js',
		'lib/js/extensions/TeX/AMSsymbols.js',
		'lib/js/extensions/TeX/autoload-all.js',
		'lib/js/extensions/TeX/HTML.js',
		'lib/js/extensions/TeX/noErrors.js',
		'lib/js/extensions/TeX/bbox.js',
		'lib/js/extensions/TeX/action.js',
		'lib/js/extensions/TeX/boldsymbol.js',
		'lib/js/images/CloseX-31.png',
		'lib/js/images/MenuArrow-15.png',*/
  ], 'client'
  );
});