const reversibleArray = ["Racecar", "Rotor", "Level", "Madam", "Noon", "Jeep", "Ford"];

// Function to reverse the array
function reverseArray(arr) {
    return arr.reverse();
}

// Function to reverse the array and display the result
function displayReversedArray() {
    const reversedArray = reverseArray([...reversibleArray]); // Use a copy to preserve the original array
    document.getElementById('button-result-1').innerHTML = reversedArray.join(", ");
}



// Function to check if a word is a palindrome
function checkPalindrome(word) {
    const normalizedWord = word.toLowerCase();
    const reversed = normalizedWord.split('').reverse().join('');
    return normalizedWord === reversed;
}

// Function to display non-palindrome words
function displayNonPalindrome() {
    const nonPalindromes = reversibleArray.filter(word => !checkPalindrome(word));
    document.getElementById('button-result-2').innerHTML = nonPalindromes.join(", ");
}

// Unified reset function
function resetContent(elementID) {
    document.getElementById(elementID).innerHTML = '';
}

// Event listeners
document.getElementById('reverse-1').addEventListener('click', displayReversedArray);
document.getElementById('check-array').addEventListener('click', displayNonPalindrome);
document.getElementById('reset-1').addEventListener('click', function () { resetContent('button-result-1'); });
document.getElementById('reset-2').addEventListener('click', function () { resetContent('button-result-2'); });
