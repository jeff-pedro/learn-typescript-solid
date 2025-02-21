interface Batedor {
  bater(): void;
}

class BatedorGlobo implements Batedor {
  bater(): void {
    console.log("Com esse batedor eu posso fazer sorvete!");
  }
}

class BatedorLeque implements Batedor {
  bater(): void {
    console.log("Com esse batedor eu posso fazer biscoito!");
  }
}

class BatedorGancho implements Batedor {
  bater(): void {
    console.log("Com esse batedor eu posso fazer pão!");
  }
}

class BatedeiraPlanetaria {
  constructor(private batedor: Batedor) {}
  
  bater(): void {
    return this.batedor.bater()
  }
}

const batedorGancho = new BatedorGancho();

const batedeira = new BatedeiraPlanetaria(batedorGancho);
batedeira.bater(); // Saída: Com esse batedor eu posso fazer pão!