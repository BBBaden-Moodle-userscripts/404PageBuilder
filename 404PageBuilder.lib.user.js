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
                errorHeading.innerHTML = headerText;
            }
        }
    
        // PAGE CONTENT SECTION
        var pageContent = document.getElementById('page-content');
        if (pageContent) {
            pageContent.innerHTML = `
            <div id="region-main custom-content" class="header-maxwidth" aria-label="Inhalt">
                
            </div>
        `;
        }

        console.log("finished preparing page");
    }

    function addH1(text){
        var pageContent = document.getElementById('custom-content');
        pageContent.innerHTML += `
        <h1>${text}</h1>
        `
    }

    function addH2(text){
        var pageContent = document.getElementById('custom-content');
        return None;
    }

    function addLine(){
        var pageContent = document.getElementById('custom-content');
        return None;
    }    
    
    return {
      info: info,
      preparePage: preparePage,
      addH1: addH1,
      addH2: addH2,
      addLine: addLine
    };
})();
