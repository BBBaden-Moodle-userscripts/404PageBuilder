var PageBuilder = (function () {
    
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
            <div id="region-main" class="header-maxwidth custom-content" aria-label="Inhalt">
                
            </div>
        `;
        }

        console.log("finished preparing page");
    }

    function addH1(text){
        var pageContent = document.getElementByClassName('custom-content');
        pageContent.innerHTML += `
        <h1>${text}</h1>
        `
    }

    function addH2(text){
        var pageContent = document.getElementByClassName('custom-content');
        pageContent.innerHTML += `
        <h2>${text}</h2>
        `
    }
        
    function addButton(text){
        var pageContent = document.getElementByClassName('custom-content');
        pageContent.innerHTML += `
        <button class="btn btn-outline-secondary btn-sm text-nowrap h2">${text}</button>
        `
    } 
    
    function addLine(){
        var pageContent = document.getElementByClassName('custom-content');
        pageContent.innerHTML += `
        <div class="nav-tabs h2" id="line"></div>
        `
    }    
    
     

    function addExtensionInstallationTable() {
    // Fetch the table from the given URL
    fetch('https://raw.githubusercontent.com/BBBaden-Moodle-userscripts/BBBaden-Moodle/main/AllProjects.md')
        .then(response => response.text())
        .then(data => {
            // Parse the markdown content into HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Extract the table
            const table = doc.querySelector('table');

            // Set styles to make the table use the full width
            table.style.width = '100%';
            table.style.borderCollapse = 'collapse';

            // Add space between each line (transparent border)
            const tbody = table.querySelector('tbody');
            if (tbody) {
                const tableRows = tbody.querySelectorAll('tr');
                tableRows.forEach(row => {
                    row.style.borderBottom = '4px solid transparent';
                });
            }

            // Append the table to the specified div
            const tableOfContentDiv = document.getElementById('tableOfContent');
            if (tableOfContentDiv) {
                // Add two new columns at the end of each row
                const headerRow = table.querySelector('thead tr');
                headerRow.innerHTML += '<th>Installed Status</th>';

                const bodyRows = table.querySelectorAll('tbody tr');
                bodyRows.forEach(row => {
                    // Convert all "Install" links to buttons
                    const installLink = row.querySelector('td:last-child a');
                    installLink.outerHTML = '<button class="btn btn-outline-secondary btn-sm text-nowrap h2 install-button">' + "<a href='" + installLink + "'>" +"Install</a>" + '</button>';

                    // Add "Installed Status" column with default value "Not Installed"
                    row.innerHTML += '<td>Not Installed</td>';
                });

                // Append the table to the div
                tableOfContentDiv.appendChild(table);
            }
        })
        .catch(error => {
            console.error('Error fetching or appending table:', error);
        });
}
    
    return {
      info: info,
      preparePage: preparePage,
      addH1: addH1,
      addH2: addH2,
      addButton: addButton,
      addLine: addLine,
      addExtensionInstallationTable: addExtensionInstallationTable,
    };
})();
