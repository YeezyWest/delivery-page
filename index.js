//grab everything
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');


//add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// Get the container element
let transportContainer = document.getElementById("transport");

// Get all buttons with class="btn" inside the container
let transportType = transportContainer.getElementsByClassName("transport-type");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < transportType.length; i++) {
    transportType[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
