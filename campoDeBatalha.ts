
abstract class Combatente {
    constructor(
        protected nome: string,
        protected vida: number,
        protected poderAtaque: number
    ) {}

    public getNome(): string { return this.nome; }
    public getVida(): number { return this.vida; }
    public getPoderDeFogo(): number { return this.poderAtaque; }

    public estaVivo(): boolean {
        return this.vida > 0;
    }

    public receberDano(dano: number): void {
        this.vida = Math.max(0, this.vida - dano);
    }
}

class Infantaria extends Combatente {}
class FrancoAtirador extends Combatente {}




class CampoDeBatalha {
    public static iniciarOperacao(): void {
    
        const soldado = new Infantaria("Capitão Price", 120, 20);
        const sniper = new FrancoAtirador("Ghost", 85, 35);

        console.log("==================================================");
        console.log("       INICIANDO OPERAÇÃO: CAMPO DE BATALHA       ");
        console.log("==================================================");
        console.log(`${soldado.getNome()} [Vida: ${soldado.getVida()} | Ataque: ${soldado.getPoderDeFogo()}]`);
        console.log(`${sniper.getNome()} [Vida: ${sniper.getVida()} | Ataque: ${sniper.getPoderDeFogo()}]`);
        console.log("--------------------------------------------------\n");

        let turno = 1;

        
        while (soldado.estaVivo() && sniper.estaVivo()) {
            console.log(`--- TURNO ${turno} ---`);

            // Vez do Capitão Price atacar
            if (soldado.estaVivo()) {
                const danoPrice = soldado.getPoderDeFogo();
                sniper.receberDano(danoPrice);
                console.log(`💥 ${soldado.getNome()} disparou contra ${sniper.getNome()} causando ${danoPrice} de dano!`);
                console.log(`👉 ${sniper.getNome()} restante de vida: ${sniper.getVida()}`);
            }

            console.log("");

          
            if (sniper.estaVivo()) {
                const danoGhost = sniper.getPoderDeFogo();
                soldado.receberDano(danoGhost);
                console.log(`💥 ${sniper.getNome()} disparou contra ${soldado.getNome()} causando ${danoGhost} de dano!`);
                console.log(`👉 ${soldado.getNome()} restante de vida: ${soldado.getVida()}`);
            }

            turno++;
            console.log("--------------------------------------------------");
        }

       
        console.log("\n==================================================");
        console.log("                FIM DE COMBATE                    ");
        console.log("==================================================");

        if (soldado.estaVivo()) {
            console.log(`🏆 SOBREVIVENTE DA OPERAÇÃO: ${soldado.getNome().toUpperCase()} !!!`);
        } else if (sniper.estaVivo()) {
            console.log(`🏆 SOBREVIVENTE DA OPERAÇÃO: ${sniper.getNome().toUpperCase()} !!!`);
        } else {
            console.log("🪦 AMBOS OS COMBATENTES CAÍRAM EM COMBATE!");
        }
        
        console.log("==================================================");
    }
}


CampoDeBatalha.iniciarOperacao();
