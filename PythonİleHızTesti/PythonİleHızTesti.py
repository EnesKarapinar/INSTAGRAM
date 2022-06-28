from speedtest import Speedtest

st = Speedtest()

print("İndirme hızı: ", st.download()/1000000, "Mbps")
print("Yükleme hızı: ", st.upload()/1000000, "Mbps")