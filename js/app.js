
console.log("Hello World");

// Tab variables
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// Modal variables
const modal = document.querySelector(".modal");

// Click Handler
function tabClickHandler(e) {
    tabs.forEach(element => {
        element.ariaSelected = false;
    });

    e.target.ariaSelected = true;

    const tabID = e.target.getAttribute('aria-controls');

    tabPanels.forEach(element => {
        // const elementStyle = window.getComputedStyle(element);

        if(element.id === tabID) {
            element.hidden = false;
            element.style.overflowY = 'auto';
        }
        else {
            element.hidden = true;
        }
    });
}

tabs.forEach(element => {element.addEventListener('click', tabClickHandler)});