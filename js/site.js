// On button push, runs logic to reverse the string
function operationReverse() {

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
function reverseString(normalString) {

    let stringToBeReversed = normalString;
    let reversedString = "";
    for (let index = stringToBeReversed.length - 1; index >= 0; index--) {
        reversedString = reversedString + stringToBeReversed[index];
    }

    return reversedString;
}

// Reveal the reversed string on display
function revealOnDisplay(reversedString) {
    let reveal = document.getElementById("reveal");

    reveal.innerHTML = `
    <div class="border rounded mt-5 opacity p-4">
        <div class="border-bottom border-2 borderLRed">
            <h1 class="darkRed"><strong>Well done!</strong></h1>
        </div>
        <div>
            <h5 class="mt-3">Your string reversed is: ${reversedString}</h5>
        </div>
    </div>
    `;
}

//                   <div class="border rounded mt-5 opacity p-4">
//                      <div class="border-bottom border-2 borderLRed">
//                           <h1 class="darkRed"><strong>Well done!</strong></h1>
//                       </div>
//                       <div>
//                           <h5 class="mt-3">Your string reversed is: </span></h5>
//                       </div>
//                   </div>