# main.py

# Cara 1: Import seluruh modul
import math_operations as mo

# Cara 2: Import fungsi tertentu saja
from math_operations import luas_persegi, keliling_lingkaran

# Program utama
print("=== Program Matematika ===")
print("Pilih operasi:")
print("1. Luas Persegi")
print("2. Keliling Persegi")
print("3. Luas Persegi Panjang")
print("4. Keliling Persegi Panjang")
print("5. Luas Lingkaran")
print("6. Keliling Lingkaran")
print("7. Konversi Celsius ke Fahrenheit")
print("8. Konversi Celsius ke Kelvin")

pilihan = int(input("Masukkan pilihan (1-8): "))

# Menyesuaikan operasi berdasarkan input user
if pilihan == 1:
    sisi = float(input("Masukkan panjang sisi: "))
    print(f"Luas persegi: {luas_persegi(sisi)}")
elif pilihan == 2:
    sisi = float(input("Masukkan panjang sisi: "))
    print(f"Keliling persegi: {mo.keliling_persegi(sisi)}")
elif pilihan == 3:
    panjang = float(input("Masukkan panjang: "))
    lebar = float(input("Masukkan lebar: "))
    print(f"Luas persegi panjang: {mo.luas_persegi_panjang(panjang, lebar)}")
elif pilihan == 4:
    panjang = float(input("Masukkan panjang: "))
    lebar = float(input("Masukkan lebar: "))
    print(f"Keliling persegi panjang: {mo.keliling_persegi_panjang(panjang, lebar)}")
elif pilihan == 5:
    jari_jari = float(input("Masukkan jari-jari lingkaran: "))
    print(f"Luas lingkaran: {mo.luas_lingkaran(jari_jari):.2f}")
elif pilihan == 6:
    jari_jari = float(input("Masukkan jari-jari lingkaran: "))
    print(f"Keliling lingkaran: {keliling_lingkaran(jari_jari):.2f}")
elif pilihan == 7:
    c = float(input("Masukkan suhu Celsius: "))
    print(f"Suhu dalam Fahrenheit: {mo.celsius_ke_fahrenheit(c):.2f} °F")
elif pilihan == 8:
    c = float(input("Masukkan suhu Celsius: "))
    print(f"Suhu dalam Kelvin: {mo.celsius_ke_kelvin(c):.2f} K")
else:
    print("Pilihan tidak valid.")
