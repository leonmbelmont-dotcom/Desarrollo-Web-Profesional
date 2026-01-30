// NAVBAR RESPONSIVE
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

const btnExplore = document.getElementById("ctaBtn");
const btnContact = document.getElementById("contactBtn");
const email = "leonmbelmont@gmail.com";

if (btnExplore) {
    btnExplore.addEventListener("click", () => {
        document.querySelector(".services").scrollIntoView({ behavior: "smooth" });
        alert("Gracias por visitar mi proyecto 🚀");
    });
}

if (btnContact) {
    btnContact.addEventListener("click", () => {
        showContactModal();
    });
}

function showContactModal() {
    const modal = document.createElement("div");
    modal.className = "contact-modal";
    modal.innerHTML = `
        <div class="modal-content">
            <h3>¿Cómo quieres contactarme?</h3>
            <button class="modal-btn gmail-btn" onclick="openGmail()">📧 Gmail</button>
            <button class="modal-btn outlook-btn" onclick="openOutlook()">💼 Outlook</button>
            <button class="modal-btn mailto-btn" onclick="openMailto()">📮 Cliente de Correo</button>
            <button class="modal-btn close-btn" onclick="closeModal()">Cancelar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector(".contact-modal");
    if (modal) modal.remove();
}

function openGmail() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    closeModal();
}

function openOutlook() {
    window.open(`https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`, "_blank");
    closeModal();
}

function openMailto() {
    window.location.href = `mailto:${email}`;
    closeModal();
}

// Cerrar modal al presionar Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// AVATAR / LOGO MODAL
const logoImg = document.querySelector('.logo-img');
const userName = 'Leonxsoldier';
const userEmail = 'leonmbelmont@gmail.com';

function showAvatarModal() {
    // evitar duplicados
    if (document.querySelector('.avatar-modal')) return;
    const modal = document.createElement('div');
    modal.className = 'avatar-modal';
    modal.innerHTML = `
        <div class="avatar-content">
            <img src="${logoImg ? logoImg.src : 'images/profile.jpg'}" class="avatar-img-large" alt="${userName}">
            <div class="avatar-name">${userName}</div>
            <div class="avatar-email">${userEmail}</div>
            <button class="avatar-close" onclick="closeAvatarModal()">Cerrar</button>
        </div>
    `;
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAvatarModal();
    });
    document.body.appendChild(modal);
}

function closeAvatarModal() {
    const m = document.querySelector('.avatar-modal');
    if (m) m.remove();
}

if (logoImg) {
    logoImg.style.cursor = 'pointer';
    logoImg.addEventListener('click', (e) => {
        e.preventDefault();
        showAvatarModal();
    });
}

// Cerrar avatar modal con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAvatarModal();
});