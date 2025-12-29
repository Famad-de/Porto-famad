document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR & BACK TO TOP
    const navbar = document.querySelector(".navbar");
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // SMART IMAGE (ANTI .jpg / .JPG)
    function smartImage(src) {
        const img = document.createElement("img");
        img.className = "img-fluid w-100";
        img.loading = "lazy";

        img.onerror = () => {
            if (src.endsWith(".jpg")) img.src = src.replace(".jpg", ".JPG");
            else if (src.endsWith(".JPG")) img.src = src.replace(".JPG", ".jpg");
            else if (src.endsWith(".jpeg")) img.src = src.replace(".jpeg", ".JPEG");
        };

        img.src = src;
        return img;
    }

    // DATA SESUAI FILE KAMU
    const data = [
        ["foto","img/foto1.jpg"],
        ["foto","img/foto2.JPG"],
        ["foto","img/foto3.JPG"],
        ["foto","img/foto4.jpg"],
        ["foto","img/foto5.jpg"],
        ["foto","img/foto6.jpg"],

        ["project","img/project1.JPG"],
        ["project","img/project2.JPG"],
        ["project","img/project3.JPG"],
        ["project","img/project4.JPG"],
        ["project","img/project5.JPG"],
        ["project","img/project6.JPG"],

        ["sertifikat","img/sertifikat1.jpeg"],
        ["sertifikat","img/sertifikat2.jpg"],
        ["sertifikat","img/sertifikat3.jpg"],
        ["sertifikat","img/sertifikat4.jpg"],

        ["wedding","img/wedding1.JPG"],
        ["wedding","img/wedding2.JPG"],
        ["wedding","img/wedding3.JPG"],
        ["wedding","img/wedding4.JPG"],
        ["wedding","img/wedding5.JPG"],
        ["wedding","img/wedding6.JPG"]
    ];

    const grid = document.querySelector(".portfolio-grid");
    grid.innerHTML = "";

    data.forEach(([cat, src]) => {
        const item = document.createElement("div");
        item.className = `portfolio-item ${cat}`;

        const card = document.createElement("div");
        card.className = "portfolio-card";

        card.appendChild(smartImage(src));
        item.appendChild(card);
        grid.appendChild(item);
    });

    // FILTER
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn")
                .forEach(b => b.classList.remove("active"));

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
