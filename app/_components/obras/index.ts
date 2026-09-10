import { HeroClinica, fragmentosClinica } from "./Clinica";
import { HeroLogistica, fragmentosLogistica } from "./Logistica";
import { HeroSistema, fragmentosSistema } from "./Sistema";
import { HeroTesoreria, fragmentosTesoreria } from "./Tesoreria";

type Obra = { producto: string; descripcion: string; Hero: () => React.ReactNode };

export const obras: Record<string, Obra> = {
  "consola-logistica": {
    producto: "Tráfico · Consola de operaciones",
    descripcion:
      "Consola de envíos agrupada por estado, con las incidencias arriba y un panel lateral que muestra un vehículo averiado, su ruta y la acción para reasignarlo.",
    Hero: HeroLogistica,
  },
  "agenda-quirurgica": {
    producto: "Bloque Q · Agenda quirúrgica",
    descripcion:
      "Línea de tiempo de seis quirófanos con intervenciones, limpiezas y tramos reservados para urgencias; un conflicto de anestesia aparece marcado con una alternativa propuesta.",
    Hero: HeroClinica,
  },
  "sistema-multimarca": {
    producto: "Atlas · Sistema de diseño",
    descripcion:
      "Documentación de tokens de color semánticos con su valor, uso y contraste, y una vista previa del mismo componente en tres marcas.",
    Hero: HeroSistema,
  },
  "conciliacion-pymes": {
    producto: "Cuadra · Conciliación bancaria",
    descripcion:
      "Bandeja de conciliación con movimientos bancarios emparejados a facturas, cada uno con su nivel de confianza y sus motivos, y una propuesta para crear una regla.",
    Hero: HeroTesoreria,
  },
};

const fragmentos = {
  ...fragmentosLogistica,
  ...fragmentosClinica,
  ...fragmentosSistema,
  ...fragmentosTesoreria,
};

export function fragmento(id: string, estado: "antes" | "despues") {
  return fragmentos[id]?.(estado) ?? null;
}
