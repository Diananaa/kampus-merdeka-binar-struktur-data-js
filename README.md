Front End Javascript, Chapter 02 - Challenge
### TUGAS 1
Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat. Function ini akan menerima 3 parameter, yaitu :
* selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata yang akan diganti nantinya.
* changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya
* text => Sebuah kalimat

### TUGAS 2
Buatlah sebuah function yang berfungsi mendeteksi apakah sebuah angka termasuk angka genap atau ganjil. Function ini akan menerima satu parameter, yaitu :
* givenNumber ⇒ angka yang akan dicheck oleh function
</br>
<b>Kriteria function yang harus kamu buat:</b>

* Beri nama function tersebut checkTypeNumber
* Menggunakan arrow function
* function ini harus return data dengan tipe string
* function ini harus retrun data berupa GENAP ATAU GANJIL
* function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

### TUGAS 3
Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah alamat email yang diberikan sebagai parameter, adalah alamat email yang formatnya benar atau tidak. </br> </br>
Jika parameter yang diberikan adalah alamat email yang benar, maka function ini harus return VALID, namun apabila alamat email yang diberikan tidak benar formatnya, maka function harus return INVALID </br> </br>
<b>function ini akan menerima satu parameter, yaitu:</b>

* email ⇒ email yang akan dicek oleh function </br>

<b>Kriteria function yang harus kamu buat:</b> 
* function ini harus return data dengan tipe string
* function ini harus return data dengan tipe string
* function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

### TUGAS 4
Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah password yang diberikan sebagai parameter memenuhi kreteria yang telah ditentukan atau tidak. </br></br>
<b>Berikut kriteria password yang valid, apabila password tidak memenuhi kriteria dibawah ini, maka dinyatakan tidak valid: </b> </br>
* Password harus memiliki panjang minimal 8 huruf
* Password harus memiliki minimal 1 huruf besar
* Password harus memiliki minimal 1 huruf kecil
* Password harus memiliki minimal 1 angka

<b>function ini akan menerima satu parameter, yaitu:</b>
* givenPassword ⇒ Password berupa string dan akan dicek oleh function tersebut.

<b>Kriteria function:</b>
* Beri nama function tersebut isValidPassword
* function ini harus return data dengan tipe Boolean
* function ini harus retrun data berupa true ATAU false
* function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

### TUGAS 5
Buatlah sebuah function yang berfungsi untuk membagikan sebuah nama menjadi Nama Depan, Nama Tengah, Nama Belakang. Function ini nantinya akan menerima satu parameter yang berisi nama lengkap seseorang. Apabila nama lengkap dari seseorang tersebut lebih dari 3 suku kata, maka function tersebut harus menghasilkan sebuah error. Tapi apabila parameter yang diberikan valid (tidak lebih dari 3 suku kata), maka function ini akan menghasilkan sebuah object dengan properti firstName, middleName, lastName. </br> </br>
<b>function ini akan menerima satu parameter, yaitu:</b>
* givenNumber ⇒ angka yang akan dicheck oleh function </br>

<b>Kriteria function:</b>
* Beri nama function tersebut getSplitName
* function ini harus return data dengan tipe object
* function ini harus return data dengan tipe object
* function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

### TUGAS 6
Buatlah sebuah function yang berfungsi untuk mendapatkan angka terbesar kedua dari sebuah array. </br></br>
Misal diberikan sebuah array yang terdiri dari beberapa angka [2,3,5,6,6,4], berdasarkan data dari array tersebut dapat kita simpulkan bahwasanya angka terbesar dari array tersebut adalah 6, angka kedua terbesar adalah 5, dan angka ketiga terbesar adalah 4. Maka dari itu function yang akan kamu buat ini akan me-return angka kedua terbesar pada array yang telah diberikan, yaitu angka 5. </br></br>

<b>function ini akan menerima satu parameter, yaitu:</b>
* dataNumbers ⇒ Array yang berisi beberapa angka </br>
<b>Kriteria function:</b>
* Beri nama function tersebut getAngkaTerbesarKedua
* function ini harus return data dengan tipe number
* function ini harus return data angka terbesar kedua dari angka-angka yang diberikan didalam array
* function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

### TUGAS 7
Hari ini Toko Pak Aldi berhasil menjual banyak sepatu. Pada gambar disamping terdapat data sepatu-sepatu yang terjual dari toko Pak Aldi dalam bentuk array of object. </br></br>
Tugas kamu adalah membuat sebuah function yang berfungsi membantu Pak Aldi untuk menghitung total seluruh sepatu yang terjual. </br></br>
<b>function ini akan menerima satu parameter, yaitu:</b>
* dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product. 

<b>Kriteria function:</b>
* Beri nama function tersebut getTotalPenjualan
* function ini harus return data dengan tipe number
* function ini harus return total penjumlahan dari properti totalTerjual pada data yang diberikan
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
### TUGAS 8
Hari ini Toko buku milik Ibu Daniela berhasil menjual banyak sekali buku-buku novel. Gambar disamping adalah data penjualan buku-buku novel yang dijual di Toko buku milik Ibu Daniela, dalam format array of object. </br></br>
Tugas kamu adalah membuat sebuah function yang berfungsi membantu Ibu Daniela untuk mendapatkan informasi berupa Total Keuntungan, Total Modal, Produk Buku Terlaris, Penulis Buku Terlaris dan Persentase Keuntungan dari data penjualan yang telah disediakan diatas. function yang kamu buat ini akan me-return sebuah data yang berbentuk sebuah object yang dari beberapa properti. </br></br>
<b>function ini akan menerima satu parameter, yaitu:</b>
* dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.

<b>Kriteria function:</b>
* Beri nama function tersebut getInfoPenjualan
* function ini harus return data dengan tipe object
* Data object harus berisi properti seperti yang dijelaskan sebelumnya yaitu totalKeuntungan, totalModal, produkBukuTerlaris, persentaseKeuntungan, dan penulisTerlaris
* function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
