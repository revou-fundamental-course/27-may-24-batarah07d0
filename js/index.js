function replaceName() {
  let name = prompt("Please Enter Your Name!", "");
  if (!name) {
    return;
  } else {
    document.getElementById("name").innerHTML = name + ",";
  }
}

// replaceName();

// Auto Slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("img-slides");

  if (slides.length === 0) {
    console.error("No slides found with the class 'img-slides'.");
    return;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(() => plusSlides(1), 5000);

// Form Validation
function formValidation() {
  let name = document.forms["message-form"]["name-input"].value;
  let ttl = document.forms["message-form"]["tgl-lahir"].value;
  let jenisKelamin = document.forms["message-form"]["jenis-kelamin"].value;
  let pesan = document.forms["message-form"]["pesan"].value;

  if (!name) {
    alert("Nama harus diisi.");
    return false;
  }

  if (!ttl) {
    alert("Tanggal Lahir harus diisi.");
    return false;
  }

  if (!jenisKelamin) {
    alert("Jenis Kelamin harus dipilih.");
    return false;
  }

  if (!pesan) {
    alert("Pesan harus diisi.");
    return false;
  }

  setSenderUI(name, ttl, jenisKelamin, pesan);
  return true;
}

function setSenderUI(name, ttl, jenisKelamin, pesan) {
  document.getElementById("sender-name").innerHTML = name;
  document.getElementById("sender-bd").innerHTML = ttl;
  document.getElementById("sender-gender").innerHTML = jenisKelamin;
  document.getElementById("sender-message").innerHTML = pesan;
}
