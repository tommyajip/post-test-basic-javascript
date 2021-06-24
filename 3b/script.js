alert("Program menghitung luas lingkaran");
let lagi = true;
while (lagi === true) {
    const phi = 3.14;
    let r = prompt("Masukkan ukuran jari-jari: ");
    let hasil = phi * Number(r) * Number(r);
    alert(`Luas lingkaran dengan jari-jari = ${r} adalah ${hasil}`);
    lagi = confirm("Apakah Anda ingin menghitung luas lingkaran lagi?");
}
alert("Terima kasih!");
