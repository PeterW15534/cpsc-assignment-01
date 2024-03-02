document.addEventListener("DOMContentLoaded", function() {
    // Get form element and input references
    const form = document.getElementById("album-form");
    const titleInput = document.getElementById("album-title");
    const descriptionInput = document.getElementById("album-description");
    const selectInput = document.getElementById("albume-art");

    // Function to display feedback message and add is-invalid class
    function displayFeedback(element, message) {
        const feedbackElement = element.nextElementSibling; 
        feedbackElement.innerText = message; 
        feedbackElement.style.display = "block"; 
        element.classList.add("is-invalid"); 
    }

    // Function to hide feedback message and remove is-invalid class
    function hideFeedback(element) {
        const feedbackElement = element.nextElementSibling; 
        feedbackElement.innerText = ""; 
        feedbackElement.style.display = "none"; 
        element.classList.remove("is-invalid"); 
    }

    // Validate album title
    function validateTitle() {
        const title = titleInput.value.trim();
        if (title === "" || title.length > 20) {
            displayFeedback(titleInput, "Album title must be between 1 and 20 characters.");
            return false;
        } else {
            hideFeedback(titleInput);
            return true;
        }
    }

    // Validate description
    function validateDescription() {
        const description = descriptionInput.value.trim();
        if (description.length > 40) {
            displayFeedback(descriptionInput, "Description must be less than 40 characters.");
            return false;
        } else {
            hideFeedback(descriptionInput);
            return true;
        }
    }

    // Validate select input
    function validateSelect() {
        const selectedIndex = selectInput.selectedIndex;
        if (selectedIndex === 0) {
            displayFeedback(selectInput, "Please select an album art.");
            return false;
        } else {
            hideFeedback(selectInput);
            return true;
        }
    }

    // Event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Validate inputs
        const isTitleValid = validateTitle();
        const isDescriptionValid = validateDescription();
        const isSelectValid = validateSelect();

        // If all inputs are valid, proceed with form submission
        if (isTitleValid && isDescriptionValid && isSelectValid) {

            console.log("Form submitted successfully!");

            form.reset();
        }
    });
});