function splitAndDisplay() {

    var inputSentence = document.getElementById("inputSentence").value;
    var splitCharacter = document.getElementById("splitCharacter").value;

    var wordsArray = inputSentence.split(splitCharacter);
    var resultString = wordsArray.join('\n');

    document.getElementById("resultTextArea").value = resultString;

    var firstTenCharacters = inputSentence.substring(0, 10);
    document.getElementById("firstTenCharacters").innerText = firstTenCharacters;
}