// ==UserScript==
// @name         paticik-fixed
// @include      https://forum.paticik.com/*
// @version      0.3
// @description  green theme fixed
// @author       bonesoul
// @run-at       document-start
// @grant        GM_addStyle
// @namespace https://greasyfork.org/users/259131
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`

    /*  ========================================
        side-wide changes.
        ========================================*/

    /* fix site-wide font */

    body {
        font-family: verdana, sans-serif, helvetica !important
    }

    /* add top-margin */

    .ipsApp {
        margin-top: 15px;
    }

    /* fix site-wide bgcolors */

    .ipsApp, .content-wrapper, #ipsLayout_body {
         background-color: #9ca183 !important;
    }

    .content-wrapper {
         background-image: none !important;
    }

    /* main content width fix */
    .content-wrap {
         width: 900px !important;
         margin: 0 auto;
    }

    /*  ========================================
        header changes
        ========================================*/

    /* fix header bgcolor */

    .ipsApp #header {
        background-color: #7F8464;
    }

    /* remove bg-image from header. */

    #header:before {
         background-image: none !important;
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
        margin-left: 350px !important;
    }

    /* fix user links colors */

    #elUserNav > li > a {
        color: #fff;
    }

    /*  ========================================
        navbar fixes
        ========================================*/

    /* fix nav-bar */

    .nav-bar-wrap {
        width: 900px !important;
        margin: 0 auto;
    }

    .nav-bar {
        background-color: #c8d2b0 !important;
    }

    .nav-bar > .ipsLayout_container {
        margin-left: 0px;
    }

    /* fix more button */

    .focus-nav-more,.focus-nav-more a:hover {
         background-color: #c8d2b0 !important;
    }

    .focus-nav-more a {
        background-image: none !important;
    }

    /*  ========================================
        page-header changes.
        ========================================*/

    /* fix page header bgcolor */
    .ipsPageHeader {
         background-color: #c8d2b0 !important;
    }

    /*  ========================================
        forums-list changes.
        ========================================*/

    /* fix forum-row's bgcolor */

    .cForumRow:nth-of-type(even) {
         background-color: #c7d2b0 !important;
    }

    .cForumRow:nth-of-type(odd) {
        background-color: #d3e3c0 !important;
   }

    /* forum-row title fixes */
    .ipsType_sectionTitle {
         color: #333;
         padding: 10px;
    }

    /*  ========================================
        topics-list changes.
        ========================================*/

    /* fix topic list bgcolor */

    .cForumTopicTable > li.ipsDataItem:nth-of-type(even) {
         background-color: #c7d2b0 !important;
    }

    .cForumTopicTable > li.ipsDataItem:nth-of-type(odd) {
        background-color: #d3e3c0 !important;
    }

    .ipsDataItem span, .ipsDataItem time {
         color: #666 !important;
    }

    /*  ========================================
        post changes
        ========================================*/

    /* post bgcolors */

    article:nth-of-type(even), article:nth-of-type(even) .ipsItemControls, article:nth-of-type(odd) .ipsQuote {
        background-color: #d3e3c0 !important;
    }

    article:nth-of-type(odd), article:nth-of-type(odd) .ipsItemControls, article:nth-of-type(even) .ipsQuote {
        background-color: #c7d2b0 !important;
    }

    /* remove avatars */

    .cAuthorPane_photo {
        display: none;
    }

    /* post author color */
    .cAuthorPane_author {
        color: #444 !important;
    }

    /* fix author pane - remove redundant info */

    .cAuthorPane_info li:first-child {
        display: none;
    }

    /* fix message top-bar's bgcolor */

    .cPost:before {
        background-color: #7F8464 !important;
    }

    /* topbar text colors */

    .ipsComment_meta {
         color: #444 !important;
    }

    /* reply box bgcolor */

    .cTopicPostArea {
         background-color: #d3e3c0 !important
    }

    /* post-page bottom bar */
    .ipsGrid {
        background-color: #d3e3c0 !important
    }

    /*  ========================================
        @mentions
        ========================================*/

    /* change bgcolor of @mentions. */

    a[data-mentionid] {
        background-color: #9ca184 !important;
    }
    `);
})();
