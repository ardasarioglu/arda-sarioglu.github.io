// hafta6_1.js

/**
 * Ortalama notuna göre harf notu döndürür.
 * @param {number} ortalama
 * @returns {string}
 */
function harfNotuHesapla(ortalama) {
  if (ortalama >= 90) return "AA";
  if (ortalama >= 85) return "BA";
  if (ortalama >= 80) return "BB";
  if (ortalama >= 75) return "CB";
  if (ortalama >= 70) return "CC";
  if (ortalama >= 65) return "DC";
  if (ortalama >= 60) return "DD";
  if (ortalama >= 50) return "FD";
  return "FF";
}

/**
 * Formdaki değerleri okur, hesaplar ve sonucu ekrana yazar.
 */
function hesapla() {
  const adSoyad = document.getElementById("adSoyad").value.trim();
  const vizeStr = document.getElementById("vize").value.trim();
  const finalStr = document.getElementById("final").value.trim();

  // --- Doğrulama ---
  if (!adSoyad) {
    alert("Lütfen Ad Soyad alanını doldurun.");
    return;
  }

  const vize = parseFloat(vizeStr);
  const final = parseFloat(finalStr);

  if (isNaN(vize) || vize < 0 || vize > 100) {
    alert("Lütfen geçerli bir vize notu girin (0-100).");
    return;
  }

  if (isNaN(final) || final < 0 || final > 100) {
    alert("Lütfen geçerli bir final notu girin (0-100).");
    return;
  }

  // --- Hesaplamalar ---
  const ortalama = vize * 0.40 + final * 0.60;
  const harfNotu = harfNotuHesapla(ortalama);
  const durum = ortalama >= 50 ? "Geçti" : "Kaldı";
  const durumClass = ortalama >= 50 ? "gecti" : "kaldi";

  // --- Sonuç Gösterimi ---
  document.getElementById("sonucAd").textContent = adSoyad;

  document.getElementById("sonucOrtalama").innerHTML =
    "Ortalama: <span>" + ortalama.toFixed(2) + "</span>";

  document.getElementById("sonucHarf").innerHTML =
    "Harf Notu: <span>" + harfNotu + "</span>";

  document.getElementById("sonucDurum").innerHTML =
    'Durum: <span class="' + durumClass + '">' + durum + "</span>";

  const sonucKutusu = document.getElementById("sonucKutusu");
  sonucKutusu.classList.add("goster");
}
