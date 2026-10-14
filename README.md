# JavaScript 1

## Membuat Program Hitung Luas dan Keliling Lingkaran

### Flowchart
```mermaid
    flowchart TD
    A((Start))
    B[/r/]
    C{r/7 == 0}
    D[22 / 7 * r * r]
    E[3,14 * r * r]
    F[/print/]
    G[/print/]
    Z(((Stop)))

    A --> B --> C
    C --True--> D
    C --False--> E
    D --> F
    E --> G
    F --> H
    G --> H
```