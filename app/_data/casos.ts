import type { PictogramaId } from "../_components/Pictograma";

// EJEMPLO: los cuatro casos son ficticios. Sustituir por los casos reales de Xavier.

export type Decision = {
  titulo: string;
  texto: string;
  fragmento: string;
  antes: string;
  despues: string;
};

export type Caso = {
  slug: string;
  titulo: string;
  dominio: string;
  resumen: string;
  campo: string;
  pictograma: PictogramaId;
  rol: string;
  equipo: string;
  duracion: string;
  plataforma: string;
  anio: string;
  problema: {
    texto: string[];
    inventario: { valor: string; etiqueta: string }[];
  };
  sistema: {
    texto: string;
    roles: string[];
    tareas: string[];
    // 0 no participa · 1 participa · 2 es responsable
    matriz: (0 | 1 | 2)[][];
  };
  decisiones: Decision[];
  resultado: {
    texto: string;
    filas: { metrica: string; antes: string; despues: string }[];
  };
  aprendizaje: string;
};

export const casos: Caso[] = [
  {
    slug: "consola-logistica",
    titulo: "Consola de operaciones logísticas",
    dominio: "Logística B2B",
    resumen:
      "Una sola herramienta para que 40 coordinadores de tráfico gestionen 3.000 envíos diarios sin perder de vista las incidencias.",
    campo: "var(--f-logistica)",
    pictograma: "logistica",
    rol: "Product designer principal",
    equipo: "1 PM · 4 ingenieros · 1 research",
    duracion: "9 meses",
    plataforma: "Web de escritorio",
    anio: "2025",
    problema: {
      texto: [
        "Cada turno, los coordinadores saltaban entre cinco aplicaciones para seguir un mismo envío. La tabla principal tenía catorce columnas y ninguna jerarquía: un camión averiado pesaba lo mismo que una entrega a tiempo.",
        "Las incidencias se descubrían tarde, casi siempre por una llamada del cliente. El problema no era la falta de datos, sino que todos los datos gritaban a la vez.",
      ],
      inventario: [
        { valor: "14", etiqueta: "columnas en la tabla principal" },
        { valor: "5", etiqueta: "aplicaciones abiertas por turno" },
        { valor: "3", etiqueta: "sistemas heredados sin API común" },
        { valor: "4", etiqueta: "roles con permisos distintos" },
      ],
    },
    sistema: {
      texto:
        "Antes de dibujar pantallas mapeamos quién hace qué. La matriz dejó claro que el coordinador era responsable de casi todo, pero solo tenía herramientas para mirar.",
      roles: ["Coordinación de tráfico", "Jefatura de turno", "Atención al cliente", "Transportista"],
      tareas: ["Asignar rutas", "Resolver incidencias", "Reprogramar entregas", "Informar al cliente", "Cerrar el turno"],
      matriz: [
        [2, 2, 2, 1, 1],
        [1, 1, 0, 0, 2],
        [0, 1, 1, 2, 0],
        [1, 1, 1, 0, 0],
      ],
    },
    decisiones: [
      {
        titulo: "Cinco columnas y un panel de detalle",
        texto:
          "Observando turnos reales vimos que solo cinco columnas se usaban para decidir. El resto pasó a un panel lateral que se abre al seleccionar un envío, sin perder la posición en la lista.",
        fragmento: "log-tabla",
        antes: "14 columnas, todas al mismo nivel",
        despues: "5 columnas para decidir, el resto en el panel",
      },
      {
        titulo: "Las incidencias, primero",
        texto:
          "La lista dejó de ordenarse por número de envío. Ahora se agrupa por estado, y lo que necesita una persona aparece arriba, con el motivo escrito en lenguaje de operación.",
        fragmento: "log-incidencias",
        antes: "Orden por número de envío",
        despues: "Agrupado por estado, incidencias arriba",
      },
      {
        titulo: "Acciones en bloque",
        texto:
          "Reprogramar veinte entregas por una carretera cortada exigía veinte clics idénticos. Una barra de selección convierte ese trabajo en una sola decisión.",
        fragmento: "log-bloque",
        antes: "Un botón por fila",
        despues: "Selección múltiple y una barra de acciones",
      },
    ],
    resultado: {
      texto:
        "Medido en un piloto de ocho semanas con dos centros de operaciones, frente a los turnos del mismo periodo del año anterior.",
      filas: [
        { metrica: "Tiempo medio para resolver una incidencia", antes: "11 min", despues: "4 min" },
        { metrica: "Aplicaciones abiertas por turno", antes: "5", despues: "2" },
        { metrica: "Incidencias detectadas antes de que llame el cliente", antes: "31 %", despues: "78 %" },
      ],
    },
    aprendizaje:
      "La densidad no era el enemigo. Los coordinadores querían ver mucho; lo que necesitaban era que la pantalla decidiera qué merecía su atención primero.",
  },
  {
    slug: "agenda-quirurgica",
    titulo: "Agenda quirúrgica hospitalaria",
    dominio: "Salud",
    resumen:
      "Planificar 12 quirófanos, sus equipos y las urgencias del día en una vista que el personal entiende de un vistazo.",
    campo: "var(--f-clinica)",
    pictograma: "clinica",
    rol: "Product designer",
    equipo: "1 PM · 3 ingenieros · 2 enfermeras consultoras",
    duracion: "7 meses",
    plataforma: "Web y pantallas de control",
    anio: "2024",
    problema: {
      texto: [
        "La planificación quirúrgica vivía en una hoja de cálculo compartida y en una pizarra. Cada cambio de última hora obligaba a llamar a cinco personas para confirmar quién estaba libre.",
        "Los conflictos (un anestesista en dos quirófanos, una sala sin limpiar) solo aparecían al guardar, cuando ya era tarde para resolverlos con calma.",
      ],
      inventario: [
        { valor: "12", etiqueta: "quirófanos en tres plantas" },
        { valor: "6", etiqueta: "perfiles profesionales implicados" },
        { valor: "40+", etiqueta: "cambios de agenda al día" },
        { valor: "2", etiqueta: "fuentes de verdad en conflicto" },
      ],
    },
    sistema: {
      texto:
        "Cada intervención depende de una sala, un equipo y un paciente preparado. Mapear esas dependencias mostró que la unidad de planificación no era el paciente, sino el quirófano en el tiempo.",
      roles: ["Supervisión de bloque", "Cirugía", "Anestesia", "Enfermería", "Limpieza"],
      tareas: ["Programar", "Confirmar equipo", "Preparar sala", "Atender urgencia", "Cerrar el día"],
      matriz: [
        [2, 2, 1, 2, 2],
        [1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 2, 0, 0],
      ],
    },
    decisiones: [
      {
        titulo: "El quirófano como eje",
        texto:
          "La lista de pacientes se convirtió en una línea de tiempo por quirófano. Los huecos, los retrasos y las salas libres se ven por su forma, sin tener que leerlos.",
        fragmento: "cli-linea",
        antes: "Lista de pacientes por hora",
        despues: "Línea de tiempo por quirófano",
      },
      {
        titulo: "Conflictos donde ocurren",
        texto:
          "En lugar de un error al guardar, el conflicto aparece en la propia celda en cuanto existe, con la persona afectada y una alternativa propuesta.",
        fragmento: "cli-conflicto",
        antes: "Error genérico al guardar",
        despues: "Aviso en la celda, con alternativa",
      },
      {
        titulo: "Un hueco reservado para urgencias",
        texto:
          "Cada bloque reserva un tramo para urgencias que se ve siempre, aunque esté vacío. Programar encima exige una decisión explícita, no un descuido.",
        fragmento: "cli-urgencia",
        antes: "Urgencias encajadas donde cabían",
        despues: "Tramo de urgencias visible y protegido",
      },
    ],
    resultado: {
      texto: "Datos de un piloto de tres meses en un bloque quirúrgico de doce salas.",
      filas: [
        { metrica: "Llamadas para confirmar un cambio", antes: "5", despues: "1" },
        { metrica: "Conflictos detectados después de programar", antes: "22 / mes", despues: "3 / mes" },
        { metrica: "Tiempo de planificación diaria", antes: "90 min", despues: "35 min" },
      ],
    },
    aprendizaje:
      "En un entorno clínico, la confianza en la herramienta se gana mostrando lo que no se puede hacer antes de que alguien lo intente.",
  },
  {
    slug: "sistema-multimarca",
    titulo: "Sistema de diseño multimarca",
    dominio: "Plataforma de seguros",
    resumen:
      "Un sistema de diseño basado en tokens para seis marcas y cuatro equipos de producto que antes diseñaban cada uno por su cuenta.",
    campo: "var(--f-sistema)",
    pictograma: "sistema",
    rol: "Design system lead",
    equipo: "2 diseñadores · 3 ingenieros front-end",
    duracion: "12 meses",
    plataforma: "Web y apps nativas",
    anio: "2023",
    problema: {
      texto: [
        "Seis marcas compartían la misma plataforma técnica, pero no la misma interfaz. Cada equipo había resuelto el mismo formulario a su manera y cada cambio de marca exigía tocar cientos de pantallas.",
        "El coste no estaba solo en el diseño: el mismo error de accesibilidad se corregía seis veces, en seis bases de código.",
      ],
      inventario: [
        { valor: "7", etiqueta: "versiones distintas del botón principal" },
        { valor: "6", etiqueta: "marcas sobre la misma plataforma" },
        { valor: "412", etiqueta: "colores sueltos en el código" },
        { valor: "4", etiqueta: "equipos de producto independientes" },
      ],
    },
    sistema: {
      texto:
        "El sistema tenía que servir a quien diseña, a quien programa y a quien decide la marca. Mapear quién toca cada capa definió la arquitectura: tokens, componentes y temas.",
      roles: ["Diseño de producto", "Front-end", "Marca", "Accesibilidad"],
      tareas: ["Definir tokens", "Construir componentes", "Crear un tema", "Auditar", "Publicar versiones"],
      matriz: [
        [1, 1, 1, 0, 0],
        [1, 2, 1, 1, 2],
        [2, 0, 2, 0, 0],
        [1, 1, 0, 2, 1],
      ],
    },
    decisiones: [
      {
        titulo: "Tokens con nombre de intención",
        texto:
          "Los colores dejaron de llamarse por su valor y pasaron a llamarse por su función. Cambiar una marca es cambiar un tema, no buscar y reemplazar.",
        fragmento: "sis-tokens",
        antes: "Valores hexadecimales sueltos",
        despues: "Tokens semánticos por función",
      },
      {
        titulo: "Un botón, no siete",
        texto:
          "Auditamos las siete variantes y encontramos tres necesidades reales. El nuevo componente las cubre con variantes explícitas y estados completos.",
        fragmento: "sis-boton",
        antes: "7 botones sin reglas comunes",
        despues: "1 componente, 3 variantes, todos los estados",
      },
      {
        titulo: "Una marca es un tema",
        texto:
          "Cada marca se define en un solo archivo de tema. Lanzar la séptima marca pasó de un proyecto de meses a una tarea de días.",
        fragmento: "sis-temas",
        antes: "Estilos por marca repartidos en el código",
        despues: "Un archivo de tema por marca",
      },
    ],
    resultado: {
      texto: "Medido doce meses después del lanzamiento de la primera versión estable.",
      filas: [
        { metrica: "Pantallas construidas con el sistema", antes: "0 %", despues: "84 %" },
        { metrica: "Tiempo para lanzar una marca nueva", antes: "4 meses", despues: "6 días" },
        { metrica: "Errores de contraste abiertos", antes: "137", despues: "9" },
      ],
    },
    aprendizaje:
      "Un sistema de diseño es un producto con usuarios internos. Se adoptó cuando empezamos a medir su uso como medimos cualquier otra funcionalidad.",
  },
  {
    slug: "conciliacion-pymes",
    titulo: "Conciliación bancaria para pymes",
    dominio: "Fintech",
    resumen:
      "Convertir 2.000 movimientos bancarios al mes en una lista corta de lo que de verdad necesita la revisión de una persona.",
    campo: "var(--f-tesoreria)",
    pictograma: "tesoreria",
    rol: "Senior product designer",
    equipo: "1 PM · 5 ingenieros · 1 data scientist",
    duracion: "8 meses",
    plataforma: "Web",
    anio: "2023",
    problema: {
      texto: [
        "Las gestorías conciliaban a mano cada movimiento con su factura. El producto ya sugería emparejamientos, pero nadie se fiaba de ellos porque no explicaba por qué.",
        "El resultado era el peor de los mundos: la automatización existía, y aun así todo se revisaba dos veces.",
      ],
      inventario: [
        { valor: "2.000", etiqueta: "movimientos al mes por cliente" },
        { valor: "11", etiqueta: "bancos con formatos distintos" },
        { valor: "0", etiqueta: "explicaciones en cada sugerencia" },
        { valor: "2×", etiqueta: "revisión de cada movimiento" },
      ],
    },
    sistema: {
      texto:
        "Separamos lo que la máquina hace con certeza de lo que necesita criterio. La matriz de tareas mostró que la gestoría quería supervisar, no teclear.",
      roles: ["Gestoría", "Pyme cliente", "Motor de sugerencias", "Soporte"],
      tareas: ["Importar extractos", "Emparejar", "Revisar dudas", "Crear reglas", "Cerrar el mes"],
      matriz: [
        [1, 1, 2, 2, 2],
        [1, 0, 1, 0, 0],
        [2, 2, 0, 1, 0],
        [1, 0, 1, 0, 0],
      ],
    },
    decisiones: [
      {
        titulo: "Sugerencias que se explican",
        texto:
          "Cada emparejamiento muestra su nivel de confianza y el motivo: importe, fecha, referencia. Lo seguro se acepta en bloque; lo dudoso pide una mirada.",
        fragmento: "tes-sugerencia",
        antes: "Emparejamiento sin explicación",
        despues: "Confianza y motivo visibles",
      },
      {
        titulo: "Una bandeja, no un extracto",
        texto:
          "La pantalla principal dejó de ser el extracto bancario completo. Ahora es una bandeja con lo pendiente, y se vacía a medida que se trabaja.",
        fragmento: "tes-bandeja",
        antes: "Extracto completo de 2.000 líneas",
        despues: "Bandeja de pendientes que se vacía",
      },
      {
        titulo: "Reglas desde el propio gesto",
        texto:
          "Al emparejar dos veces el mismo patrón, la herramienta propone convertirlo en regla. Las reglas nacen del trabajo, no de un formulario de configuración.",
        fragmento: "tes-regla",
        antes: "Reglas en un menú de configuración",
        despues: "Regla propuesta al repetir un gesto",
      },
    ],
    resultado: {
      texto: "Datos de 60 gestorías durante el primer trimestre tras el lanzamiento.",
      filas: [
        { metrica: "Movimientos que requieren revisión manual", antes: "100 %", despues: "14 %" },
        { metrica: "Tiempo de cierre mensual por cliente", antes: "6 h", despues: "1,5 h" },
        { metrica: "Sugerencias aceptadas sin cambios", antes: "38 %", despues: "91 %" },
      ],
    },
    aprendizaje:
      "La automatización solo ahorra tiempo cuando la gente puede confiar en ella, y la confianza se diseña: se gana explicando, no acertando en silencio.",
  },
];

export function getCaso(slug: string) {
  return casos.find((c) => c.slug === slug);
}

export function siguienteCaso(slug: string) {
  const i = casos.findIndex((c) => c.slug === slug);
  return casos[(i + 1) % casos.length];
}
