// constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.getElementById("changeCustomColor");
const randomColorButton = document.getElementById("changeRandomColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const studentId = document.getElementById("myStudentId");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);

    if (userInput >= 0 && userInput <= 100) {
        studentId.textContent = `Student ID: ${userInput}`;
        if (userInput < 20) {
            document.body.style.backgroundColor = "green";
        } else if (userInput < 40) {
            document.body.style.backgroundColor = "blue";
        } else if (userInput < 60) {
            document.body.style.backgroundColor = "orange";
        } else if (userInput < 80) {
            document.body.style.backgroundColor = "purple";
        } else {
            document.body.style.backgroundColor = "yellow";
        }
    } else {
        studentId.textContent = "Please enter a number between 0 and 100.";
        document.body.style.backgroundColor = "red";
    }
}

// function to change bg color from random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNumber;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    const imageOptions = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add more image file names as needed

    for (let i = 0; i < imageOptions.length; i++) {
        const option = document.createElement("option");
        option.value = imageOptions[i];
        option.text = imageOptions[i];
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Add initial list of image options when the page loads
addList();
