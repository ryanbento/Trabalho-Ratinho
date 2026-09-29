import { Combatente } from "./combatente";

export interface AcaoTatica {
  atacar(alvo: Combatente): void;
  defender(): void;
}