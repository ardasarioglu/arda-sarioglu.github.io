// 1. Tema Değiştirme [cite: 57, 88]
const temaButonu = document.getElementById("temaButonu");
temaButonu.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    // Navbar rengini de değiştirebilirsin
});

// 2. Form İşleme ve Özet Üretme [cite: 68, 69, 70]
const form = document.getElementById("etkinlikFormu");
const sonucAlani = document.getElementById("sonucAlani");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle [cite: 54]

    // Değerleri alma [cite: 25]
    const adSoyad = document.getElementById("adSoyad").value;
    const eposta = document.getElementById("eposta").value;
    const katilim = document.getElementById("katilimTuru").value;

    // Eksik alan kontrolü [cite: 55, 90]
    if (!adSoyad || !eposta || !katilim) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
    }

    // Başvuru Özeti Oluşturma [cite: 56, 89]
    sonucAlani.innerHTML = `
        <div class="alert alert-info border-0 shadow-sm">
            <h4 class="alert-heading">Başvuru Özeti</h4>
            <hr>
            <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
            <p><strong>E-posta:</strong> ${eposta}</p>
            <p><strong>Katılım Türü:</strong> ${katilim}</p>
            <p class="mb-0 text-muted small">Başvurunuz başarıyla kaydedildi.</p>
        </div>
    `;
});
