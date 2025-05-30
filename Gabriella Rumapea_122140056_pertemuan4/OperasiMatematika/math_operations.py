# math_operations.py

# Variabel konstanta
PI = 3.14159

# Fungsi menghitung luas dan keliling persegi
def luas_persegi(sisi):
    return sisi * sisi

def keliling_persegi(sisi):
    return 4 * sisi

# Fungsi menghitung luas dan keliling persegi panjang
def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar

def keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)

# Fungsi menghitung luas dan keliling lingkaran
def luas_lingkaran(jari_jari):
    return PI * jari_jari * jari_jari

def keliling_lingkaran(jari_jari):
    return 2 * PI * jari_jari

# Fungsi konversi suhu
def celsius_ke_fahrenheit(c):
    return (c * 9/5) + 32

def celsius_ke_kelvin(c):
    return c + 273.15
