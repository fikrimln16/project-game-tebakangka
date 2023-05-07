const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

let chance = 10;
let array = [];
for(let i = 0; i < 4; i++){
   let randomNum = Math.floor(Math.random() * 10);
   let string = randomNum.toString();
   array.push(string)
}

function main() {
   console.log(array)
   readline.question('Masukkan angka yang dipisahkan oleh spasi: ', (input) => {
      const input1 = input.split(' ');
      let jumlah = 0;
      let posisi = 0;
      let i = 0;
      while (i < array.length) {
         for (let index = 0; index < input1.length; index++) {
            if (input1[index] === array[i]) {
               jumlah++
               break
            } 
         }
         if (array[i] === input1[i]) {
            posisi++;
         } 
         i++
      }  

      console.log("huruf yang benar " + jumlah);
      console.log("posisi benar ada " + posisi);

      if (posisi === 4) {
         console.log("Game selesai");
         console.log("Game berhasil direset!");
         chance = 10;
         array.splice(0, array.length);
         for(let i = 0; i < 4; i++){
            let randomNum = Math.floor(Math.random() * 10);
            let string = randomNum.toString();
            array.push(string)
         }
         main();
      } else {
         chance--;
         if(chance===0){
            console.log("Anda gagal, jawaban yang benar adalah :" + array);
            console.log("Game berhasil direset!");
            chance = 10;
            array.splice(0, array.length);
            for(let i = 0; i < 4; i++){
               let randomNum = Math.floor(Math.random() * 10);
               let string = randomNum.toString();
               array.push(string)
            }
            main();
         } else {
            console.log("Jawaban salah, silakan coba lagi, kesempatan sisa " + chance);
            main();
         }
      }
   });
}

main();
 