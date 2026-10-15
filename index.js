const hitungLingkaran = {
  r: 7,
  pi: 0,
  hitung: function() {
    let pi;
    if (this.r % 7 === 0) {
      pi = 22 / 7;
    } else {
      pi = 3.14;
    }
    const luasLingkaran = pi * this.r * this.r;
    const kelilingLingkaran = pi * this.r * 2;
    return {luasLingkaran, kelilingLingkaran};
  }
};

const result = hitungLingkaran.hitung();

console.log(result.luasLingkaran);
console.log(result.kelilingLingkaran);