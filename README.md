# JavaScript 1

## Membuat Program Hitung Luas dan Keliling Lingkaran

### Flowchart
```mermaid
    flowchart TD
    A((Start))
    B[/r/]
    C{r % 7 === 0}
    D[pi = 22 / 7]
    E[pi = 3.14]
    F[/pi * r * r/]
    G[/2 * pi * r/]
    Z(((Stop)))

    A --> B --> C
    C --True--> D
    C --False--> E
    D --> F
    E --> F
    F --> G
    G --> Z
```