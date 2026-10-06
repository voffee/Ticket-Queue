
console.log("Hello World");

// Tab variables
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// Modal-related variables
const modal = document.querySelector(".modal");
const addTicket = document.querySelector(".add");
const cancelTicket = document.querySelector("#cancel");
const departmentSelect = document.querySelector("#department");
const subjectSelect = document.querySelector("#subject");
const prioritySelect = document.querySelector("#priority");

// Ticket queue related variables


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

    // Get information when fields are updated
    departmentSelect.addEventListener("change", (e) => {
        const departmentSelectedValue = e.target.value;
        console.log(departmentSelectedValue);
    })

    subjectSelect.addEventListener("change", (e) => {
        const subjectSelectedValue = e.target.value;
        console.log(subjectSelectedValue);
    })

    prioritySelect.addEventListener("change", (e) => {
        const prioritySelectedValue = e.target.value;
        console.log(prioritySelectedValue);
    })
}

// Data Bundler
function dataBundler() {
    
}

tabs.forEach(element => {element.addEventListener('click', tabClickHandler)});

addTicket.addEventListener("click", modalHandler);
cancelTicket.addEventListener("click",() => modal.close());

console.log(departmentSelect);
console.log(subjectSelect);
console.log(prioritySelect);