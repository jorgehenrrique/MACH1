import juros from "./calculos/juros.mjs";
import multa from "./calculos/multa.mjs";

const SomarJuros = juros(100, 15);
const SomarMulta = multa(100, 30);

console.log(SomarJuros + SomarMulta);
