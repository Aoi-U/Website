const observer = new IntersectionObserver(els => {
    els.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('show');
        } else {
            el.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const menu = document.getElementsByClassName("menu-container")[0];
let shown = true;

menu.addEventListener("click", function() {
    let bar1 = document.getElementById("menu-bar1");
    let bar3 = document.getElementById("menu-bar3");
    let bar2 = document.getElementById("menu-bar2");

    if (shown) {
        bar1.classList.remove("bar1-change-back");
        bar2.classList.remove("bar2-change-back");
        bar3.classList.remove("bar3-change-back");
        bar1.classList.add("bar1-change");
        bar2.classList.add("bar2-change");
        bar3.classList.add("bar3-change");
    } else {
        bar1.classList.add("bar1-change-back");
        bar2.classList.add("bar2-change-back");
        bar3.classList.add("bar3-change-back");
        bar1.classList.remove("bar1-change");
        bar2.classList.remove("bar2-change");
        bar3.classList.remove("bar3-change");
    }
    shown = !shown;

    let navBar = document.getElementsByClassName("navigation-container")[0];
    navBar.classList.toggle("navigation-container-show");
});

