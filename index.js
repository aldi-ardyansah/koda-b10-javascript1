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
  luasLingkaran: function(callback) {
    hitungLingkaran.tentukanPi();
    const luas = this.pi * this.r * this.r;
    callback(luas);
  },
  kelilingLingkaran: function(callback) {
    hitungLingkaran.tentukanPi();
    const keliling = this.pi * this.r * 2;
    callback(keliling);
  }
};

hitungLingkaran.luasLingkaran(function(luasLingkaran) {
  console.log(luasLingkaran);
});

hitungLingkaran.kelilingLingkaran(function(kelilingLingkaran) {
  console.log(kelilingLingkaran);
});