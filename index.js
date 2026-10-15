const hitungLingkaran = {
  r: 7,
  pi: 0,
  tentukanPi: function() {
    if (this.r % 7 === 0) {
      this.pi = 22 / 7;
    } else {
      this.pi = 3.14;
    }
  },
  luasLingkaran: function() {
    hitungLingkaran.tentukanPi();
    return this.pi * this.r * this.r;
  },
  kelilingLingkaran: function() {
    hitungLingkaran.tentukanPi();
    return this.pi * this.r * 2;
  }
};

const luasLingkaran = hitungLingkaran.luasLingkaran();
const kelilingLingkaran = hitungLingkaran.kelilingLingkaran();

console.log(luasLingkaran);
console.log(kelilingLingkaran);