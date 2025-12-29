// ================================
// MAIN.JS - FINAL VERSION
// ANTI CASE-SENSITIVE GITHUB
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // BACK TO TOP & NAVBAR
    // ================================
    const navbar = document.querySelector(".navbar");
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");

        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ================================
    // PORTFOLIO LOAD (ANTI ERROR)
    // ================================
    const portfolioGrid = document.querySelector(".portfolio-grid");

    function smartImage(src, title) {
        const img = document.createElement("img");
        img.className = "img-fluid w-100";
        img.alt = title;

        img.onerror = () => {
            if (src.endsWith(".jpg")) img.src = src.replace(".jpg", ".JPG");
            else if (src.endsWith(".JPG")) img.src = src.replace(".JPG", ".jpg");
            else if (src.endsWith(".jpeg")) img.src = src.replace(".jpeg", ".JPEG");
            else img.src = "https://via.placeholder.com/400x300?text=No+Image";
        };

        img.src = src;
        return img;
    }

    const data = [
        // FOTO
        ["foto", "img/foto1.jpg"],
        ["foto", "img/foto2.jpg"],
        ["foto", "img/foto3.jpg"],
        ["foto", "img/foto4.jpg"],
        ["foto", "img/foto5.jpg"],
        ["foto", "img/foto6.jpg"],

        // PROJECT
        ["project", "img/project1.jpg"],
        ["project", "img/project2.jpg"],
        ["project", "img/project3.jpg"],
        ["project", "img/project4.jpg"],
        ["project", "img/project5.jpg"],
        ["project", "img/project6.jpg"],

        // SERTIFIKAT
        ["sertifikat", "img/sertifikat1.jpeg"],
        ["sertifikat", "img/sertifikat2.jpg"],
        ["sertifikat", "img/sertifikat3.jpg"],
        ["sertifikat", "img/sertifikat4.jpg"],

        // WEDDING
        ["wedding", "img/wedding1.jpg"],
        ["wedding", "img/wedding2.jpg"],
        ["wedding", "img/wedding3.jpg"],
        ["wedding", "img/wedding4.jpg"],
        ["wedding", "img/wedding5.jpg"],
        ["wedding", "img/wedding6.jpg"],
    ];

    data.forEach(([cat, src], i) => {
        const item = document.createElement("div");
        item.className = `portfolio-item ${cat}`;

        const card = document.createElement("div");
        card.className = "portfolio-card";

        const img = smartImage(src, `Item ${i + 1}`);

        card.appendChild(img);
        item.appendChild(card);
        portfolioGrid.appendChild(item);
    });

    // ================================
    // FILTER BUTTON
    // ================================
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            document.querySelectorAll(".portfolio-item").forEach(item => {
                item.style.display =
                    filter === "all" || item.classList.contains(filter)
                        ? "block"
                        : "none";
            });
        });
    });

});
