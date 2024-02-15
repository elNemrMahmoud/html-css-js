// cookieFunctions.js

// Function to get the cookie value based on cookie name
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

// Function to set a cookie based on cookie name, value, and expiration date
function setCookie(cookieName, cookieValue, expiryDate) {
    const expires = "expires=" + expiryDate.toUTCString();
    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
}

// Function to delete a cookie based on cookie name
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Function to get a list of all stored cookies
function allCookieList() {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    const cookies = {};
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        const index = cookie.indexOf("=");
        const name = cookie.substring(0, index);
        const value = cookie.substring(index + 1);
        cookies[name] = value;
    }

    return cookies;
}

// Function to check whether a cookie exists or not
function hasCookie(cookieName) {
    return document.cookie.includes(`${cookieName}=`);
}
