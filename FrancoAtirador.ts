import { Combatente } from "./combatente";
import { AcaoTatica } from "./AcaoTatica";

export class FrancoAtirador extends Combatente implements AcaoTatica {
  private _municaoEspecial: number;

  constructor(nome: string, vida: number, poderDeFogo: number, municaoEspecial: number) {
    super(nome, vida, poderDeFogo);
    this._municaoEspecial = municaoEspecial;
  }

  public get municaoEspecial(): number {
    return this._municaoEspecial;
  }

  public set municaoEspecial(valor: number) {
    this._municaoEspecial = valor < 0 ? 0 : valor;
  }

  public atacar(alvo: Combatente): void {
    if (this._municaoEspecial >= 1) {
      this._municaoEspecial -= 1;
      const dano = this.getPoderDeFogo() * 2; 
      console.log(
        `[TIRO DE PRECISÃO] ${this.getNome()} efetuou um tiro de sniper em ${alvo.getNome()} causando ${dano} de dano crítico! (Munições restantes: ${this._municaoEspecial})`
      );
      alvo.receberDano(dano);
    } else {
      const dano = Math.floor(this.getPoderDeFogo() / 2); 
      console.log(
        `[SEM MUNIÇÃO ESPECIAL] ${this.getNome()} usou a pistola reserva contra ${alvo.getNome()} causando apenas ${dano} de dano!`
      );
      alvo.receberDano(dano);
    }
  }

  public defender(): void {
    this.setVida(this.getVida() + 15);
    console.log(
      `${this.getNome()} usou um Kit de Primeiros Socorros e recuperou 15 de vida! (Vida Atual: ${this.getVida()})`
    );
  }
}