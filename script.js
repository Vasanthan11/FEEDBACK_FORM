
const jsImage = document.querySelector("#image_js");
const cssImage = document.querySelector("#image_css");
const htmlImage = document.querySelector("#image_html");
const breakImage = document.querySelectorAll(".break");
const homeData = document.querySelector(".home_data");
const homePrefil = document.querySelector(".home_prefil");



jsImage.addEventListener("click", function () {
    document.documentElement.style.setProperty("--first-color", "#F0DB4F");
    breakImage.forEach(function (breakImage) {
        breakImage.src = "images/logobreakyellow.png";
    });
    homeData.style.backgroundImage = "url(images/bgfullyellow.png)";
    document.documentElement.style.setProperty('--gradient-color', 'linear-gradient(180deg, hsla(180, 48%, 72%, 0), #F0DB4F)');
});

cssImage.addEventListener("click", function () {
    document.documentElement.style.setProperty("--first-color", "#2965F1");
    breakImage.forEach(function (breakImage) {
        breakImage.src = "images/logobreakblue.png";
    });
    homeData.style.backgroundImage = "url(images/bgfullblue.png)";
    document.documentElement.style.setProperty('--gradient-color', 'linear-gradient(180deg, hsla(180, 48%, 72%, 0), #2965F1)');
});

htmlImage.addEventListener("click", function () {
    document.documentElement.style.setProperty("--first-color", "#E34F26");
    breakImage.forEach(function (breakImage) {
        breakImage.src = "images/logobreakorange.png";
    });
    homeData.style.backgroundImage = "url(images/bgfullorange.png)";
    document.documentElement.style.setProperty('--gradient-color', 'linear-gradient(180deg, hsla(180, 48%, 72%, 0), #E34F26)');
});

