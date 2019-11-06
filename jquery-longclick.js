/* =====================================================================
 * query-longclick.js v0.0.1
 * https://github.com/marcelsoftware/jquery-longclick
 * =====================================================================
 * Copyright (c) 2019 MarcelSoftware
 * ===================================================================== */
$.fn.longclick = function(timeToHold, callbackLong, callbackShort) {
    let interval;
    let longCalled = false;
    $(this).on('mousedown touchstart', function(e) {
        console.log(e);
        e.preventDefault();
        interval = setInterval(() => {
            typeof callbackLong == 'function' && callbackLong(e);
            longCalled = true;
        }, timeToHold);
    });
    $(this).on('mouseup touchend', function(e) {
        if(!longCalled) {
            typeof callbackLong == 'function' && callbackShort(e);
        }
        longCalled = false;
        clearInterval(interval);
    });
};