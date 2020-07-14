// Categories must be the same as div class that needs to be replaced
categories = ['popular-items', 'appetizer-items', 'salad-items', 'specialties-items', 'dinner-items', 'alacarte-items', 'combinations-items']

function openNav() {
    document.getElementById("mobile_menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile_menu").style.width = "0%";
}

function changeCategory(category) {
    // Clear all categories
    for(let i = 0; i < categories.length; i++) {
        document.querySelector(`.${categories[i]}`).style.display = 'none';
    }

    // Shows the category that was clicked
    // Every category must be structured like popular-items
    curCategory = document.querySelector(`.${category}`).style.display = 'initial';  
}

// Hide button and show sidebar when btn is pressed
function showCategories() {
    document.querySelector('.categories-btn').style.display = 'none';
    document.querySelector('.side-navbar').style.backgroundColor = 'rgba(0, 0, 0, .44)';

    // querySelectorAll returns an array of all elements, so a loop is necessary
    listOfCategories = document.querySelectorAll('.side-navbar a');
    for(let i = 0; i < listOfCategories.length; i++) {
        listOfCategories[i].style.display = 'initial';
    }
        
}
