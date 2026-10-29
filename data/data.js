// T = daftar materi. q = kata kunci pencarian YouTube.
// Mau pakai video pilihan sendiri? Tambah  v:[["Judul","https://youtu.be/..."]]  pada materi.
const T={
peluang:{m:"Matematika",n:"Peluang",d:"Peluang kejadian tunggal, gabungan/irisan, berurutan, dan bersyarat (dengan/tanpa pengembalian).",q:"materi peluang"},
kombin:{m:"Matematika",n:"Kaidah Pencacahan",d:"Aturan perkalian, permutasi, dan kombinasi untuk menghitung banyak susunan.",q:"kaidah pencacahan permutasi kombinasi"},
stat:{m:"Matematika",n:"Statistika & Penyajian Data",d:"Rata-rata, median, modus (data tunggal/kelompok), membaca tabel dan diagram.",q:"statistika mean median modus diagram"},
spl:{m:"Matematika",n:"Sistem Persamaan Linear",d:"SPLDV/SPLTV: model dari soal cerita, eliminasi dan substitusi.",q:"sistem persamaan linear soal cerita"},
prolin:{m:"Matematika",n:"Program Linear",d:"Model matematika, daerah penyelesaian, nilai optimum.",q:"program linear model matematika nilai optimum"},
fungsi:{m:"Matematika",n:"Fungsi: Invers, Komposisi, Linear",d:"Fungsi invers, fungsi komposisi, dan fungsi linear sebagai model.",q:"fungsi komposisi dan invers"},
kuadrat:{m:"Matematika",n:"Fungsi Kuadrat",d:"Bentuk umum, grafik parabola, titik potong dan puncak.",q:"fungsi kuadrat grafik parabola"},
eksp:{m:"Matematika",n:"Eksponen & Bentuk Akar",d:"Sifat pangkat, bentuk akar, merasionalkan penyebut.",q:"eksponen bentuk akar rasionalisasi"},
barisan:{m:"Matematika",n:"Pola, Barisan & Deret",d:"Pola bilangan, barisan dan deret aritmetika/geometri, suku ke-n dan jumlah n suku.",q:"barisan dan deret aritmetika geometri"},
keuangan:{m:"Matematika",n:"Bunga Majemuk",d:"Bunga tunggal vs majemuk, nilai akhir tabungan/investasi.",q:"bunga majemuk matematika keuangan"},
dimensi3:{m:"Matematika",n:"Dimensi Tiga",d:"Jarak titik, garis, bidang pada kubus dan balok; hubungan antar garis.",q:"dimensi tiga jarak titik ke titik kubus"},
bangun:{m:"Matematika",n:"Bangun Datar & Ruang",d:"Keliling, luas, volume, luas permukaan, sudut pada bangun gabungan.",q:"luas keliling volume bangun datar bangun ruang"},
trigo:{m:"Matematika",n:"Trigonometri",d:"Sin, cos, tan; sudut istimewa; aplikasi tinggi dan jarak.",q:"trigonometri perbandingan sudut istimewa"},
sebangun:{m:"Matematika",n:"Kesebangunan & Skala",d:"Perbandingan sisi sebangun, skala, pembesaran.",q:"kesebangunan dan skala"},
optim:{m:"Matematika",n:"Optimasi (Nilai Maksimum)",d:"Mencari nilai terbesar/terkecil, misal volume kotak maksimum.",q:"aplikasi turunan nilai maksimum volume kotak"},
pangkat:{m:"Matematika",n:"Bilangan Berpangkat & Bilangan Bulat",d:"Operasi bilangan bulat, sifat pangkat, bilangan negatif.",q:"bilangan berpangkat dan bilangan bulat"},
aritsos:{m:"Matematika",n:"Aritmetika Sosial",d:"Persen, diskon, cashback, untung-rugi, bunga.",q:"aritmetika sosial persen diskon untung rugi"},
aljabar:{m:"Matematika",n:"Bentuk Aljabar",d:"Suku, koefisien, penjumlahan dan pengurangan bentuk aljabar.",q:"bentuk aljabar"},
relfungsi:{m:"Matematika",n:"Relasi & Fungsi",d:"Diagram panah, pasangan berurutan, ciri fungsi.",q:"relasi dan fungsi diagram panah"},
garis:{m:"Matematika",n:"Persamaan Garis Lurus",d:"Gradien, persamaan garis, grafik fungsi linear.",q:"persamaan garis lurus gradien"},
plsv:{m:"Matematika",n:"Pertidaksamaan Linear",d:"Menyelesaikan pertidaksamaan dan menggambar garis bilangan.",q:"pertidaksamaan linear satu variabel"},
koord:{m:"Matematika",n:"Koordinat Kartesius",d:"Menentukan dan membaca letak titik pada bidang koordinat.",q:"koordinat kartesius"},
sudut:{m:"Matematika",n:"Garis & Sudut",d:"Sudut berpelurus, bertolak belakang, sudut dalam segitiga.",q:"garis dan sudut hubungan antar sudut"},
jaring:{m:"Matematika",n:"Jaring-jaring Bangun Ruang",d:"Jaring-jaring kubus, balok, prisma, limas.",q:"jaring-jaring bangun ruang prisma"},
transf:{m:"Matematika",n:"Transformasi Geometri",d:"Translasi, refleksi, rotasi, dilatasi.",q:"transformasi geometri translasi"},
lingk:{m:"Matematika",n:"Lingkaran",d:"Keliling, luas, juring, busur.",q:"lingkaran juring busur"},
pyth:{m:"Matematika",n:"Teorema Pythagoras",d:"Sisi segitiga siku-siku dan penerapannya.",q:"teorema pythagoras soal cerita"},
makna:{m:"B. Indonesia",n:"Makna Kata & Istilah",d:"Menentukan arti kata/istilah sesuai konteks kalimat.",q:"makna kata dalam konteks bahasa indonesia"},
gagasan:{m:"B. Indonesia",n:"Gagasan Utama & Penjelas",d:"Ide pokok paragraf dan gagasan yang mendukungnya.",q:"gagasan utama ide pokok paragraf"},
isi:{m:"B. Indonesia",n:"Memahami Isi & Informasi Teks",d:"Fakta, detail, dan inferensi dari bacaan.",q:"memahami isi teks informasi fakta opini"},
tujuan:{m:"B. Indonesia",n:"Tujuan, Maksud & Pilihan Kata Penulis",d:"Tujuan penulis, makna kalimat, dan alasan pemilihan kata.",q:"tujuan penulis dan pilihan kata teks"},
hubungan:{m:"B. Indonesia",n:"Hubungan Antarparagraf & Antarkalimat",d:"Sebab-akibat, pertentangan, contoh; pola pengembangan paragraf.",q:"hubungan antarparagraf pola pengembangan paragraf"},
simpulan:{m:"B. Indonesia",n:"Simpulan & Kelanjutan Teks",d:"Menyimpulkan, melanjutkan, atau menutup teks secara logis.",q:"menyimpulkan isi teks argumentasi"},
cerpen:{m:"B. Indonesia",n:"Unsur Cerpen & Nilai",d:"Tokoh, watak, latar, konflik, amanat, dan nilai sosial.",q:"unsur intrinsik cerpen tokoh watak konflik"},
serapan:{m:"B. Indonesia",n:"Kata Serapan",d:"Penggunaan kata serapan yang tepat.",q:"kata serapan bahasa indonesia"},
bagan:{m:"B. Indonesia",n:"Bagan & Ringkasan Teks",d:"Menyusun bagian penting teks dalam bagan.",q:"meringkas teks bagan ide pokok"}
};
// s = "nomor|materi|catatan singkat" per baris
const P=[
{id:"mtk1",name:"Matematika – Paket 1",lv:"SMA",mp:"Matematika",s:`1|peluang|Peluang kamar hotel (gabungan)
2|peluang|Peluang jenis gadget
3|spl|Harga buku dan penggaris
4|stat|Diagram data pengusaha
5|prolin|Daerah penyelesaian pertidaksamaan
6|keuangan|Investasi bunga majemuk
7|fungsi|Invers fungsi
8|fungsi|Komposisi fungsi
9|eksp|Rumus energi listrik (perkiraan)
10|barisan|Pola potongan buah melingkar
11|eksp|Merasionalkan penyebut
12|barisan|Pertumbuhan bakteri
13|fungsi|Kekentalan pelumas (fungsi & interval)
14|optim|Volume kotak terbesar (nomor perkiraan)
15|sebangun|Perbandingan sisi rak buku
16|barisan|Panjang sambungan pipa
17|barisan|Tabungan Pak Budi
18|bangun|Jaring-jaring kemasan souvenir
19|trigo|Nilai cos sudut tumpul
20|stat|Diagram batang produksi (nomor perkiraan)
21|barisan|Beban jembatan ke-4,5,6
22|spl|Harga alat tulis
23|bangun|Keliling lingkaran alas piring
24|stat|Modus data berkelompok (nomor perkiraan)
25|barisan|Titik beban batas keamanan
26|prolin|Produksi meja dan kursi
27|dimensi3|Jarak titik V ke O pada kubus
28|peluang|Peluang dua grup band berurutan
29|bangun|Volume kemasan keju
30|barisan|Total beban jembatan
31|stat|Data wisatawan
32|stat|Modus gaji karyawan
33|peluang|Peluang doorprize
34|dimensi3|Hubungan rusuk kubus
36|stat|Penurunan keuntungan toko bunga
37|prolin|Keuntungan maksimum kue
38|bangun|Luas kaca jendela
39|bangun|Sudut trapesium
40|bangun|Luas trapesium (kecukupan data)
41|trigo|Tinggi tangga
42|stat|Rata-rata gabungan nilai
43|kuadrat|Grafik fungsi kuadrat
44|fungsi|Tagihan listrik (fungsi linear)
45|sebangun|Skala pembesaran proyektor
46|kombin|Kode akses kupon`},
{id:"mtk2",name:"Matematika – Paket 2",lv:"SMP",mp:"Matematika (SMP)",s:`1|pangkat|Hasil operasi bilangan berpangkat
2|aritsos|Cashback belanja online
3|aritsos|Cashback belanja online (lanjutan)
4|stat|Data berat dan kandungan vitamin C
5|pangkat|Suhu penyimpanan (bilangan negatif)
6|aljabar|Pernyataan bentuk aljabar
7|relfungsi|Diagram panah: fungsi atau bukan
8|garis|Biaya pemakaian air PDAM
9|koord|Peta pekarangan dan koordinat
10|plsv|Garis bilangan pertidaksamaan
11|spl|Harga kue tradisional
12|spl|Beli buku tulis dan pulpen
13|relfungsi|Paket kuota dalam himpunan pasangan
14|barisan|Pola pagar dari batu bata
15|barisan|Pola pagar (lanjutan)
16|sudut|Garis berpotongan, nilai x
17|jaring|Jaring-jaring prisma segitiga
18|sudut|Menentukan nilai b
19|pyth|Pagar tangga (perkiraan)
20|transf|Translasi segitiga kongruen
21|lingk|Luas juring
22|sebangun|Dua persegi panjang sebangun
23|bangun|Volume tangki minyak goreng
24|bangun|Kemasan botol dan jeriken
25|stat|Diagram garis produksi karet dan kelapa
26|stat|Durasi bermain game (modus)
27|stat|Durasi bermain game (lanjutan)
28|peluang|Kotak misteri figur karakter
29|stat|Usia telur mesin tetas (perkiraan)
30|peluang|Kertas soal berkode A, B, C`},
{id:"indo1",name:"Bahasa Indonesia – Paket 1",lv:"SMA",mp:"Bahasa Indonesia",s:`1|makna|Makna kata mobilisasi
2|gagasan|Gagasan utama paragraf 1 (teks plastik)
3|isi|Mengapa lautan terancam 2050
4|tujuan|Maksud kalimat "Solusi tersebut tidak mudah"
5|cerpen|Permasalahan tokoh aku
6|cerpen|Akibat jika tokoh tidak ke rumah iyye
7|cerpen|Nilai sosial dalam cerpen
8|tujuan|Tujuan penulis teks Rhodamin B
9|isi|Isi dua teks Rhodamin B
10|tujuan|Alasan teks menyebut dampak kesehatan
11|bagan|Bagan teks dampak ekonomi digital
12|hubungan|Pola pengembangan paragraf 1-3
13|tujuan|Menilai teks dan pilihan kata
14|serapan|Kata serapan "boyongan"
15|cerpen|Peristiwa jika tokoh tidak ikut mencari jangkrik
16|cerpen|Kalimat bukti karakter setia kawan
17|serapan|Kalimat berkata serapan tepat
18|hubungan|Hubungan makna kalimat (2) dan (3)
19|simpulan|Kalimat penutup paragraf keempat
20|isi|Fakta pendukung simpulan teknologi hijau`},
{id:"indo2",name:"Bahasa Indonesia – Paket 2",lv:"SMA",mp:"Bahasa Indonesia",s:`1|makna|Makna kata hajatan
2|gagasan|Gagasan pendukung buwuhan = utang
3|hubungan|Hubungan paragraf 2 dan 3
4|simpulan|Kesimpulan teks buwuhan
5|cerpen|Sifat tokoh Layur
6|cerpen|Penyebab Layur kesal
7|simpulan|Penutup cerita Layur
8|cerpen|Reaksi Bapak saat rumah hancur
9|cerpen|Cerpen Pak Wayan (perkiraan)
10|cerpen|Cerpen Pak Wayan (perkiraan)
11|cerpen|Cerpen Pak Wayan (perkiraan)
12|hubungan|Hubungan paragraf 1 dan 2
13|isi|Data pendukung opini penulis
14|tujuan|Alasan istilah "bahu-membahu"
15|isi|Fenomena inflasi dalam teks
16|isi|Tantangan perekonomian global
17|simpulan|Kelanjutan teks ekonomi
18|cerpen|Latar tempat cerita Roh Meratus
19|cerpen|Penyebab konflik cerpen
20|cerpen|Tindakan tokoh setelah peristiwa
21|cerpen|Perubahan sikap tokoh utama
22|makna|Makna kata sesepuh
23|gagasan|Gagasan penjelas tradisi belis
24|hubungan|Hubungan paragraf 2 dan 3
25|simpulan|Kesimpulan teks argumentasi belis`}
];
 
