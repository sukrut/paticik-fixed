// ==UserScript==
// @name         paticik-fixed
// @include      https://forum.paticik.com/*
// @version      0.2
// @description  green theme fixed
// @author       bonesoul
// @run-at       document-start
// @grant        GM_addStyle
// @namespace https://greasyfork.org/users/259131
// ==/UserScript==

(function() {
    'use strict';

    // change bg color
    GM_addStyle(`
    /* fix site bgcolor */
    .ipsApp, .content-wrapper, #ipsLayout_body {
         background-color: #9ca183 !important;
    }
    .content-wrapper {
         background-image: none !important;
    }
    /* remove header image */
    #header:before {
         background-image: none !important;
    }
    /* fix header bgcolor */
    .ipsApp #header {
         background-color: #c8d2b0;
    }
    /* forum-row bg-fix */
    .cForumRow {
         background-color: #c8d2b0 !important;
    }
    /* message list bg fix */
    .ipsDataList {
         background-color: #c8d2b0 !important;
    }
    .ipsType_light {
         color: #666 !important;
    }
    /* fix header size */
    #ipsLayout_header {
         width: 900px !important;
         margin: 0 auto;
    }
    /* fix header aligns */
    .ipsLayout_container {
         margin-left: 25px;
         margin-right: 25px;
    }
    /* remove avatar from header */
    .ipsUserPhoto_tiny {
        display: none !important;
    }
    /* right align user links */
    .user-links {
        margin-left: 380px !important;
    }
    /* fix user links colors */
    #elUserNav > li > a {
        color: #666;
    }
    /* fix nav-bar */
    .nav-bar-wrap {
        width: 900px !important;
        margin: 0 auto;
    }
    .nav-bar {
        background-color: #e8e9e3 !important;
    }
    .nav-bar > .ipsLayout_container {
        margin-left: 0px;
    }
    /* page header bg color fix */
    .ipsPageHeader {
         background-color: #e8e9e3 !important;
    }
    /* main content width fix */
    .content-wrap {
         width: 900px !important;
         margin: 0 auto;
    }
    /* remove avatars */
    .cAuthorPane_photo {
        display: none;
    }
    /* message bg colors */
    article:nth-of-type(even), article:nth-of-type(even) .ipsItemControls {
        background-color: #d3e3c0 !important;
    }
    article:nth-of-type(even) .ipsQuote {
        background-color: #c7d2b0 !important;
    }
    article:nth-of-type(odd), article:nth-of-type(odd) .ipsItemControls {
        background-color: #c7d2b0 !important;
    }
    article:nth-of-type(odd) .ipsQuote {
        background-color: #d3e3c0 !important;
    }
    `);
})();
