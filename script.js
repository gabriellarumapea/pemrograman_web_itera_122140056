document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit otomatis

    // Ambil nilai input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;

    // Validasi Nama
    if (name.length <= 3) {
        document.getElementById("nameError").textContent = "Nama harus lebih dari 3 karakter";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Validasi Email (harus format email)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Email tidak valid";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validasi Password
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password harus minimal 8 karakter";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Jika semua valid, submit form
    if (isValid) {
        alert("Form berhasil dikirim!");
        document.getElementById("myForm").reset(); // Reset form setelah submit
    }
});
