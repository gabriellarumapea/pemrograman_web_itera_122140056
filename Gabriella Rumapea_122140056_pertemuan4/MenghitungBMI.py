# Program Penghitung BMI (input dari user, tinggi dalam cm)

# Input berat badan (dalam kilogram) dan tinggi badan (dalam centimeter)
berat = float(input("Masukkan berat badan (kg): "))
tinggi_cm = float(input("Masukkan tinggi badan (cm): "))

# Konversi tinggi dari cm ke meter
tinggi_m = tinggi_cm / 100

# Hitung BMI
bmi = berat / (tinggi_m * tinggi_m)

# Tentukan kategori BMI
if bmi < 18.5:
    kategori = "Berat badan kurang"
elif 18.5 <= bmi < 25:
    kategori = "Berat badan normal"
elif 25 <= bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

# Tampilkan hasil
print(f"\nHasil Perhitungan BMI:")
print(f"Berat badan: {berat} kg")
print(f"Tinggi badan: {tinggi_cm} cm ({tinggi_m:.2f} m)")
print(f"BMI: {bmi:.2f}")
print(f"Kategori: {kategori}")
