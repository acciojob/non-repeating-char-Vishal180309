document.getElementById('find-button').addEventListener('click', function() {
    let inputString = document.getElementById('input-string').value;
    let result = firstNonRepeatedChar(inputString);

    if (result === null) {
        document.getElementById('result').innerHTML = 'No non-repeating character found';
    } else {
        document.getElementById('result').innerHTML = 'First non-repeating character: ' + result;
    }
});

function firstNonRepeatedChar(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}