function searchAndDisplay() {
    var inputText = document.getElementById("inputText").value;
    var searchText = document.getElementById("searchText").value;
    var searchIndex = document.getElementById("searchIndex").value;

    var firstOccurrenceIndex = inputText.indexOf(searchText);
    var lastOccurrenceIndex = inputText.lastIndexOf(searchText);
    var firstOccurrenceFromIndex = inputText.indexOf(searchText, searchIndex);
    var lastOccurrenceFromIndex = inputText.lastIndexOf(searchText, searchIndex);

    document.getElementById("firstOccurrenceIndex").innerText = firstOccurrenceIndex;
    document.getElementById("lastOccurrenceIndex").innerText = lastOccurrenceIndex;
    document.getElementById("firstOccurrenceFromIndex").innerText = firstOccurrenceFromIndex;
    document.getElementById("lastOccurrenceFromIndex").innerText = lastOccurrenceFromIndex;
}