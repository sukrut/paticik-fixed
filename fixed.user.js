// ==UserScript==
// @include       https://forum.paticik.com/*
// @name          paticik-fixed
// @description   paticik fixed
// @license       MIT
// @version       0.1
// @author       bonesoul
// @run-at       document-start
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // change bg color
    GM_addStyle(`
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
         background-color: #e8e9e3;
         padding-left: 15px !important;
      }

      .ipsItemControls {
         background-color: #e8e9e3 !important;
      }

      .cAuthorPane_info {
        display: none;
      }

      .ipsComment_author {
        display: none;
      }

      .ipsItemControls {
        display: none;
      }

.ipsQuote {
         background-color: #e8e9e3 !important;
}

.cForumRow {
         background-color: #e8e9e3 !important;
}
    `);

    $(document).ready(function() {

        $("article.cPost").each(function() {
           var poster = $(this).find("aside.ipsComment_author > h3 > strong").html();
           var topBar = $(this).find("div.ipsComment_meta > div.ipsType_reset > a");
           topBar.prepend(poster);
          console.dir(poster);
        });



    });
})();
