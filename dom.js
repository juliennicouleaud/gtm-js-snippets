/**
 * --------------------------------------------------------------------------
 * GTM JS Snippets: dom.js
 * Licensed under GNU GPLv3 (https://github.com/juliennicouleaud/gtm-js-snippets/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 * 
 * TABLE OF CONTENT
 * 
 * 1. Retrieve content of text field
 * 
 */

 /**
   * ------------------------------------------------------------------------
   * 1. Retrieve value of text field
   * Configured here to find first occurence of class name
   * ------------------------------------------------------------------------
   */

function() {
	return document.getElementsByClassName('form-search')[0].value;
}