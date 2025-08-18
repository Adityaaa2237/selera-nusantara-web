const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector("ul.navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close");

// Klik gambar → tampilkan di modal
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalContent.innerHTML = `<img src="${img.src}" class="modal-content">`;
    });
});

// Klik video → tampilkan di modal
document.querySelectorAll(".gallery video").forEach(video => {
    video.addEventListener("click", () => {
        modal.style.display = "flex";
        modalContent.innerHTML = `<video src="${video.src}" controls autoplay class="modal-content"></video>`;
    });
});

// Fungsi menutup modal
function closeModal() {
    modal.style.display = "none";
    modalContent.innerHTML = ""; // hapus isi modal → otomatis hentikan video
    }

// Tutup modal dengan tombol X
closeBtn.onclick = closeModal;

// Tutup modal dengan klik luar area
window.onclick = e => {
    if (e.target === modal) {
    closeModal();
    }
};