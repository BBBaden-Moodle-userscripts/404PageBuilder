var PageBuilder = (function () {
    
    function info (){
        const name = "404PageBuilder.lib.user.js";
        const version = "0.3.1";
        const description = "edits 404 pages from moodle.bbbaden.ch";
        const author = "PianoNic";
        const homepageURL = "";

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
                <div class="nav-tabs h2" id="line"></div>
            </div>
            `

        }

        console.log("finished preparing page");
    }

    function addElement(tag, text = null, className = null) {
        var pageContent = document.getElementsByClassName('custom-content')[0];
        var element = document.createElement(tag);
        if (text) {
            element.textContent = text;
        }
        if (className) {
            element.classList.add(className);
        }
        pageContent.appendChild(element);
    }

        
    function addButton(buttonText, jsCode, className = null) {
        const customContentDiv = document.querySelector('.custom-content');

        if (customContentDiv) {
            const button = document.createElement('button');
            button.innerText = buttonText || 'Click me!';
            button.classList.add("btn", "btn-outline-secondary", "btn-sm");
            if(className){
                button.classList.add(className);
            }
            
            button.addEventListener('click', function() {
                eval(jsCode);
            });

            customContentDiv.appendChild(button);
        }
    }

    function addTextField(id, className = null){
        var pageContent = document.getElementsByClassName('custom-content')[0];
        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = id;        
        inputElement.classList.add("form-control", "mb-1");
        if(className){
            inputElement.classList.add(className);
        }
        pageContent.appendChild(inputElement);
    }

    
    function addLine() {
        var newDiv = document.createElement('div');
        
        newDiv.id = 'line';
        newDiv.className = 'nav-tabs h2';
    
        var pageContent = document.querySelector('.custom-content');
        if (pageContent) {
            pageContent.appendChild(newDiv);
        } else {
            console.error('.custom-content element not found.');
        }
    } 
    
    function addHTML(html){
        var pageContent = document.getElementsByClassName('custom-content')[0];
        pageContent.innerHTML += html
    }  

    function updateInstallationStatus(scriptName, scriptVersion) {
        // Find the table row with the matching script name
        var pageContent = document.getElementsByClassName('custom-content')[0];
        var table = pageContent.querySelector('table');
        
        if (table) {
            var bodyRows = table.querySelectorAll('tbody tr');
            
            bodyRows.forEach(row => {
                var installedScriptName = row.querySelector('td:nth-child(2)').textContent.trim();
                
                if (installedScriptName === scriptName) {
                    // Update the status cell with "Installed"
                    row.querySelector('td:last-child').textContent = 'Installed';
                    return; // Break the loop since the script is found
                }
            });
        }
    }

    
    return {
      info: info,
      preparePage: preparePage,
      addElement: addElement,
      addButton: addButton,
      addTextField: addTextField,
      addLine: addLine,
      addHTML: addHTML,
      updateInstallationStatus: updateInstallationStatus,
    };
})();
