# JavaScript 1

## Membuat Program Hitung Luas dan Keliling Lingkaran

### Flowchart
```mermaid
    flowchart TD
    A((Start))
    B[/r/]
    C{r % 7 == 0}
    D[22 / 7 * r * r]
    E[3,14 * r * r]
    F[/luasLingkaranA/]
    G[/luasLingkaranB/]
    H[22 / 7 * r * 2]
    I[3,14 * r * 2]
    J[/kelilingLingkaranA/]
    K[/kelilingLingkaranB/]
    Z(((Stop)))

    A --> B --> C
    C --True--> D
    C --False--> E
    D --> F
    E --> G
    F --> H
    G --> I
    H --> J
    I --> K
    J --> Z
    K --> Z