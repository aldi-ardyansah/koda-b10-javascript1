const lingkaran = {
  r: 7,
  pi: 0
};

function menentukanPi() {
  if (lingkaran.r % 7 === 0) {
    lingkaran.pi = 22 / 7;
  } else {
    lingkaran.pi = 3.14;
  }
}

function luasLingkaran(callback) {
  menentukanPi();
  const luas = lingkaran.pi * lingkaran.r * lingkaran.r;
  callback(luas);
}

function kelilingLingkaran(callback) {
  menentukanPi();
  const keliling = lingkaran.pi * lingkaran.r * 2;
  callback(keliling);
}

luasLingkaran(function(luas) {
  console.log(luas);
});

kelilingLingkaran(function(keliling) {
  console.log(keliling);
});