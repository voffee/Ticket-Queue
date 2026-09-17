
console.log("Hello World");

// Tab variables
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// Modal variables
const modal = document.querySelector(".modal");
const addModal = document.querySelector(".add");

// Click Handler
function tabClickHandler(e) {
    tabs.forEach(element => {
        element.ariaSelected = false;
        // tabs are the tablist button, i.e. tabs that control their associated tab panel
        // set all tabs to hidden on click
    });

    e.target.ariaSelected = true;
    // enable clicked tab panel

    const tabID = e.target.getAttribute('aria-controls');
    console.log(tabID);
    //find the tab panel that the clicked tab controls 

    tabPanels.forEach(element => {
        // loop through all the tab panels to find which is the one controlled by the clicked tab
        if(element.id === tabID) {
            element.hidden = false;
            // set the controlled panel to display
        }
        else {
            element.hidden = true;
            // set all other panels to hidden
        }
    });
}

// Modal Handler
function modalHandler() {
    modal.showModal();
}

// Data Bundler
function dataBundler() {
    
}

tabs.forEach(element => {element.addEventListener('click', tabClickHandler)});

addModal.addEventListener("click", modalHandler);