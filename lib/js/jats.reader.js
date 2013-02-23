/* $Id: jats.reader.js 14142 2013-01-25 21:22:33Z maloneyc $

    Module:
        Main JATS Reader's application

    Author:
        Andrey Kolotev

    Synopsis:

    Usage:
        .... include jquery and all dependent modules ....
        <script src="js/jats.reader.js"></script>

    Assumptions:


    Dependencies:
    js/jquery.jr.pagemanager.js
*/
/*
  This work is in the public domain and may be reproduced, published or
  otherwise used without the permission of the National Library of Medicine (NLM).

  We request only that the NLM is cited as the source of the work.

  Although all reasonable efforts have been taken to ensure the accuracy and
  reliability of the software and data, the NLM and the U.S. Government  do
  not and cannot warrant the performance or results that may be obtained  by
  using this software or data. The NLM and the U.S. Government disclaim all
  warranties, express or implied, including warranties of performance,
  merchantability or fitness for any particular purpose.
*/

/* stubs for console */
!function(w) {
    if (!w.console) {
        var c = w.console = {};
        c.log = c.error = c.info = c.debug = c.warn = c.trace = c.dir
              = c.dirxml = c.group = c.groupEnd = c.time = c.timeEnd
              = c.assert = c.profile = c.profileEnd = function() {};
    }
}(window);


/* Main application */

pubreader = function () {
    var h  = window.location.href,
        $jrContent = $('#jr-content');

    try {

        if (! ($.jr.utils.csscolumns) ) {
            console.error("Your browser is not supported. HTML5/CSS3 and ECMAScript, " +
                          "5th Edition, CSS Multicolumn layout features are required.")
            /* Fire an event for unsupported browser, it relies on
                csscolumns properties detected by Modernizr */
            $jrContent.trigger('jr:util:unsupported-browser')
        } else {
            /* for cases when pixel offsets are not integers next
             * function adjust those properties on resize and the domReady time
             */
            // reveal UI
            $('#jr-ui').removeClass('hidden')
            //
            var $jrc = $('#jr-content'),
                resizeTimer
            //
            function adjustContentOffsets ($elm) {
                //resize content
                $elm.height($(window).height() - $(window).height() * .02);
            }
            //
            adjustContentOffsets($jrc)
            $(window).resize($.throttle(500, function (e) {adjustContentOffsets($jrc) }))

            // Instantiate Page Turn Sensors
            // This is a temporary component for use in development:
            try { $('#jr-pi').jr_PaginationStatus({poc: '#jr-content'}).removeClass('hidden') }
            catch (e) { console.error(e.message) }

            // Instantiate Page Turn Sensors
            try {
                if (! $.jr.utils.touch) {
                    $('#jr-pm-left').jr_PageTurnSensor({
                        action: 'prev', actionEv: 'jr:pm:go:prev:page', piEv: 'jr:pm:pages:changed', poc: '#jr-content'
                    });
                    $('#jr-pm-right').jr_PageTurnSensor({
                        action: 'next', actionEv: 'jr:pm:go:next:page', piEv: 'jr:pm:pages:changed', poc: '#jr-content'
                    });
                    $('#jr-pi-prev').jr_PageTurnSensor({
                        action: 'prev', actionEv: 'jr:pm:go:prev:page', piEv: 'jr:pm:pages:changed', poc: '#jr-content'
                    });
                    $('#jr-pi-next').jr_PageTurnSensor({
                        action: 'next', actionEv: 'jr:pm:go:next:page', piEv: 'jr:pm:pages:changed', poc: '#jr-content'
                    });
                }
            } catch (e) { console.error(e.message) }

            // Instantiate Page Progress Bar
            try {
                $('#jr-progress').jr_PageProgressBar({poc: '#jr-content'})
                                 .jr_Panel({'poc': '#jr-is-sw', inverted: true, propogateClick: true})
                //.jr_Panel({'poc': '#jr-pb-sw', propogateClick: true})
                //$('#jr-pb-sw').jr_Switcher({'poc': '#jr-dash', 'autoOff': false})
            } catch (e) { console.error(e.message) }

            // Instantiate Image strip
            try {
                $('#jr-istrip').jr_Panel({'poc': '#jr-is-sw', propogateClick: true});
                $('#jr-is-sw').jr_Switcher({'poc': '#jr-dash', 'state': true, 'autoOff': false})
                $('#jr-is-prev').jr_PageTurnSensor({
                    action: 'prev', actionEv: 'jr:is:go:prev:page', piEv: 'jr:is:pages:changed', poc: '#jr-istrip'
                });
                $('#jr-is-next').jr_PageTurnSensor({
                    action: 'next', actionEv: 'jr:is:go:next:page', piEv: 'jr:is:pages:changed', poc: '#jr-istrip'
                });
                $('#jr-istrip').jr_PanelIstrip();
            } catch (e) { console.error(e.message) }

            // Instantiate handling of links
            try {
                var a = $('article a').jr_Links({poc: '#jr-content'})
                // attempt to prevent blink on touch devices,
                // when you click anchors for figures and bibr citations
                if ($.jr.utils.touch)
                    a.filter('.bibr,.figpopup,.icnblk_cntnt a').removeAttr('href')
                $(document).on("click", "a", function(){
                                        var $t = $(this), h = $t.attr('href')
                                        if ( $t.data("jr.Links") == null && h != null && ( h !== '' || h !== '#' ) )
                                                $('#jr-content').trigger('jr:hk:mark:hp')
                                });
            } catch (e) { console.error(e.message) }



            // Links panel
            try {
                $('#jr-links-p').jr_Panel({'poc': '#jr-links-sw'})
                $('#jr-links-sw').jr_Switcher({'poc': '#jr-head'})
            } catch (e) { console.error(e.message) }

            // Alternative views of the article panel
            try {
                $('#jr-alt-p').jr_Panel({'poc': '#jr-alt-sw'})
                $('#jr-alt-sw').jr_Switcher({'poc': '#jr-head'})
            } catch (e) { console.error(e.message) }

            // contentMap panel
            try {
                $('#jr-cmap-p').jr_Panel({'poc': '#jr-cmap-sw'})
                $('#jr-cmap-p').jr_PanelCmap({'poc': '#jr-content'})
                $('#jr-cmap-sw').jr_Switcher({'poc': '#jr-head'})
            } catch (e) { console.error(e.message) }


            // Typography panel
            try { $('#jr-typo-p').jr_Panel({'poc': '#jr-typo-sw'})
                  $('#jr-typo-p').jr_PanelTypo()
                  $('#jr-typo-sw').jr_Switcher({'poc': '#jr-head'})
            } catch (e) { console.error(e.message) }

            // Instantiate page manager
            try { $('#jr-content').jr_PageManager() }
            catch (e) { console.error(e.message) }


            // Instantiate history keeper
            try { $('#jr-content').jr_HistoryKeeper() }
            catch (e) { console.error(e.message) }

            // Instantiate ObjectBox links
            try {
                $('#jr-content').find('.figpopup, .icnblk_cntnt a')
                                .jr_ObjectBox({
                                    handleClick: ! $.jr.utils.touch,
                                    contentLocal: true,
                                    contentLocalAttr: 'rid-ob'
                                });
            }
            catch (e) { console.error(e.message) }

            // Instantiate help content
            try {
                $('#jr-help-sw').jr_ObjectBox({'objectBoxClass': 'help'}).removeClass('hidden');
            }
            catch (e) { console.error(e.message) }

            /* figure popup/ callouts for bib references */
            try {
                var fp_cfg = new jQuery.fn.figPopup(),
                    a = jQuery('a.figpopup'),
                    bibr = jQuery('a.bibr')
                // add co-class to figure popups
                a.each (function () {
                    $(this).attr('co-class', 'co-fig')
                })

                // add co-class and co-rid attributes
                bibr.each (function () {
                    var $t = $(this)
                    $t.attr('co-class', 'co-refbox').attr('co-rid', $t.attr('rid'))
                })

                a.popupSensor({statIfLonger: 500, delayIn: fp_cfg.delayIn, delayOut: fp_cfg.delayOut, touchable: $.jr.utils.touch})
                bibr.popupSensor({statIfLonger: 500, delayIn: fp_cfg.delayIn, delayOut: fp_cfg.delayOut, touchable: $.jr.utils.touch})

                if (! $.jr.utils.touch) {
                    a.hoverIntent(fp_cfg)
                    bibr.hoverIntent(fp_cfg)
                }

            } catch (e) {console.error(e.message)}

        }
    } catch (e) {console.error(e.message)}
};

