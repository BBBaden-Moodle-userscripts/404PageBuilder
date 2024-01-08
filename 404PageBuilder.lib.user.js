var pageBuilder = (function () {
    function info (){
        const name = "404PageBuilder.lib.user.js";
        const version = "0.1";
        const description = "edits 404 pages from moodle.bbbaden.ch";
        const author = "PianoNic";

        return {
            name: name,
            version: version,
            description: description,
            author: author,
            homepageURL: homepageURL   
        };
    }
    
    function preparePage(title, headerText){
        // HEAD SECTION
        document.title = title;
    
        // HEADER SECTION
        var pageHeader = document.getElementById('page-header');
        if (pageHeader) {
            var errorHeading = pageHeader.querySelector('h1.h2');
            if (errorHeading) {
                errorHeading.innerHTML = "";
            }
        }
    
        // PAGE CONTENT SECTION
        var pageContent = document.getElementById('page-content');
        if (pageContent) {
            pageContent.innerHTML = headerText;
        }

        console.log("finished preparing page");
    }

    function addH1(text){
        return None;
    }

    function addH2(text){
        return None;
    }

    function addLine(text){
        return None;
    }

    return {
      info: info,
      prepare: prepare,
      addH1: addH1,
      addH2: addH2,
      addLine: addLine
    };
})();
