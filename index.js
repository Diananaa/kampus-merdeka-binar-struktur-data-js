// soal 1
function changedWord(selectText, changeText, text) {
    return text.split(selectText).join(changeText);
}
var kalimat1 = 'Andini sangat mencintai kamu selamanya';
// console.log(changedWord('mencintai', 'membenci', kalimat1))

// soal 2
const checkTypeNumber = (number) => {
    if (number == undefined) {
        return 'ERROR: Bro where is the parameter?'
    } else if (typeof (number) !== 'number') {
        return ('Error: Invalid data type')
    } else if (number % 2 == 0) {
        return ('bilangan genap')
    } else {
        return ('bilangan ganjil')
    }
}
// console.log(checkTypeNumber(30))

// soal 3


function checkEmail(email) {

    // validate @ .
    var re = /\S+@\S+\.\S+/

    // validate @
    var re1 = /\S+@\S+/

    if (re.test(email) == true) {
        return ('VALID')
    } else if (re1.test(email) == true) {
        return 'INVALID'
    } else {
        return 'ERROR: Invalid data type'
    }
}
// console.log(checkEmail())

// tugas 4
function isValidPassword(givenPassword) {
    if (typeof (givenPassword) !== 'string') {
        return 'ERROR : data type is INVALID'
    } else if (givenPassword.length >= 8 && givenPassword.match(/[0-9]/g) && givenPassword.match(/[a-z]/g) && givenPassword.match(/[A-Z]/g)) {
        return 'true'
    } else {
        return 'false'
    }
}
// console.log(isValidPassword())

// tugas 5
function getSplitName(personName) {
    // kondisi jenis data
    if (typeof (personName) == 'string') {
        const fullNameSplit = personName.split(" ");
        const name = {
            firstName: fullNameSplit[0],
        }
        // kondisi panjang data
        if (fullNameSplit.length === 1) {
            dataName = {
                middleName: null,
                lastName: null,
            }
        } else if (fullNameSplit.length === 2) {
            dataName = {
                middleName: null,
                lastName: fullNameSplit[1],
            }
        } else if (fullNameSplit.length === 3) {
            dataName = {
                firstName: fullNameSplit[0],
                middleName: fullNameSplit[1],
                lastName: fullNameSplit[2],
            }
        } else {
            return console.log('ERROR: This function is only for 3 characters name')
        }
        fullName = {
            ...name,
            ...dataName
        }
        return console.log(fullName)

    } else {
        return console.log('ERROR: data type is ' + typeof (personName))
    }
}

// getSplitName('duf jdhs dfn djn')

// TUGAS 6
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

function getAngkaTerbesarKedua(dataAngka) {
    if (!dataAngka) {
        return 'Error: please input score array '
    }
    const sorting = dataAngka.sort(function (a, b) {
        return b - a
    })
    return sorting[1]
}
// console.log(getAngkaTerbesarKedua(dataAngka))

// TUGAS 7
// const dataPenjualanPakAldi = [{
//         namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
//         hargaSatuan: 760000,
//         kategori: 'Sepatu Sport',
//         totalTerjual: 90
//     }, {
//         namaProduct: 'Sepatu Warrior Tristan Black Brown High - Original',
//         hargaSatuan: 960000,
//         kategori: 'Sepatu Sneaker',
//         totalTerjual: 37
//     }, {
//         namaProduct: 'Sepatu Warrior Tristan Maroon High - Original',
//         hargaSatuan: 'Sepatu Sneaker',
//         kategori: 360000,
//         totalTerjual: 90
//     }, {
//         namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy - [EN18] Original',
//         hargaSatuan: 120000,
//         kategori: 'Sepatu Sneaker',
//         totalTerjual: 90
//     }
// ]

// function getTotalPenjualan(number) {
//     return number.reduce((a, b) => {
//         return {
//             totalTerjual: a.totalTerjual + b.totalTerjual
//         }
//     })
// }
// console.log(getTotalPenjualan(dataPenjualanPakAldi))

// TUGAS 8
const dataPenjualanNovel = [{
    idProduct: 'B00KBB2421',
    namaProduk: 'Pulang - pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStock: 17,
}, {
    idProduct: 'B00KBB2351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 183000,
    totalTerjual: 171,
    sisaStock: 28,
}, {
    idProduct: 'B00KBB2941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStock: 5,
}, {
    idProduct: 'B00KBB2941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 28,
    sisaStock: 56,
}]

function getInfoPenjualan(dataPenjualan) {
    // VARIABLE
    let sumHargaBeli = 0;
    let sumHargaJual = 0;
    let sumModal = 0;

    // SUM HARGA BELI
    for (let i = 0; i < dataPenjualan.length; i++) {
        sumHargaBeli += dataPenjualan[i].hargaBeli;
    }

    // SUM HARGA JUAL
    for (let i = 0; i < dataPenjualan.length; i++) {
        sumHargaJual += dataPenjualan[i].hargaJual;
    }

    // RUMUS KEUNTUNGAN
    const rumusKeuntungan = sumHargaJual - sumHargaBeli;
    const totalKeuntungan = `Rp${rumusKeuntungan.toLocaleString("id-ID")}`;

    // RUMUS MODAl USAHA 
    for (let i = 0; i < dataPenjualan.length; i++) {
        sumModal += ((dataPenjualan[i].hargaJual + dataPenjualan[i].sisaStock) * dataPenjualan[i].hargaBeli);
    }
    const totalModal = `Rp${sumModal.toLocaleString("id-ID")}`;

    // PRESENTASE
    const rumusPresentase = (rumusKeuntungan / sumHargaBeli) * 100
    const presentase = rumusPresentase.toFixed(2) + '%'

    // Mengurutkan data terbesar
    const dataSort = dataPenjualan.sort((a, b) => b.totalTerjual - a.totalTerjual)
    const sort = {
        produkBukuTerlaris: dataSort[0].namaProduk,
        penulisTerlaris: dataSort[0].penulis
    }

    // data akhir
    const data = {
        totalKeuntungan: totalKeuntungan,
        totalModal: totalModal,
        presentaseKeuntungan: presentase,
        ...sort
    }

    return console.log(data)
}

// getInfoPenjualan(dataPenjualanNovel)