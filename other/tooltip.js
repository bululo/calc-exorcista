if (typeof DP == 'undefined') DP = {};

if (typeof DP.Tooltips == 'undefined') DP.Tooltips = new function () { // Reminder: Keep in sync with the equivalent code in dp.js
    var URL_QUERY_BASE = 'https://{mode}.divine-pride.net/tooltip/';
    var URL_QUERY_BASE_DEBUG = 'http://localhost:4312/tooltip/';

    var TYPES = {
        item: {
            type: 'item',
            url: 'database/item/{key}'
        },
        monster: {
            type: 'monster',
            url: 'database/monster/{key}'
        },
        npc: {
            type: 'npc',
            url: 'database/npc/{key}'
        },
        skill: {
            type: 'skill',
            url: 'database/skill/{key}'
        },
        efst: {
            type: 'efst',
            url: 'database/efst/{key}'
        },
        title: {
            type: 'title',
            url: 'database/title/{key}'
        },
        achievement: {
            type: 'achievement',
            url: 'database/achievement/{key}'
        },
        map: {
            type: 'map',
            url: 'database/map/{key}'
        },
        quest: {
            type: 'quest',
            url: 'database/quest/{key}'
        },
        optionGroup: {
            type: 'optionGroup',
            url: 'database/optionGroup/{key}'
        }
    };

    var URL_PATTERN_BASE_DEBUG = new RegExp('^http://localhost:..../(.+)');
    var URL_PATTERN_BASE = new RegExp('^https://(.*)\\.divine-pride\\.net/(.+)');
    var URL_PATTERN_SELF = new RegExp('www\\.divine-pride\\.net/Scripts/tooltip\\.js'); // Used to get region from the <script> tag
    var URL_PATTERNS = [
        {
            regex: new RegExp('^database/item/([0-9]+)/?.*$'),
            params: {
                type: 'item'
            }
        },
        {
            regex: new RegExp('^database/npc/([0-9]+)/?.*$'),
            params: {
                type: 'npc'
            }
        },
        {
            regex: new RegExp('^database/monster/([0-9]+)/?.*$'),
            params: {
                type: 'monster'
            }
        },
        {
            regex: new RegExp('^database/skill/([0-9]+)/?.*$'),
            params: {
                type: 'skill'
            }
        },
        {
            regex: new RegExp('^database/efst/([0-9]+)/?.*$'),
            params: {
                type: 'efst'
            }
        },
        {
            regex: new RegExp('^database/quest/([0-9]+)/?.*$'),
            params: {
                type: 'quest'
            }
        },
        {
            regex: new RegExp('^database/title/([0-9]+)/?.*$'),
            params: {
                type: 'title'
            }
        },
        {
            regex: new RegExp('^database/achievement/([0-9]+)/?.*$'),
            params: {
                type: 'achievement'
            }
        },
        {
            regex: new RegExp('^database/map/([a-zA-Z0-9\_]+)/?.*$'),
            params: {
                type: 'map'
            }
        },
        {
            regex: new RegExp('^database/optionGroup/([a-zA-Z0-9\_]+)/?.*$'),
            params: {
                type: 'optionGroup'
            }
        }
    ];

    var DELAY_LOADING = 500; // ms
    var dataCache = {};

    // State
    var loadingTimer;
    var currentLink;
    var currentParams;

    function construct() {
        $.documentReady(initialize);
    }

    function initialize() {
        setTimeout(getCss, 1);
        setTimeout(bindEvents, 1);
    }

    function getCss() {
        var scripts = document.getElementsByTagName('script');
        var currentScript = scripts[scripts.length - 1];
        var scriptRegion;

        if (currentScript && currentScript.src.match(URL_PATTERN_SELF)) {
            scriptRegion = RegExp.$1;
        }
        $.getStyle('https://www.divine-pride.net/Content/css/tooltip.css?v=20180403');
    }

    //
    function bindEvents() {
        $.bindEvent(document, 'mouseover', function (e) {
            e = $.normalizeEvent(e);

            // Adds tooltip to label tag
            if (e.target && e.target.nodeName.toUpperCase() == 'LABEL') {
                linkMouseOver(e.target);
            }
            if (e.target.parentElement && e.target.parentElement.nodeName.toUpperCase() == 'LABEL') {
                linkMouseOver(e.target.parentElement);
            }

            // Adds tooltip to select tag
            if (e.target && e.target.nodeName.toUpperCase() == 'SELECT') {
                linkMouseOver(e.target);
            }
            if (e.target.parentElement && e.target.parentElement.nodeName.toUpperCase() == 'SELECT') {
                linkMouseOver(e.target.parentElement);
            }
        });

        $.bindEvent(document, 'mouseout', function (e) {
            e = $.normalizeEvent(e);
            // Adds tooltip to label tag
            if (e.target && e.target.nodeName.toUpperCase() == 'LABEL') {
                linkMouseOut(e.target);
            }
            if (e.target.parentElement && e.target.parentElement.nodeName.toUpperCase() == 'LABEL') {
                linkMouseOut(e.target.parentElement);
            }

            // Adds tooltip to select tag
            if (e.target && e.target.nodeName.toUpperCase() == 'SELECT') {
                linkMouseOut(e.target);
            }
            if (e.target.parentElement && e.target.parentElement.nodeName.toUpperCase() == 'SELECT') {
                linkMouseOut(e.target.parentElement);
            }
        });
    }

    function linkMouseOver(link) {
        var params = {};

        // pass class name to be able to retrieve item id
        var className = "";
        if (link.className == 'select-icon' || link.className == 'slot'){
            className = "select";
        } else if (link.className == 'consumable') {
            className = "consumable";
        } else {
            return;
        }

        if (!parseUrl(link, params, className)) {
            parseUrlDebug(link, params);
        }

        if (!params.key || currentLink == link) {
            return;
        }

        currentLink = link;
        currentParams = params;

        var data = getTooltip(params);
        if (data != null) {
            showTooltip(data);
        }
    }

    function linkMouseOut(link) {

        if (link != currentLink) {
            return;
        }

        Tooltip.hide();

        currentLink = null;
        currentParams = null;
    }

    function parseUrl(link, params, className) {
        let id;
        // correctly retrieves item id
        if (className=="select"){
            id = link.options[link.selectedIndex].value;
        } else {
            id = link.id;
        }

        let itemURL = 'https://www.divine-pride.net/database/item/' + id;
        //
        if (!itemURL.match(URL_PATTERN_BASE)) {
            return false;
        }
        if (itemURL.indexOf("#") !== -1) {
            return false;
        }

        var mode = RegExp.$1;
        var path = RegExp.$2;
        for (var i = 0; i < URL_PATTERNS.length; ++i) {

            var urlPattern = URL_PATTERNS[i];
            if (!path.match(urlPattern.regex)) {
                continue;
            }

            var key = RegExp.$1;
            if (key.indexOf('/') != -1) { // Folder and key shouldn't contain any slashes
                continue;
            }

            params.mode = mode;
            params.key = key;

            // Copy pattern's params
            for (var i in urlPattern.params) {
                params[i] = urlPattern.params[i];
            }

            params.tooltipType = getTooltipType(params.type);
            return true;
        }

        return false;
    }

    function parseUrlDebug(link, params) {
        //
        let id = link.options[link.selectedIndex].value;
        let itemURL = 'https://www.divine-pride.net/database/item/' + id;
        //

        var urlMatch = itemURL.match(URL_PATTERN_BASE_DEBUG);
        if (!urlMatch) {
            return;
        }
        if (itemURL.indexOf("#") !== -1) {
            return;
        }

        var path = urlMatch[1];
        for (var i = 0; i < URL_PATTERNS.length; ++i) {

            var urlPattern = URL_PATTERNS[i];
            var keyMatch = path.match(urlPattern.regex);
            if (!keyMatch) {
                continue;
            }

            var key = keyMatch[1];
            if (key.indexOf('/') != -1) { // Folder and key shouldn't contain any slashes
                continue;
            }

            params.mode = "www";
            params.key = key;

            // Copy pattern's params
            for (var i in urlPattern.params) {
                params[i] = urlPattern.params[i];
            }

            URL_QUERY_BASE = URL_QUERY_BASE_DEBUG;
            params.tooltipType = getTooltipType(params.type);
            return;
        }
    }

    function requestTooltip(params) {

        var url = (URL_QUERY_BASE + params.tooltipType.url)
            .replace('{mode}', params.mode)
            .replace('{key}', params.key)
            .replace('{server}', params.server);
        $.getScript(url);
    }

    function registerData(data) {
        clearTimeout(loadingTimer);

        var params = data.params;

        saveData(params, data);

        if (currentParams != null && getCacheKeyFromParams(params) == getCacheKeyFromParams(currentParams)) {
            showTooltip(data);
        }
    }

    function getTooltip(params) {

        var data = loadData(params);

        if (data == null) { // Fetch data if not already cached
            clearTimeout(loadingTimer);
            loadingTimer = setTimeout(showLoading, DELAY_LOADING);
            requestTooltip(params);
            return null;
        }

        return data;
    }

    function showLoading() {

        if (currentLink != null) {
            Tooltip.show(currentLink, '<div class="dp-tooltip"><div class="loading"></div></div>');
        }
    }

    function showTooltip(data) {

        if (currentLink != null) {
            console.log(data.tooltipHtml);
            Tooltip.show(currentLink, data.tooltipHtml);
        }
    }

    // Utilities
    function getTooltipType(type) {
        return TYPES[type];
    }

    function saveData(params, data) {
        var cacheKey = getCacheKeyFromParams(params);
        dataCache[cacheKey] = data;
    }

    function loadData(params) {
        var cacheKey = getCacheKeyFromParams(params);
        return dataCache[cacheKey];
    }

    function getCacheKeyFromParams(params) {
        return [
            params.region,
            params.locale,
            params.type,
            params.key
        ].join('-');
    }

    // Public methods
    this.registerData = registerData;


    // HTML Helpers
    var $ = {

        create: function (nodeName) {
            return document.createElement(nodeName);
        },

        getScript: function (url) {

            var script = $.create('script');
            script.type = 'text/javascript';
            script.src = url;

            document.body.appendChild(script);
        },

        getStyle: function (url) {

            var link = $.create('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;

            document.body.appendChild(link);
        },

        documentReady: function (callback) {

            if (document.readyState == 'complete') {
                callback();
                return;
            }

            var occurred = false;

            $.bindEvent(document, 'DOMContentLoaded', function () {

                if (!occurred) {
                    occurred = true;
                    callback();
                }
            });

            $.bindEvent(document, 'readystatechange', function () {

                if (document.readyState == 'complete' && !occurred) {
                    occurred = true;
                    callback();
                }
            });

        },

        bindEvent: function (node, eventType, callback) {
            if (node.addEventListener) {
                node.addEventListener(eventType, callback, true); // Must be true to work in Opera
            } else {
                node.attachEvent('on' + eventType, callback);
            }
        },

        normalizeEvent: function (e) {
            var ev = {};
            ev.target = (e.target ? e.target : e.srcElement);
            ev.which = (e.which ? e.which : e.button);
            return ev;
        },

        getWindowSize: function () {

            var w = 0;
            var h = 0;

            if (document.documentElement && document.documentElement.clientHeight) {
                w = document.documentElement.clientWidth;
                h = document.documentElement.clientHeight;
            } else if (document.body && document.body.clientHeight) {
                w = document.body.clientWidth;
                h = document.body.clientHeight;
            } else if (window.innerHeight) {
                w = window.innerWidth;
                h = window.innerHeight;
            }

            return {
                w: w,
                h: h
            };
        },

        getScrollPosition: function () {

            var x = 0;
            var y = 0;

            if (window.pageXOffset || window.pageYOffset) {
                x = window.pageXOffset;
                y = window.pageYOffset;
            } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                x = document.body.scrollLeft;
                y = document.body.scrollTop;
            } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                x = document.documentElement.scrollLeft;
                y = document.documentElement.scrollTop;
            }

            return {
                x: x,
                y: y
            };
        },

        getOffset: function (node) {

            var x = 0;
            var y = 0;

            while (node) {
                x += node.offsetLeft;
                y += node.offsetTop;

                var p = node.parentNode;

                while (p && p != node.offsetParent && p.offsetParent) {
                    if (p.scrollLeft || p.scrollTop) {
                        x -= (p.scrollLeft | 0);
                        y -= (p.scrollTop | 0);
                        break;
                    }
                    p = p.parentNode;
                }
                node = node.offsetParent;
            }

            return {
                x: x,
                y: y
            };
        },

        getViewport: function () {
            var windowSize = $.getWindowSize();
            var scroll = $.getScrollPosition();

            return {
                l: scroll.x,
                t: scroll.y,
                r: scroll.x + windowSize.w,
                b: scroll.y + windowSize.h
            };
        }
    };

    $.Browser = {};
    $.Browser.ie = !!(window.attachEvent && !window.opera);
    $.Browser.ie6 = $.Browser.ie && navigator.userAgent.indexOf("MSIE 6.0") != -1;

    // Helper class that handles displaying tooltips
    var Tooltip = new function () {

        var PADDING = 5;

        var tooltipWrapper;
        var tooltipContent;

        function initialize() {

            tooltipWrapper = $.create('div');
            tooltipWrapper.className = 'dp-tooltip-wrapper';

            tooltipContent = $.create('div');
            tooltipContent.className = 'dp-tooltip-wrapper-inner';

            tooltipWrapper.appendChild(tooltipContent);
            document.body.appendChild(tooltipWrapper);

            hide();
        }

        function show(node, html) {

            if (tooltipWrapper == null) {
                initialize();
            }

            tooltipWrapper.style.visibility = 'hidden';
            tooltipWrapper.style.display = 'block';
            tooltipContent.innerHTML = html;

            var viewport = $.getViewport();
            var offset = $.getOffset(node);

            var x = offset.x + node.offsetWidth + PADDING;
            var y = offset.y - tooltipWrapper.offsetHeight - PADDING;

            if (y < viewport.t) {
                y = viewport.t;
            }

            if (x + tooltipWrapper.offsetWidth > viewport.r) {
                x = offset.x - tooltipWrapper.offsetWidth - PADDING;
            }

            reveal(x, y);
        }

        function hide() {

            if (tooltipWrapper == null) {
                return;
            }

            tooltipWrapper.style.display = 'none';
        }

        function reveal(x, y) {

            tooltipWrapper.style.left = x + 'px';
            tooltipWrapper.style.top = y + 'px';

            tooltipWrapper.style.visibility = 'visible';
        }

        // Public methods
        this.show = show;
        this.hide = hide;

    };

    construct();
};