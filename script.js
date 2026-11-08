/* --------------------------------
   BOWLING INDUSTRIES
   Main JavaScript
-------------------------------- */


// Automatically update the copyright year

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Scroll reveal animations

const revealElements = document.querySelectorAll(".reveal");


// Only activate hidden reveal styles when JavaScript is available

if ("IntersectionObserver" in window) {

    document.documentElement.classList.add("js-ready");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    // Fallback for browsers without IntersectionObserver

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}