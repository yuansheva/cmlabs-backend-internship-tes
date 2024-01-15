function fizzBuzzTest(limit) {
    // Membuat array kosong untuk menyimpan hasil FizzBuzz
    let result = [];
  
    // Iterasi melalui angka dari 1 hingga limit
    for (let i = 1; i <= limit; i++) {
      let output = '';
  
      // Cek apakah angka dapat dibagi habis oleh 3
      if (i % 3 === 0) {
        output += 'Fizz';
      }
  
      // Cek apakah angka dapat dibagi habis oleh 5
      if (i % 5 === 0) {
        output += 'Buzz';
      }
  
      // Jika angka adalah kelipatan 3 dan 5, keluarkan 'FizzBuzz'
      if (i % 3 === 0 && i % 5 === 0) {
        output = 'FizzBuzz';
      }
  
      // Jika angka tidak dapat dibagi habis oleh 3 atau 5, gunakan angka itu sendiri
      if (output === '') {
        output = i;
      }
  
      // Tambahkan hasil ke array
      result.push(output);
    }
    return result;
  }
  
  // Uji fungsi dengan batas 100
  const fizzBuzzResult = fizzBuzzTest(100);
  console.log(fizzBuzzResult.join(', '));
  