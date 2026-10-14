# JavaScript 2

## Membuat Program

### Mengakses we.are.the.best
```
const we = {
  are: {
    the: {
      best: "Koda"
    }
  }
};
console.log(we.are.the.best);
```

### Mengakses hello.world
```
const hello = {
  world: "Hello World"
};
console.log(hello.world);
```

### Mengakses obj.str[3][1][2].man[0].tech.academy
```
const obj = {
  str: [
    null,
    null,
    null,
    [
      null,
      [
        null,
        null,
        {
          man: [
            {
              tech: {
                academy: "Koda Academy"
              }
            }
          ]
        }
      ]
    ]
  ]
};
console.log(obj.str[3][1][2].man[0].tech.academy);
```

### Mengakses my[0].favourite[3].fruit.is
```
const my = [
  {
    favourite: [
      {
        artist: {
          is: "Sherina"
        }
      },
      {
        bike: {
          is: "Wimcycle"
        }
      },
      {
        car: {
          is: "Daihatsu"
        }
      },
      {
        fruit: {
          is: "Food"
        }
      }
    ]
  }
];
console.log(my[0].favourite[3].fruit.is);
```

### Mengakses num.first[1] + num.second[2]
```
const num = {
  first: [
    1,
    24
  ],
  second: [
    1,
    2,
    8
  ]
};
console.log(num.first[1] + num.second[2]);
```