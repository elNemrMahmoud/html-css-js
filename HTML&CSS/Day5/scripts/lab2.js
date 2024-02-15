    // Function to add a new browser option
    function addBrowser() {
        var browserNameInput = document.getElementById('browserName');
        var browserListSelect = document.getElementById('browserList');
        var newBrowserName = browserNameInput.value.trim();
        if (newBrowserName !== "") {
            var option = document.createElement("option");
            option.value = newBrowserName;
            option.text = newBrowserName;
            browserListSelect.add(option);
            browserNameInput.value = "";
        }
    }


    function deleteBrowser() {
        var browserListSelect = document.getElementById('browserList');

        if (browserListSelect.selectedIndex !== -1) {
            browserListSelect.remove(browserListSelect.selectedIndex);
        }
    }

    
    window.onload = function () {
        var commonBrowsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
        var browserListSelect = document.getElementById('browserList');
        commonBrowsers.forEach(function (browser) {
            var option = document.createElement("option");
            option.value = browser;
            option.text = browser;
            browserListSelect.add(option);
        });
    };