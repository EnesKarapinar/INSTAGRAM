tel_rehberi = dict([])

def tel_no_ekle(x):
    print("Numara Ekleme Ekranına Hoşgeldin")
    no_isim_al = input("Hangi isimle kaydediceksin: ")
    no_no_al = input("Telefon numarasını gir: ")

    x = tel_rehberi.setdefault(no_isim_al, no_no_al)
    print(f"{no_isim_al} kişisi rehbere eklendi (:")
    input("Devam edilsin mi?")

def tel_rehber_goster(x):
    kisi_sayisi = len(x)
    print(f"Rehberde kayıtlı kişi sayısı: {kisi_sayisi}")

    for i,j in x.items():
        print(i,":",j)
    input("Devam edilsn mi?")

def no_sil(x):
    print("Kişi silme ekranına hoşgeldin")
    silinecek_kisi = input("Silinecek kişiyi yaz: ")
    x = tel_rehberi.pop(silinecek_kisi)
    input("Devam edilsin mi?")

while True:
    print("***HOŞGELDİN***")
    print("--Seçim Yap--")
    secim_yap = int(input("1-Ekle\n2-Sil\n3-Rehberi Gör\n"))

    if secim_yap == 1:
        tel_no_ekle(tel_rehberi)
    elif secim_yap == 2:
        no_sil(tel_rehberi)
    elif secim_yap == 3:
        tel_rehber_goster(tel_rehberi)
    else:
        print("Doğru tuşa bastığına emin ol..")