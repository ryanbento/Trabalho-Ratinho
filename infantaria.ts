import { AcaoTatica } from "./AcaoTatica";
import { Combatente } from "./combatente";

export class Infantaria extends Combatente implements AcaoTatica {
  private coleteBalistico: number;

  
  constructor(nome: string, vida: number, poderDeFogo: number, coleteBalistico: number) {
    super(nome, vida, poderDeFogo);
    this.coleteBalistico = coleteBalistico;
  }
  public getColeteBalistico(): number {
    return this.coleteBalistico;
  }

  public setColeteBalistico(coleteBalistico: number): void {
    this.coleteBalistico = coleteBalistico;
  }


  public atacar(alvo: Combatente): void {
    console.log(
      `O soldado ${this.getNome()} disparou rajadas de fuzil contra ${alvo.getNome()} causando ${this.getPoderDeFogo()} de dano!`
    );
    alvo.receberDano(this.getPoderDeFogo());
  }

  public defender(): void {
    this.coleteBalistico += 5;
    console.log(
      `O soldado ${this.getNome()} buscou cobertura e ganhou +5 de colete balístico! (Colete Atual: ${this.coleteBalistico})`
    );
  }

  
  public override receberDano(dano: number): void {
    const danoFinal = dano - this.coleteBalistico;
    
  
    const danoAplicado = danoFinal > 0 ? danoFinal : 0;
    
    
    super.receberDano(danoAplicado);
  }
}