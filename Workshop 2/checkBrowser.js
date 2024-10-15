window.onload = function isFirefox() {
    return /Firefox/.test(navigator.userAgent);
}

if (!isFirefox()) {
    const userWantsToOpenMozilla = window.confirm("It appears you are not using Firefox as your browser. Do you want to open Mozilla's website?");

    if (userWantsToOpenMozilla) {
        window.open('http://www.mozilla.org', '_blank');
    }
}