/**
 * --------------------------------------------------------------------------
 * GTM JS Snippets: urls.js
 * Licensed under GNU GPLv3 (https://github.com/juliennicouleaud/gtm-js-snippets/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 * 
 * TABLE OF CONTENT
 * 
 * 1. Comparing hostnames
 * 
 */

 /**
   * ------------------------------------------------------------------------
   * 1. Compare hostnames (to track external links for instance)
   * {{Click URL Hostname}} and {{Page URL Hostname}} are variables that have been created beforehand, and contain the hostnames of
   * Returns true if the hostnames don't match
   * Source : https://www.3whitehats.com/knowledge/external-links-google-tag-manager/
   * ------------------------------------------------------------------------
   */

function() {
    return ({{Click URL Hostname}} == {{Page URL Hostname}}) ? false : true;
}
