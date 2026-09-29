export class  Combatente {
   constructor (
    private _nome: string,
    private _vida: number,
    private _poderDeFogo: number,
   ){}

public get nome(): string {
    return this._nome;
}

public get vida(): number {
 return this._vida;
}

public get poderDeFogo(): number {
    return this._poderDeFogo;
}

 public set nome(novoNome: string) {
    if (novoNome.trim().length > 0) {
      this._nome = novoNome;
    }
  }

  public set vida(novaVida: number) {
    if (novaVida >= 0) {
        this._vida = novaVida;
    } else {
        this._vida = 0
    }
  }

   public set poderDeFogo(novoPoder: number) {
    if (novoPoder > 0) {
      this._poderDeFogo = novoPoder;
    }
  }

  public receberDano(dano: number): void {
    if (dano > 0) {
        this._vida = this._vida - dano
        console.log(`&{this.nome} tomou &{this.dano} de desgraça! Sobrou  &{this.vida} de vida pro betinha `);
    }
  }

  public estaVivo(vida: number) {
    return this._vida > 0;
  }


}