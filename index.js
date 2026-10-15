const r = 7;

function hitungLingkaran(r) {
    let pi;
    if (r % 7 === 0) {
      pi = 22/7
    } else {
      pi = 3.14
    }
    const luas = pi * r * r;
    const keliling = pi * (r * 2);

    return {luas, keliling};
}

function tampilkan(result) {
    console.log(result.luas);
    console.log(result.keliling);
}

const result = hitungLingkaran(r);
tampilkan(result);