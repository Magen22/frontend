function nilaiTerbesar(angka1, angka2) {
    if (angka1 > angka2){
        return angka1;
    } else{
        return angka2;
    }
}

let input1 = 20;
let input2 = 10;
let hasil = nilaiTerbesar(input1, input2);
console.log("nilai terbesar adalah: " + hasil);