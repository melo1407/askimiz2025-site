const PASSWORD = "askimiz2025";
let token = null;

function login() {
  if (document.getElementById("pwd").value === PASSWORD) {
    token = true;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadNotes();
  } else alert("Şifre yanlış.");
}

async function uploadImage(file) {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", UPLOAD_PRESET);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
    method: "POST",
    body: form
  });
  return await res.json();
}

document.getElementById("fileInput").addEventListener("change", async e => {
  const res = await uploadImage(e.target.files[0]);
  const img = document.createElement("img");
  img.src = res.secure_url;
  document.getElementById("gallery").prepend(img);
});

function addNote() {
  const txt = document.getElementById("noteText").value;
  if (!txt) return;
  const p = document.createElement("p");
  p.textContent = txt;
  document.getElementById("notes").prepend(p);
  document.getElementById("noteText").value = "";
}

function loadNotes() {
  // Geliştirilebilir: localStorage veya Cloud tabanlı
}