const r = 7;

// Pure Function
function hitungLingkaran(r) {
  let pi;
  if (r % 7 === 0) {
    pi = 22/7;
  } else {
    pi = 3.14;
  }
  const luas = pi * r * r;
  const keliling = pi * (r * 2);

  return {luas, keliling};
}

// Destructure
const {luas, keliling} = hitungLingkaran(r);

// Impure Function
function tampilkan() {
  console.log(luas);
  console.log(keliling);
}

tampilkan();