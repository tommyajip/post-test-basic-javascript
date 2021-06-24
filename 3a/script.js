alert("Program menghitung luas segitiga");
let lagi = true;
while (lagi === true) {
  let a = prompt("Masukkan ukuran alas: ");
  let t = prompt("Masukkan ukuran tinggi: ");
  let hasil = 0.5 * a * t;
  alert(`Luas segitiga dengan alas = ${a} dan tinggi = ${t} adalah ${hasil}`);
  lagi = confirm("Apakah Anda ingin menghitung luas segitiga lagi?");
}
alert("Terima Kasih!");
