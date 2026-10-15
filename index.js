const r = 7;

function hitungLingkaran(r) {
    let pi;

    if (r % 7 === 0) {
        pi = 22 / 7;
    } else {
        pi = 3.14;
    }

    let luas = pi * r * r;
    let keliling = pi * (r * 2);

    return {luas, keliling};
}

const result = hitungLingkaran(r);

console.log(result.luas);
console.log(result.keliling);