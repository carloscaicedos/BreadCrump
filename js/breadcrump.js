/*jslint browser: true*/
/*global $, jQuery*/

function refreshBreadcrump() {
    'use strict';
    var totalWidth = 0,
        borderWidth1 = $('.cont').height() + 10,
        borderWidth2 = 0;

    if (borderWidth1 % 2 === 0) {
        borderWidth1 /= 2;
        borderWidth2 = borderWidth1;
    } else {
        borderWidth1 = parseInt(borderWidth1 / 2, 10);
        borderWidth2 = borderWidth1 + 1;
    }

    if (document.styleSheets[0].insertRule) { // Firefox
        document.styleSheets[0].insertRule('.item:before, .item:after{border-left-width:' + borderWidth1 + 'px !important;}', 0);
        document.styleSheets[0].insertRule('.item:before, .item:after{border-top-width:' + borderWidth1 + 'px !important;}', 0);
        document.styleSheets[0].insertRule('.item:before, .item:after{border-bottom-width:' + borderWidth2 + 'px !important;}', 0);
    } else { // Chrome, IExplorer
        document.styleSheets[0].addRule('.item:before, .item:after', 'border-left-width:' + borderWidth1 + 'px');
        document.styleSheets[0].addRule('.item:before, .item:after', 'border-top-width:' + borderWidth1 + 'px');
        document.styleSheets[0].addRule('.item:before, .item:after', 'border-bottom-width:' + borderWidth2 + 'px');
    }

    $('.item').each(function (i) {
        totalWidth += $(this).width();
    });

    $('.panel').width(totalWidth * 1.06);
}

$(function () {
    'use strict';
    
    refreshBreadcrump();
});