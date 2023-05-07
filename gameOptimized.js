const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
 let chance = 10;
 let array = [];
 
 function startGame() {
   console.log('Selamat datang di permainan tebak angka!');
   console.log('Ketik "exit" kapan saja untuk keluar dari permainan.');
   resetGame();
 }
 
 function resetGame() {
   chance = 10;
   array = generateRandomNumbers(4);
   playGame();
 }
 
 function generateRandomNumbers(length) {
   let numbers = [];
   for (let i = 0; i < length; i++) {
     let randomNum = Math.floor(Math.random() * 10);
     numbers.push(randomNum.toString());
   }
   console.log(numbers)
   return numbers;
 }
 
 function playGame() {
   readline.question('Masukkan angka yang dipisahkan oleh spasi: ', (input) => {
     if (input.toLowerCase() === 'exit') {
       console.log('Terima kasih telah bermain!');
       readline.close();
     } else {
       let inputNumbers = input.split(' ');
       let correctNumbers = 0;
       let correctPositions = 0;
       for (let i = 0; i < array.length; i++) {
         if (inputNumbers.includes(array[i])) {
           correctNumbers++;
         }
         if (inputNumbers[i] === array[i]) {
           correctPositions++;
         }
       }
       console.log(`Angka yang benar: ${correctNumbers}`);
       console.log(`Posisi yang benar: ${correctPositions}`);
       if (correctPositions === 4) {
         console.log('Selamat, Anda berhasil menebak angka!');
         resetGame();
       } else {
         chance--;
         if (chance === 0) {
           console.log(`Anda gagal, jawaban yang benar adalah: ${array}`);
           resetGame();
         } else {
           console.log(`Jawaban salah, silakan coba lagi, kesempatan sisa ${chance}`);
           playGame();
         }
       }
     }
   });
 }
 
 startGame();
 