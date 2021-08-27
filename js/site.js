// On button push, runs logic to reverse the string
function operationReverse() {

    // Makes reveal section invisible when this program starts
    document.getElementById("reveal").classList.add("invisible");

    // Runs the functions needed to perform the logic for the program
    let userString = getString();
    let reversedString = reverseString(userString);

    revealOnDisplay(reversedString);




}

// Get the string from the input and return the string
function getString() {

    let userString = document.getElementById("userString").value;
    return userString;
}

// Reverse the string and return the reversed string
function reverseString(userString) {

    // Creates a variable with type array
    let reversedString = [];

    // Iterates backwards through the array "stringToBeReversed" and concatenates it with reversedString
    for (let index = userString.length - 1; index >= 0; index--) {
        reversedString += userString[index];
    }

    return reversedString;
}

// Reveal the reversed string on display
function revealOnDisplay(reversedString) {
    
    // Adds a string to a <p> tag in the ID #reveal
    let message = document.getElementById("msg");
    message.innerHTML = `Your string reversed is: ${reversedString}`;

    // Removes the "invisible" class and reveals the content in ID #reveal
    document.getElementById("reveal").classList.remove("invisible");
}

// Clears content created by revealOnDisplay() and empties the user input box
function clearContent(){

    let userString = document.getElementById("userString");
    userString.value = "";

    document.getElementById("reveal").classList.add("invisible");
}

