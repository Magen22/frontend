// buatlah fungsi yang menerima 2 input angka
// dan mengembalikan nilai yang terbesar dari angka yang dimasukan
// buat dalam bentuk IIFE dan CallBack Function 

// IFFE 
(function() {
    function cariNilaiBsr(a1, a2) {
        let besar;
        if (a1 > a2) {
            bsr = a1;
        } else {
            bsr = a2;
        }
        return bsr;
    }

    let hasil = cariNilaiBsr(9, 22);
    console.log("Hasilnya adalah: " + hasil);
})();


// CALLBACK 
function cariNilaiBesar(a1, a2, callback) {
    let bsr;
    if (a1 > a2) {
        bsr = a1;
    } else {
        bsr = a2;
    }
    callback(bsr);
}

function tampilkanHasil(nilai) {
    console.log("Hasilnya adalah: " + nilai);
}

cariNilaiBesar(9, 22, tampilkanHasil);
