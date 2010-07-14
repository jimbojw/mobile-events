/**
 * menu.js - JavaScript to handle menu actions
 */
(function($, window, document, undefined){

var

    // state
    showing = false,
    
    // trigger type
    trigger = null,
    
    // cached jQuery result sets
    $nav = $('.nav'),
    $toggle = $nav.find('.toggle'),
    $marker = $toggle.find('span'),
    $list = $nav.find('ul');

/**
 * handler for toggle nav action.
 */
function togglenav(event) {

    // capture first trigger type
    if (!trigger) {
        trigger = event.type;
    }
    
    // only trigger if type matches
    if (trigger === event.type) {

        // toggle display elements
        if (showing) {
            $marker.html('+');
            $list.hide();
            showing = false;
        } else {
            $marker.html('&ndash;');
            $list.show();
            showing = true;
        }
        
    }

}

// attach toggle handler
$toggle
    .bind('touchend', togglenav)
    .bind('mouseup', togglenav)
    .bind('MozTouchUp', togglenav)
    .bind('MozTouchRelease', togglenav);

})(window.jQuery, window, window.document);
