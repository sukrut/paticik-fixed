// ==UserScript==
// @name         paticik-fixed
// @include      https://forum.paticik.com/*
// @version      0.1
// @description  green theme fixed
// @author       bonesoul
// @run-at       document-start
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @namespace https://greasyfork.org/users/259131
// ==/UserScript==

(function() {
    'use strict';

    // change bg color
    GM_addStyle(`
    .ipsUserPhoto{
         display: none !important;
     }
    .ipsApp {
         background-color: #e8e9e3 !important;
    }
     #ipsLayout_header {
         width: 900px !important;
         margin: 0 auto;
      }
    .nav-bar-wrap {
        width: 900px !important;
        margin: 0 auto;
    }
    .nav-bar {
        background-color: #e8e9e3 !important;
    }
    .content-wrap {
         width: 900px !important;
         margin: 0 auto;
    }
    .ipsPageHeader {
         background-color: #e8e9e3 !important;
    }
    .focus-topic {
        background-color: #e8e9e3 !important;
    }
    .ipsColumn_fluid {
         padding-left: 15px !important;
    }
    .ipsItemControls {
         //background-color: #e8e9e3 !important;
         display: none;
         padding: 0 !important;
         margin-left: 0 !important;
    }
    .ipsQuote {
         background-color: #e8e9e3 !important;
    }
    .cPost::before {
         display: none;
    }
    .cPost {
         border-top: 1px solid black !important;
         border-left: 1px solid black !important;
         border-right: 1px solid black !important;
    }
    .cForumRow {
         background-color: #e8e9e3 !important;
    }
    .cAuthorPane_info li:first-child {
        display: none;
    }
    .cAuthorPane_info li:nth-child(6) {
        display: none;
    }
    .cAuthorPane_photo {
        display: none;
    }
    .cAuthorPane {
         border-right: 1px solid black !important;
    }
    .ipsComment_meta {
         color: black !important;
         border-bottom: 1px solid black !important;
    }
    .ipsComment_author {
         padding: 0 !important;
    }
    .cAuthorPane_author {
         color: black !important;
    }
    .cAuthorPane_info:after {
         display: none !important;
    }
    .cAuthorPane_info {
         padding-top: 0 !important;
    }
    `);

    $(document).ready(function() {

        $("article").each(function(index) {
             if(index % 2 === 0)
             {
               $(this).css("background-color", "#e8e9e3");
             } else
             {
               $(this).css("background-color", "#9ca184");
             }
        });
    });
})();
