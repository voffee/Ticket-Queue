
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
        e.target.ariaSelected = true;
    });
}

console.log(tabs);
console.log(tabPanels);

tabs.forEach(element => {element.addEventListener('click', tabClickHandler)});