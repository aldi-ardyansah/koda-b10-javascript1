const r = 7

const luasLingkaranA = 22 / 7 * r * r
const luasLingkaranB = 3.14 / 7 * r * r
const kelilingLingkaranA = 22 / 7 * r * 2
const kelilingLingkaranB = 3.14 / 7 * r * 2

if (r % 7 == 0) {
    console.log(luasLingkaranA)
    console.log(kelilingLingkaranA)
} else {
    console.log(luasLingkaranB)
    console.log(kelilingLingkaranB)
}