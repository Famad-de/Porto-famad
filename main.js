// Main JavaScript File

document.addEventListener('DOMContentLoaded', function () {
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        const backToTopButton = document.getElementById('backToTop');
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.getElementById('backToTop');
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== PORTFOLIO FILTER =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.querySelector('.portfolio-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.style.display =
                    filterValue === 'all' || item.classList.contains(filterValue)
                        ? 'block'
                        : 'none';
            });
        });
    });

    // ===== LOAD PORTFOLIO ITEMS (SESUAI FILE ASLI) =====
    if (portfolioGrid) {
        const portfolioData = [
            // FOTO
            { category: 'foto', src: 'img/foto1.jpg', title: 'Foto 1' },
            { category: 'foto', src: 'img/foto2.JPG', title: 'Foto 2' },
            { category: 'foto', src: 'img/foto3.JPG', title: 'Foto 3' },
            { category: 'foto', src: 'img/foto4.jpg', title: 'Foto 4' },
            { category: 'foto', src: 'img/foto5.jpg', title: 'Foto 5' },
            { category: 'foto', src: 'img/foto6.jpg', title: 'Foto 6' },

            // PROJECT
            { category: 'project', src: 'img/project1.JPG', title: 'Project 1' },
            { category: 'project', src: 'img/project2.JPG', title: 'Project 2' },
            { category: 'project', src: 'img/project3.jpg', title: 'Project 3' },
            { category: 'project', src: 'img/project4.jpg', title: 'Project 4' },
            { category: 'project', src: 'img/project5.jpg', title: 'Project 5' },
            { category: 'project', src: 'img/project6.jpg', title: 'Project 6' },

            // SERTIFIKAT
            { category: 'sertifikat', src: 'img/sertifikat1.jpeg', title: 'Sertifikat 1' },
            { category: 'sertifikat', src: 'img/sertifikat2.jpg', title: 'Sertifikat 2' },
            { category: 'sertifikat', src: 'img/sertifikat3.jpg', title: 'Sertifikat 3' },
            { category: 'sertifikat', src: 'img/sertifikat4.jpg', title: 'Sertifikat 4' },

            // WEDDING
            { category: 'wedding', src: 'img/wedding1.JPG', title: 'Wedding 1' },
            { category: 'wedding', src: 'img/wedding2.JPG', title: 'Wedding 2' },
            { category: 'wedding', src: 'img/wedding3.JPG', title: 'Wedding 3' },
            { category: 'wedding', src: 'img/wedding4.JPG', title: 'Wedding 4' },
            { category: 'wedding', src: 'img/wedding5.JPG', title: 'Wedding 5' },
            { category: 'wedding', src: 'img/wedding6.JPG', title: 'Wedding 6' },
        ];

        portfolioData.forEach(item => {
            const el = document.createElement('div');
            el.className = `portfolio-item ${item.category}`;
            el.innerHTML = `
                <div class="portfolio-card">
                    <img src="${item.src}" class="img-fluid w-100" alt="${item.title}">
                    <div class="portfolio-overlay">
                        <h5>${item.title}</h5>
                    </div>
                </div>
            `;

            el.addEventListener('click', () => {
                const modalHtml = `
                    <div class="modal fade" id="imageModal">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${item.title}</h5>
                                    <button class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <img src="${item.src}" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>`;
                document.body.insertAdjacentHTML('beforeend', modalHtml);
                const modal = new bootstrap.Modal(document.getElementById('imageModal'));
                modal.show();
                document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
                    this.remove();
                });
            });

            portfolioGrid.appendChild(el);
        });
    }
});
