/**
 * --------------------------------------------------------------------------
 * GTM JS Snippets: files.js
 * Licensed under GNU GPLv3 (https://github.com/juliennicouleaud/gtm-js-snippets/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 * 
 * TABLE OF CONTENT
 * 
 * 1. Getting the filename of a file based on the URL
 * 2. Getting the extension of a file based on the URL
 * 
 */

 /**
   * ------------------------------------------------------------------------
   * 1. Filename
   * ------------------------------------------------------------------------
   */

function() {
    var filepath = {{Click Element}}.pathname.split("/");
    var fileName = filepath.pop();
    return fileName;
}

/**
   * ------------------------------------------------------------------------
   * 2. Extension
   * ------------------------------------------------------------------------
   */

function() {
    var filepath = {{Click Element}}.pathname.split("/");
    var fileName = filepath.pop();
    var extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    return extension;
}
