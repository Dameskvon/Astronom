const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const mainNav = document.getElementById('mainNav');

// --- DATA: Rasi Bintang (17 item) ---
const constellations = [
    { id: 'orion', name: 'Orion', latin: 'Pemburu', image: 'img/orion.jpg', desc: 'Orion adalah salah satu rasi bintang paling terkenal di seluruh dunia. Mudah dikenali dari Sabuk Orion (tiga bintang sejajar) dan menjadi lokasi kelahiran bintang terbesar, seperti Nebula Orion (M42). Ini adalah rasi bintang yang penting untuk pengamatan musim dingin.' },
    { id: 'ursamajor', name: 'Ursa Major', latin: 'Beruang Besar', image: 'img/ursamajor.jpg', desc: 'Mengandung asterisma Biduk (The Big Dipper) yang merupakan penanda navigasi utama di langit utara. Bintang-bintang di Biduk digunakan untuk menemukan Bintang Utara (Polaris).' },
    { id: 'ursaminor', name: 'Ursa Minor', latin: 'Beruang Kecil', image: 'img/ursaminor.jpg', desc: 'Rasi bintang ini mengandung Bintang Utara (Polaris) pada ujung "ekornya". Polaris hampir selalu berada di atas kutub utara langit, menjadikannya kunci navigasi yang tak ternilai bagi para pelaut dan penjelajah.' },
    { id: 'scorpius', name: 'Scorpius', latin: 'Kalajengking', image: 'img/scorpio.jpg', desc: 'Rasi bintang zodiak yang mencolok, terletak di dekat pusat Bimasakti. Ditandai oleh bintang raksasa merah Antares. Area ini sangat kaya akan nebula dan gugus bintang.' },
    { id: 'cassiopeia', name: 'Cassiopeia', latin: 'Ratu yang Bersemayam', image: 'img/cassiopeia.jpg', desc: 'Terlihat di langit utara, berbentuk huruf "W" atau "M" yang khas. Karena terletak di bidang Bimasakti, rasi ini kaya akan gugus bintang terbuka dan nebula, seperti Nebula Hati dan Jiwa.' },
    { id: 'leo', name: 'Leo', latin: 'Singa', image: 'img/leo.jpg', desc: 'Rasi bintang zodiak yang dominan di musim semi. Ditandai oleh bintang terang Regulus dan Sikat. Di area ini juga terlihat hujan meteor Leonids setiap bulan November.' },
    { id: 'taurus', name: 'Taurus', latin: 'Banteng', image: 'img/taurus.jpg', desc: 'Rasi bintang zodiak yang besar. Mengandung gugus bintang Pleiades (Bintang Tujuh) dan Hyades. Dikenal dengan bintang raksasa merah Aldebaran yang membentuk mata banteng.' },
    { id: 'andromeda', name: 'Andromeda', latin: 'Gadis yang Dirantai', image: 'img/Andromeda.jpg', desc: 'Terkenal karena Galaksi Andromeda (M31), galaksi spiral besar terdekat dengan Bimasakti. M31 dapat dilihat dengan mata telanjang di langit gelap, merupakan objek terjauh yang bisa dilihat manusia.' },
    { id: 'cygnus', name: 'Cygnus', latin: 'Angsa', image: 'img/cygnus.jpg', desc: 'Rasi bintang yang melintasi jalur Bimasakti. Memiliki asterisma Salib Utara dan mengandung bintang Deneb, salah satu bintang paling terang.' },
    { id: 'sagittarius', name: 'Sagittarius', latin: 'Pemanah', image: 'img/sagittarius.jpg', desc: 'Rasi bintang zodiak tempat Pusat Galaksi Bimasakti (Sagitarius A*) berada. Bagian ini sangat padat dengan nebula dan gugus bintang, menjadikannya target utama astrofotografi.' },
    { id: 'canismajor', name: 'Canis Major', latin: 'Anjing Besar', image: 'img/canismajor.jpg', desc: 'Mengandung Sirius, bintang paling terang di langit malam. Terlihat paling baik selama musim dingin di Belahan Bumi Utara, Sirius adalah bintang yang sangat mudah dikenali.' },
    { id: 'gemini', name: 'Gemini', latin: 'Kembar', image: 'img/Gemini.png', desc: 'Rasi bintang zodiak yang ditandai oleh dua bintang terang, Castor dan Pollux. Merupakan sumber hujan meteor Geminids tahunan, salah satu hujan meteor paling aktif.' },
    { id: 'aquarius', name: 'Aquarius', latin: 'Pembawa Air', image: 'img/aquarius.jpg', desc: 'Rasi bintang zodiak besar yang terletak di daerah langit yang kadang disebut "Laut," karena banyak rasi bintang bertema air di sekitarnya. Terlihat jelas di langit musim gugur.' },
    { id: 'pegasus', name: 'Pegasus', latin: 'Kuda Bersayap', image: 'img/pegasus.jpg', desc: 'Terkenal dengan "Persegi Besar Pegasus," formasi bintang yang membantu menemukan rasi bintang lain di sekitarnya, seperti Andromeda. Rasi bintang yang menonjol di musim gugur.' },
];

// --- DATA: Planet Tata Surya (8 item) ---
const planets = [
    { id: 'mercury', name: 'Merkurius', image: 'img/mercury.jpg', desc: 'Planet terdekat dengan Matahari, Merkurius memiliki permukaan kawah yang mirip Bulan. Suhu ekstrem antara siang dan malam hari.', info: [{ label: 'Jenis', value: 'Terestrial' }, { label: 'Diameter', value: '4.880 km' }, { label: 'Suhu Permukaan', value: '-173°C hingga 427°C' }, {label: 'Satelit Alam', value: '0'}] },
    { id: 'venus', name: 'Venus', image: 'img/venus.jpg', desc: 'Planet terpanas di Tata Surya karena efek rumah kaca ekstrem. Diselimuti awan tebal asam sulfat, membuatnya sangat sulit diamati permukaannya.', info: [{ label: 'Jenis', value: 'Terestrial' }, { label: 'Diameter', value: '12.104 km' }, { label: 'Suhu Permukaan', value: '462°C' }, {label: 'Rotasi', value: 'Retrograde (berlawanan arah)'}] },
    { id: 'earth', name: 'Bumi', image: 'img/earth.jpg', desc: 'Satu-satunya planet yang diketahui memiliki kehidupan. 71% permukaannya tertutup air, menjadikannya "Planet Biru".', info: [{ label: 'Jenis', value: 'Terestrial' }, { label: 'Diameter', value: '12.742 km' }, { label: 'Satelit Alam', value: '1 (Bulan)' }, {label: 'Gravitasi', value: '1 G'}] },
    { id: 'mars', name: 'Mars', image: 'img/mars.jpg', desc: 'Dikenal sebagai "Planet Merah" karena kandungan besi oksida. Memiliki gunung terbesar (Olympus Mons) dan potensi air es.', info: [{ label: 'Jenis', value: 'Terestrial' }, { label: 'Diameter', value: '6.779 km' }, { label: 'Satelit Alam', value: '2 (Phobos & Deimos)' }, {label: 'Atmosfer Utama', value: 'Karbon Dioksida'}] },
    { id: 'jupiter', name: 'Jupiter', image: 'img/jupyter.jpg', desc: 'Planet terbesar di Tata Surya. Terkenal dengan Bintik Merah Besar (Great Red Spot), badai raksasa yang sudah berlangsung ratusan tahun.', info: [{ label: 'Jenis', value: 'Raksasa Gas' }, { label: 'Diameter', value: '142.984 km' }, { label: 'Satelit Alam', value: '95+ (termasuk Io, Europa, Ganymede)' }, {label: 'Hari Terpendek', value: '9,9 Jam'}] },
    { id: 'saturn', name: 'Saturnus', image: 'img/saturn.jpg', desc: 'Dikenal karena sistem cincinnya yang megah, sebagian besar terbuat dari es. Memiliki bulan terbesar, Titan, yang memiliki atmosfer sendiri.', info: [{ label: 'Jenis', value: 'Raksasa Gas' }, { label: 'Diameter', value: '120.536 km' }, { label: 'Cincin', value: '30+ cincin utama' }, {label: 'Satelit Alam', value: '146+ (termasuk Titan)'}] },
    { id: 'uranus', name: 'Uranus', image: 'img/uranus.jpg', desc: 'Raksasa Es yang berputar miring hampir 90 derajat. Atmosfer kaya metana yang memberikan warna kebiruan.', info: [{ label: 'Jenis', value: 'Raksasa Es' }, { label: 'Diameter', value: '51.118 km' }, { label: 'Kemiringan Sumbu', value: '97,8°' }, {label: 'Warna Khas', value: 'Biru Kehijauan'}] },
    { id: 'neptune', name: 'Neptunus', image: 'img/neptune.jpg', desc: 'Planet terjauh dari Matahari, Neptunus dikenal karena angin badai tercepat di Tata Surya, mencapai kecepatan hingga 2.100 km/jam.', info: [{ label: 'Jenis', value: 'Raksasa Es' }, { label: 'Diameter', value: '49.244 km' }, { label: 'Badai Terkenal', value: 'Great Dark Spot' }, {label: 'Satelit Alam Terbesar', value: 'Triton'}] }
];


// --- DATA: Fakta Galaksi ---
const galaxyFacts = [
    { icon: 'fas fa-star', title: 'Jumlah Bintang', value: '100-400 Miliar', desc: 'Galaksi Bimasakti diperkirakan memiliki antara 100 hingga 400 miliar bintang.' },
    { icon: 'fas fa-ruler-horizontal', title: 'Diameter', value: '100.000 Tahun Cahaya', desc: 'Membutuhkan waktu 100.000 tahun cahaya untuk melintasi Bimasakti dari ujung ke ujung.' },
    { icon: 'fas fa-compact-disc', title: 'Pusat Galaksi', value: 'Sagitarius A*', desc: 'Di pusat Bimasakti terdapat lubang hitam supermasif yang disebut Sagitarius A*.' },
];

// --- DATA: Fakta Tata Surya ---
const solarSystemFacts = [
    { icon: 'fas fa-sun', title: '99.8% Massa', value: 'Matahari', desc: 'Matahari menyumbang 99.8% dari total massa Tata Surya.' },
    { icon: 'fas fa-cloud', title: 'Raksasa Gas', value: '4 Planet', desc: 'Jupiter, Saturnus, Uranus, dan Neptunus adalah raksasa gas/es yang membentuk mayoritas volume Tata Surya.' },
    { icon: 'fas fa-ring', title: 'Cincin', value: 'Semua Raksasa', desc: 'Semua planet raksasa (Jupiter, Saturnus, Uranus, Neptunus) memiliki sistem cincin, bukan hanya Saturnus.' },
];

// --- DATA: Galeri Foto (Simulasi) ---
const galleryPhotos = [
    { id: 1, title: 'Galaksi Andromeda (M31)', photographer: 'Vouz', target: 'M31', image: 'img/galaxy.jpg', details: 'Tangkapan ini menunjukkan inti Galaksi Andromeda dan lengan spiral luarnya. Diambil dengan teleskop 10 inci dengan total waktu eksposur 15 jam.' },
    { id: 2, title: 'Nebula Orion (M42)', photographer: 'Nighty', target: 'M42', image: 'img/nebulaorion.jpg', details: 'Foto detail dari daerah pembentukan bintang yang menakjubkan ini, memperlihatkan gas hidrogen yang menyala merah dan biru. Terlihat jelas dari Sabuk Orion.' },
    { id: 3, title: 'Gugus Pleiades (M45)', photographer: 'Astro', target: 'M45', image: 'img/pleiades.jpg', details: 'Gugus bintang terbuka yang terkenal di rasi Taurus, dikelilingi oleh nebula refleksi biru yang indah. Juga dikenal sebagai "Bintang Tujuh".' },
    { id: 4, title: 'Nebula Cincin (M57)', photographer: 'Peter', target: 'M57', image: 'img/ring.jpg', details: 'Sisa-sisa bintang yang mati, menampilkan cincin gas yang mengembang di rasi Lyra. Diambil pada malam dengan langit yang sangat gelap menggunakan kamera CCD.' },
    { id: 5, title: 'Galaksi Triangulum (M33)', photographer: 'Kosmos Hunter', target: 'M33', image: 'img/triangulum.jpg', details: 'Galaksi spiral yang lebih kecil di gugus lokal, terlihat secara face-on di rasi Triangulum. Salah satu target paling sulit bagi astrofotografer pemula.' },
];

// --- Fungsi Rendering ---

function renderConstellationCards() {
    const container = document.getElementById('constellation-container');
    let html = '';

    constellations.forEach(c => {
        html += `<div class="card constellation-card shadow-lg" data-bs-toggle="modal" data-bs-target="#constellationModal" data-constellation-id="${c.id}">
            <div class="position-relative overflow-hidden" style="height: 220px;">
                <img src="${c.image}" class="card-img-top constellation-img" alt="${c.name} Constellation">
            </div>
            <div class="card-body p-3 text-center">
                <h5 class="card-title fw-bold text-primary mb-0">${c.name}</h5>
                <p class="text-muted small mb-2">(${c.latin})</p>
                <button class="btn btn-sm btn-outline-primary mt-1">Fakta</button>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// FUNGSI UNTUK FAKTA GALAKSI/TATA SURYA
function renderFactHighlights(containerId, facts, iconColorClass) {
    const container = document.getElementById(containerId);
    let html = '<div class="row mt-4">';
    facts.forEach(f => {
        html += `<div class="col-lg-4 col-md-6 mb-4 fade-in">
            <div class="card fact-highlight h-100 p-4 shadow">
                <div class="d-flex align-items-center mb-3">
                    <span class="fa-stack fa-2x text-${iconColorClass} flex-shrink-0 me-3">
                        <i class="fas fa-circle fa-stack-2x opacity-25"></i>
                        <i class="${f.icon} fa-stack-1x"></i>
                    </span>
                    <div>
                        <h5 class="fw-bold mb-0">${f.title}</h5>
                        <p class="lead text-primary fw-bolder mb-0">${f.value}</p>
                    </div>
                </div>
                <p class="small text-muted mb-0">${f.desc}</p>
            </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML += html;
}

function renderPlanetCards() {
    const container = document.getElementById('planet-container');
    let html = '';
    
    planets.forEach(p => {
        html += `<div class="col-lg-3 col-md-6 mb-4 fade-in">
            <div class="card shadow-lg h-100 planet-card" data-bs-toggle="modal" data-bs-target="#planetDetailModal" data-planet-id="${p.id}">
                <img src="${p.image}" class="card-img-top" alt="${p.name}">
                <div class="card-body">
                    <h4 class="card-title fw-bold text-warning">${p.name}</h4>
                    <p class="card-text">${p.desc.substring(0, 70)}...</p>
                </div>
                <div class="card-footer border-0 bg-transparent">
                    <button class="btn btn-outline-warning btn-sm">Detail Planet</button>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function renderGalleryGrid() {
    const container = document.getElementById('gallery-grid');
    let html = '';
    
    galleryPhotos.forEach(photo => {
        html += `<div class="col-lg-4 col-md-6 mb-4 fade-in">
            <div class="card gallery-item shadow-lg" data-bs-toggle="modal" data-bs-target="#galleryModal" data-photo-id="${photo.id}">
                <img src="${photo.image}" class="card-img-top" alt="${photo.title}">
                <div class="card-body p-3">
                    <h5 class="card-title mb-0">${photo.title}</h5>
                    <p class="text-muted small mb-0">Oleh: ${photo.photographer}</p>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// --- Setup Modals dan Fungsi Dasar ---

function handleNavbarScroll() {
    const scrollDistance = 100; 
    if (window.scrollY > scrollDistance) {
        mainNav.classList.add('navbar-scrolled');
    } else {
        mainNav.classList.remove('navbar-scrolled');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    handleNavbarScroll();
}

function toggleTheme() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    handleNavbarScroll();
}

function setupConstellationModal() {
    const modal = document.getElementById('constellationModal');
    modal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const constId = button.getAttribute('data-constellation-id');
        const constel = constellations.find(c => c.id === constId);
        const modalTitle = document.getElementById('constellationModalLabel');
        const modalBody = document.getElementById('constellation-modal-body');

        if (constel) {
            modalTitle.textContent = `Facts: ${constel.name} (${constel.latin})`;
            modalBody.innerHTML = `
                <div class="text-center mb-3">
                    <img src="${constel.image}" class="img-fluid rounded shadow-sm mb-3" alt="${constel.name} Constellation" style="max-height: 200px; object-fit: cover;">
                </div>
                <p class="lead text-center">${constel.desc}</p>
            `;
        }
    });
}


function setupPlanetModal() {
    const planetDetailModal = document.getElementById('planetDetailModal');
    planetDetailModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const planetId = button.getAttribute('data-planet-id');
        const planet = planets.find(p => p.id === planetId);
        const modalTitle = planetDetailModal.querySelector('.modal-title');
        const modalBody = document.getElementById('modal-content-area');
        if (planet) {
            modalTitle.textContent = `Detail Planet: ${planet.name}`;
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-5">
                        <img src="${planet.image}" class="img-fluid rounded shadow-sm mb-3" alt="${planet.name}">
                    </div>
                    <div class="col-md-7">
                        <p class="lead">${planet.desc}</p>
                        <hr class="text-warning">
                        <ul class="list-unstyled">
                            ${planet.info.map(item => `
                                <li><strong>${item.label}:</strong> ${item.value}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
    });
}

function setupGalleryModal() {
    const galleryModal = document.getElementById('galleryModal');
    galleryModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const photoId = parseInt(button.getAttribute('data-photo-id'));
        const photo = galleryPhotos.find(p => p.id === photoId);
        const modalTitle = document.getElementById('galleryModalLabel');
        const modalBody = document.getElementById('gallery-modal-body');

        if (photo) {
            modalTitle.textContent = `Foto: ${photo.title}`;
            modalBody.innerHTML = `
                <img src="${photo.image}" class="img-fluid rounded shadow-lg mb-4" alt="${photo.title}" style="max-height: 80vh; object-fit: contain;">
                <h4 class="text-primary">${photo.title}</h4>
                <p class="lead">Oleh: ${photo.photographer} | Target: ${photo.target}</p>
                <p>${photo.details}</p>
            `;
        }
    });
}

function createStars(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = `${Math.random() * 3 + 1}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
    }
}

function handleScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
    });
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
}

function handleContactSubmit(event) {
    event.preventDefault(); 
    const submitMessage = document.getElementById('submitMessage');
    const contactForm = document.getElementById('contactForm');
    
    // Tampilkan pesan sukses (simulasi)
    submitMessage.classList.remove('d-none');
    
    // Reset formulir
    contactForm.reset();
    
    // Sembunyikan pesan setelah 5 detik
    setTimeout(() => {
        submitMessage.classList.add('d-none');
    }, 5000);
}

// --- LOGIKA SCROLL BUTTON BARU ---
function setupScrollButtons() {
    const container = document.getElementById('constellation-container');
    const leftBtn = document.getElementById('scrollLeftBtn');
    const rightBtn = document.getElementById('scrollRightBtn');
    
    // Jarak scroll setiap kali klik (lebar kartu 350px + margin 25px + sedikit buffer)
    const scrollAmount = 380; 

    if (leftBtn && rightBtn && container) {
        
        // Klik Kiri
        leftBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Klik Kanan
        rightBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Sembunyikan tombol kiri jika di awal, tombol kanan jika di akhir
        const handleScrollButtonsVisibility = () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            
            // Tombol Kiri
            if (container.scrollLeft <= 10) {
                leftBtn.style.opacity = '0';
                leftBtn.style.pointerEvents = 'none'; // Non-aktifkan klik
            } else {
                leftBtn.style.opacity = '0.8';
                leftBtn.style.pointerEvents = 'auto';
            }

            // Tombol Kanan
            // Toleransi 10px untuk browser yang perhitungan scroll width-nya pecahan
            if (container.scrollLeft >= maxScrollLeft - 10) {
                rightBtn.style.opacity = '0';
                rightBtn.style.pointerEvents = 'none';
            } else {
                rightBtn.style.opacity = '0.8';
                rightBtn.style.pointerEvents = 'auto';
            }
        };

        // Pasang listener saat user scroll manual atau resize window
        container.addEventListener('scroll', handleScrollButtonsVisibility);
        window.addEventListener('resize', handleScrollButtonsVisibility);

        // Jalankan sekali saat awal
        handleScrollButtonsVisibility();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadTheme(); 
    
    // --- Rendering Konten Utama ---
    renderConstellationCards();
    renderPlanetCards();
    renderGalleryGrid();
    
    // --- Rendering Fakta BARU ---
    // Fakta Galaksi menggunakan warna primary (biru)
    renderFactHighlights('galaxy-facts-container', galaxyFacts, 'primary'); 
    // Fakta Tata Surya menggunakan warna warning (kuning)
    renderFactHighlights('solar-system-facts-container', solarSystemFacts, 'warning'); 
    // ----------------------------
    
    // --- Setup Modals ---
    setupConstellationModal(); 
    setupPlanetModal();
    setupGalleryModal(); 
    
    // --- Setup Scroll Button (BARU) ---
    setupScrollButtons();
    // ----------------------------------

    createStars('animated-stars', 100); 
    handleScrollAnimation();
    themeToggle.addEventListener('click', toggleTheme);
    
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactSubmit); 
    
    window.addEventListener('scroll', handleNavbarScroll);
});