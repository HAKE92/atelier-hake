const burger = document.querySelector(".burger");
const menu = document.querySelector("#menu");

if (burger && menu) {
    burger.addEventListener("click", function () {
        const ouvert = menu.classList.toggle("ouvert");
        burger.setAttribute("aria-expanded", ouvert);
    });

    const liens = menu.querySelectorAll("a");

    liens.forEach(function (lien) {
        lien.addEventListener("click", function () {
            menu.classList.remove("ouvert");
            burger.setAttribute("aria-expanded", "false");
        });
    });
}