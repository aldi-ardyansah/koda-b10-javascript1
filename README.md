# JavaScript 1

## Membuat Program Hitung Luas dan Keliling Lingkaran

### Flowchart
```mermaid
    flowchart TD
    A((Start))
    B[/r/]
    C[/pi/]
    D{r % 7 === 0}
    E[pi = 22 / 7]
    F[pi = 3.14]
    G[/pi * r * r/]
    H[/2 * pi * r/]
    Z(((Stop)))

    A --> B --> C
    C --> D
    D --True--> E
    D --False--> F
    E --> G
    F --> G
    G --> H
    H --> Z
```