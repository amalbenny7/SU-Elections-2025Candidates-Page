document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            // Toggle active class for the clicked beige accordion
            this.classList.toggle("active");

            // Toggle the associated panel
            const panel = this.nextElementSibling;
            if (panel.classList.contains("show")) {
                panel.classList.remove("show");
            } else {
                panel.classList.add("show");
            }
        });
    });
});
