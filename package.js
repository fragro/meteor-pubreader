Package.describe({
  summary: "pubreader - A reader designed to allow increase readability of journal and conference papers produced by NLM"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
		'lib/js/jr.boots.js',
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
  ], 'client'
  );
});