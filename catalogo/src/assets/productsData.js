import * as pantera from "./pantera";
import * as vero from "./vero";
import * as cometin from "./cometin";
import * as delMonte from "./delMonte";
import * as grup from "./glup";
import * as esmeralda from "./esmeralda";
import * as tresB from "./tresb";
import * as lipton from "./lipton";
import * as lumalac from "./lumalac";

// ...existing code...
export const panteraImages = [
  {
    src: pantera.caraotasRojas,
    title: "Caraotas Rojas",
    desc: "Caraotas rojas Pantera: selección premium de granos enteros, cuidadosamente clasificados para ofrecer una textura cremosa y un sabor profundo. Ricas en proteínas y fibra, aportan hierro y minerales esenciales; ideales para guisos tradicionales, ensaladas calientes y platos nutritivos. Conservan su calidad tras almacenamiento prolongado y son fáciles de cocinar.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002005",
    price: null,
  },
  {
    src: pantera.maiz500,
    title: "Maíz 500",
    desc: "Maíz para cotufas Pantera (500g): granos de alta calidad, consistencia uniforme y excelente rendimiento al reventar. Perfecto para snacks caseros y eventos; libre de olores extraños y procesado para mantener su frescura. Aporta carbohidratos de rápida absorción y es apto para compartir en familia.",
    brand: "Pantera",
    presentation: "250g - 500g",
    origin: "Venezuela",
    id: "002062 - 002012",
    price: null,
  },
  {
    src: pantera.caraotasNegras,
    title: "Caraotas Negras",
    desc: "Caraotas negras Pantera: grano de sabor intenso y textura firme tras la cocción. Fuente importante de fibra soluble e insoluble, ayudan a la digestión y mantienen la sensación de saciedad. Recomendadas para sopas, ensaladas y acompañamientos tradicionales por su color y aporte nutricional.",
    brand: "Pantera",
    presentation: "454g - 900g",
    origin: "Venezuela",
    id: "002079 - 002033",
    price: null,
  },
  {
    src: pantera.lentejas,
    title: "Lentejas",
    desc: "Lentejas Pantera: lentejas de cocción pareja, ricas en proteínas vegetales, hierro y complejos de B. Ideales para sopas, guisos y recetas familiares; su textura es suave y mantienen el sabor tras largos tiempos de cocción. Producto seleccionado para garantizar un grano consistente y nutritivo.",
    brand: "Pantera",
    presentation: "454g - 900g",
    origin: "Venezuela",
    id: "002082 - 002034",
    price: null,
  },
  {
    src: pantera.lentejasBebe,
    title: "Lentejas Bebe",
    desc: "Lentejas bebé Pantera: variedad de rápida cocción, de textura delicada y fácil digestión. Pensadas para purés, cremas y alimentación infantil; conservan propiedades nutritivas como hierro y fibra, y ofrecen una cocción más rápida que las variedades tradicionales.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002057",
    price: null,
  },
  {
    src: pantera.garbanzo,
    title: "Garbanzo",
    desc: "Garbanzos Pantera: grano firme y de sabor suave, perfecto para hummus, ensaladas y guisos. Alto contenido en proteínas y fibra; aporta minerales como zinc y magnesio. Seleccionado para mantener integridad en cocciones largas y asegurar una textura cremosa al triturar.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: null,
    price: null,
  },
  {
    src: pantera.avena,
    title: "Avena",
    desc: "Avena en hojuelas Pantera: copos integrales que aportan energía duradera y una buena porción de fibra soluble (beta-glucanos). Ideal para desayunos, batidos y recetas de repostería; contribuye al control del colesterol y mantiene sensación de saciedad.",
    brand: "Pantera",
    presentation: "200g - 400g - 800g",
    origin: "Venezuela",
    id: "002060 - 002017 - 002018",
    price: null,
  },
  {
    src: pantera.quinchoncho,
    title: "Quinchoncho",
    desc: "Quinchoncho Pantera: legumbre nutritiva con alta densidad de proteínas y minerales. Tradicional en platos locales, aporta lisina y otros aminoácidos esenciales; excelente como sustituto de la carne en preparaciones vegetarianas y guisos con alto valor proteico.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002011",
    price: null,
  },
  {
    src: pantera.arvejasVerdes,
    title: "Arvejas Verdes Partidas",
    desc: "Arvejas verdes partidas Pantera: perfectas para cremas, sopas y purés nutritivos. Aportan carbohidratos complejos, proteína vegetal y fibra; su textura suave tras la cocción las hace ideales para platos reconfortantes y fáciles de digerir.",
    brand: "Pantera",
    presentation: "400g - 900g",
    origin: "Venezuela",
    id: "002081 - 002038",
    price: null,
  },
  {
    src: pantera.arvejasAmarillas,
    title: "Arvejas Amarillas",
    desc: "Arvejas amarillas Pantera: legumbre versátil para sopas y purés, con cocción rápida y sabor delicado. Fuente de fibra y carbohidratos complejos, aportan energía sostenida y son excelentes para recetas tradicionales y modernas.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002061",
    price: null,
  },
  {
    src: pantera.semillasGirasol,
    title: "Semillas de Girasol",
    desc: "Semillas de girasol Pantera: crujientes y ricas en grasas saludables (ácidos grasos insaturados), vitamina E y fibra. Ideales como topping en ensaladas, panes y snacks; aportan textura y valor nutricional a preparaciones diarias.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002013",
    price: null,
  },
  {
    src: pantera.caraotasBlancas,
    title: "Caraotas Blancas",
    desc: "Caraotas blancas Pantera: grano tierno y versátil, con sabor ligero que acompaña múltiples recetas. Ricas en carbohidratos complejos y fibra, aportan energía equilibrada y son excelentes en guisos, ensaladas y como base para platos tradicionales.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002054",
    price: null,
  },
  {
    src: pantera.frijolPicoNegro,
    title: "Frijol Pico Negro",
    desc: "Frijol Pico Negro Pantera: variedad pequeña, de sabor concentrado y cocción uniforme. Alto aporte proteico y de fibra, perfecto para guisos tradicionales y preparaciones con fuerte carácter regional.",
    brand: "Pantera",
    presentation: "454g - 900g",
    origin: "Venezuela",
    id: "002055",
    price: null,
  },
  {
    src: pantera.frijolBayo,
    title: "Frijol Bayo",
    desc: "Frijol Bayo Pantera: grano de textura agradable y sabor suave, muy adaptable a diferentes métodos de cocción. Aporta proteínas y minerales, y es ideal para recetas familiares y platillos cotidianos.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002051",
    price: null,
  },
  {
    src: pantera.caraotasRosada,
    title: "Caraota Rosada",
    desc: "Caraota rosada Pantera: variedad delicada con sabor sutil, perfecta para sopas y guisos ligeros. Ofrece buena digestibilidad y aporte de fibra, resultando en platos equilibrados y nutritivos.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002052",
    price: null,
  },
  {
    src: pantera.alpiste,
    title: "Alpiste",
    desc: "Alpiste Pantera: semilla energética, adecuada para mezclas de frutos secos, panes y snacks saludables. Fuente de grasas saludables y micronutrientes; aporta textura y sabor a preparaciones fitness y de consumo diario.",
    brand: "Pantera",
    presentation: "200g - 500g",
    origin: "Venezuela",
    id: "002035 - 002020",
    price: null,
  },
  {
    src: pantera.quinoaEstuche,
    title: "Quinoa Estuche",
    desc: "Quinoa Pantera: pseudocereal multiuso, rica en proteínas completas, fibra y minerales como magnesio y hierro. Apta para ensaladas, guarniciones y platos principales; aporta textura ligera y un perfil nutricional superior.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002076",
    price: null,
  },
  {
    src: pantera.chiaEstuche,
    title: "Chía",
    desc: "Chía Pantera: semillas pequeñas y poderosas en omega-3, fibra y antioxidantes. Ideales para puddings, batidos y como espesante natural; ayudan a la saciedad y son un complemento nutricional versátil.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002075",
    price: null,
  },
  {
    src: pantera.cebadaEstuche,
    title: "Cebada Estuche",
    desc: "Cebada Pantera en estuche: cereal nutritivo y fuente de fibra soluble, adecuado para sopas, guisos y bebidas tradicionales. Contribuye a la salud digestiva y aporta textura agradable en diversas preparaciones.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002071",
    price: null,
  },
  {
    src: pantera.harinaMaiz,
    title: "Harina de Maíz",
    desc: "Harina de Maíz Pantera: molienda fina pensada para arepas, empanadas y recetas tradicionales. Conserva sabor natural del maíz y ofrece una textura homogénea para masas y preparaciones de panadería casera.",
    brand: "Pantera",
    presentation: "900g",
    origin: "Venezuela",
    id: "002080",
    price: null,
  },
  {
    src: pantera.cebada,
    title: "Cebada",
    desc: "Cebada Pantera: cereal integral, versátil en cocina y bebidas; aporta carbohidratos complejos, fibra y minerales. Recomendada para sopas, guisos y preparaciones energéticas.",
    brand: "Pantera",
    presentation: "250g",
    id: "7591794010199",
    origin: "Venezuela",
    price: null,
  },
  {
    src: pantera.lentejaRoja,
    title: "Lenteja Roja Partida",
    desc: "Lenteja roja partida Pantera: cocción rápida, textura suave y sabor dulce-terroso. Ideal para cremas, purés y platos reconfortantes; ofrece aporte proteico y digestibilidad elevada.",
    brand: "Pantera",
    presentation: "454g",
    id: "002085",
    origin: "Venezuela",
    price: null,
  },
  {
    src: pantera.lentejaFrancesa,
    title: "Lenteja Francesa",
    desc: "Lenteja francesa Pantera: grano pequeño y firme que conserva su forma tras la cocción; perfecta para ensaladas y guisos. Rica en proteínas y fibra, aporta valor nutricional sin perder textura.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002069",
    price: null,
  },
  {
    src: pantera.lentejaIberica,
    title: "Lenteja Ibérica",
    desc: "Lenteja ibérica Pantera: variedad tradicional con sabor profundo y textura carnosa; ideal para potajes y platos calientes de larga cocción. Aporta proteínas, fibra y un perfil nutricional balanceado.",
    brand: "Pantera",
    presentation: "454g",
    id: "002056",
    origin: "Venezuela",
    price: null,
  },
  {
    src: pantera.frijolVerde,
    title: "Frijol Verde",
    desc: "Frijol verde Pantera: grano tierno y versátil, apto para conservas, guisos y ensaladas. Aporta nutrientes esenciales y es fácil de preparar en recetas cotidianas.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002064",
    price: null,
  },
  {
    src: pantera.lentejaBeluga,
    title: "Lenteja Beluga",
    desc: "Lenteja Beluga Pantera: grano pequeño, oscuro y con textura firme, ideal para platos gourmet y ensaladas sofisticadas. Ricas en proteínas y con una presentación elegante en la cocina.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002067",
    price: null,
  },
   {
    src: pantera.frijolBlanco,
    title: "Frijol Blanco",
    desc: "Frijol blanco Pantera: grano suave y versátil, ideal para guisos, ensaladas y platos tradicionales. Rico en proteínas y fibra, aporta energía y nutrientes esenciales.",
    brand: "Pantera",
    presentation: "454g",
    origin: "Venezuela",
    id: "002068",
    price: null,
  },
];

export const tresBImages = [
  {
    src: tresB.panalAzulg10,
    title: "Pañal Azul G10",
    desc: "Pañal azul talla G, paquete de 10 unidades.",
  },
  {
    src: tresB.panalAzulg30,
    title: "Pañal Azul G30",
    desc: "Pañal azul talla G, paquete de 30 unidades.",
  },
  {
    src: tresB.panalAzulm11,
    title: "Pañal Azul M11",
    desc: "Pañal azul talla M, paquete de 11 unidades.",
  },
  {
    src: tresB.panalAzulm33,
    title: "Pañal Azul M33",
    desc: "Pañal azul talla M, paquete de 33 unidades.",
  },
  {
    src: tresB.panalAzulp12,
    title: "Pañal Azul P12",
    desc: "Pañal azul talla P, paquete de 12 unidades.",
  },
  {
    src: tresB.panalAzulp36,
    title: "Pañal Azul P36",
    desc: "Pañal azul talla P, paquete de 36 unidades.",
  },
  {
    src: tresB.panalAzulxg9,
    title: "Pañal Azul XG9",
    desc: "Pañal azul talla XG, paquete de 9 unidades.",
  },
  {
    src: tresB.panalAzulxg27,
    title: "Pañal Azul XG27",
    desc: "Pañal azul talla XG, paquete de 27 unidades.",
  },
  {
    src: tresB.panalAdultol,
    title: "Pañal Adulto L",
    desc: "Pañal adulto talla L.",
  },
  {
    src: tresB.panalAdultom,
    title: "Pañal Adulto M",
    desc: "Pañal adulto talla M.",
  },
  {
    src: tresB.panalAdultoxl,
    title: "Pañal Adulto XL",
    desc: "Pañal adulto talla XL.",
  },
  {
    src: tresB.panalesPremiumAdultol,
    title: "Pañal Premium Adulto L",
    desc: "Pañal premium adulto talla L.",
  },
  {
    src: tresB.panalesPremiumAdultom,
    title: "Pañal Premium Adulto M",
    desc: "Pañal premium adulto talla M.",
  },
  {
    src: tresB.panalesPremiumAdultoxl,
    title: "Pañal Premium Adulto XL",
    desc: "Pañal premium adulto talla XL.",
  },
  {
    src: tresB.panalesRojog20,
    title: "Pañal Rojo G20",
    desc: "Pañal rojo talla G, paquete de 20 unidades.",
  },
  {
    src: tresB.panalesRojom20,
    title: "Pañal Rojo M20",
    desc: "Pañal rojo talla M, paquete de 20 unidades.",
  },
  {
    src: tresB.panalesRojop20,
    title: "Pañal Rojo P20",
    desc: "Pañal rojo talla P, paquete de 20 unidades.",
  },
  {
    src: tresB.panalesRojoxg20,
    title: "Pañal Rojo XG20",
    desc: "Pañal rojo talla XG, paquete de 20 unidades.",
  },
  {
    src: tresB.protectorCama,
    title: "Protector de Cama",
    desc: "Protector de cama absorbente.",
  },
  {
    src: tresB.toallaDiurna,
    title: "Toalla Diurna",
    desc: "Toalla sanitaria diurna.",
  },
  {
    src: tresB.toallaNocturna,
    title: "Toalla Nocturna",
    desc: "Toalla sanitaria nocturna.",
  },
  {
    src: tresB.toallaPremiumDiurna,
    title: "Toalla Premium Diurna",
    desc: "Toalla premium diurna.",
  },
  {
    src: tresB.toallaPremiumNocturna,
    title: "Toalla Premium Nocturna",
    desc: "Toalla premium nocturna.",
  },
];

export const lumalacImages = [
  {
    src: lumalac.chicha,
    title: "Chichalac",
    desc: "Snack Chichalac, delicioso y crujiente.",
  },
  {
    src: lumalac.leche,
    title: "Leche Lumalac",
    desc: "Leche en polvo Lumalac, fuente de calcio y energía.",
  },
  {
    src: lumalac.lechecao,
    title: "Lechecao",
    desc: "Leche con cacao Lumalac, ideal para desayunos y meriendas.",
  },
  {
    src: lumalac.lifeteaDurazno,
    title: "Life Tea Durazno",
    desc: "Bebida Life Tea sabor durazno, refrescante y natural.",
  },
  {
    src: lumalac.lifeteaLimon,
    title: "Life Tea Limón",
    desc: "Bebida Life Tea sabor limón, perfecta para cualquier momento.",
  },
  {
    src: lumalac.nutrisoy,
    title: "Nutrisoy",
    desc: "Bebida Nutrisoy, nutritiva y saludable.",
  },
];

export const liptonImages = [
  {
    src: lipton.teChai,
    title: "Té Chai",
    desc: "Té Lipton Chai, mezcla especiada y aromática.",
  },
  {
    src: lipton.teCondeGris,
    title: "Té Conde Gris",
    desc: "Té Lipton Conde Gris, sabor clásico y elegante.",
  },
  {
    src: lipton.teJengibrePina,
    title: "Té Jengibre Piña",
    desc: "Té Lipton con jengibre y piña, refrescante y exótico.",
  },
  {
    src: lipton.teJengibreRosa,
    title: "Té Jengibre Rosa",
    desc: "Té Lipton con jengibre y rosa, suave y floral.",
  },
  {
    src: lipton.teManzanilla,
    title: "Té Manzanilla",
    desc: "Té Lipton de manzanilla, relajante y natural.",
  },
  {
    src: lipton.teManzanillaMiel,
    title: "Té Manzanilla Miel",
    desc: "Té Lipton de manzanilla con miel, dulce y reconfortante.",
  },
  {
    src: lipton.teNaranja,
    title: "Té Naranja",
    desc: "Té Lipton sabor naranja, cítrico y refrescante.",
  },
  {
    src: lipton.teNegro,
    title: "Té Negro",
    desc: "Té Lipton negro, intenso y tradicional.",
  },
  {
    src: lipton.tePomelo,
    title: "Té Pomelo",
    desc: "Té Lipton sabor pomelo, fresco y afrutado.",
  },
  {
    src: lipton.teVerde,
    title: "Té Verde",
    desc: "Té Lipton verde, antioxidante y saludable.",
  },
  {
    src: lipton.teVerdeCitricos,
    title: "Té Verde Cítricos",
    desc: "Té Lipton verde con cítricos, refrescante y ligero.",
  },
  {
    src: lipton.teVerdeFrutosRojos,
    title: "Té Verde Frutos Rojos",
    desc: "Té Lipton verde con frutos rojos, dulce y afrutado.",
  },
];

export const delMonteImages = [
  {
    src: delMonte.coctelFrutas,
    title: "Cóctel de Frutas",
    desc: "Cóctel de frutas en almíbar, ideal para postres y meriendas.",
  },
  {
    src: delMonte.durazno,
    title: "Durazno",
    desc: "Duraznos en almíbar, perfectos para disfrutar solos o en recetas.",
  },
  {
    src: delMonte.ensaladaFrutas,
    title: "Ensalada de Frutas",
    desc: "Ensalada de frutas variadas en almíbar.",
  },
  {
    src: delMonte.guisantico,
    title: "Guisantico",
    desc: "Guisantes enlatados, prácticos y nutritivos.",
  },
  {
    src: delMonte.guisantes,
    title: "Guisantes",
    desc: "Guisantes verdes, fuente de proteína vegetal.",
  },
  {
    src: delMonte.guisanteZanahoria,
    title: "Guisantes con Zanahoria",
    desc: "Mezcla de guisantes y zanahorias, lista para servir.",
  },
  {
    src: delMonte.jugoDurazno,
    title: "Jugo de Durazno",
    desc: "Jugo natural de durazno, refrescante y delicioso.",
  },
  {
    src: delMonte.jugoMango,
    title: "Jugo de Mango",
    desc: "Jugo de mango, ideal para acompañar tus comidas.",
  },
  {
    src: delMonte.jugoManzana,
    title: "Jugo de Manzana",
    desc: "Jugo de manzana, sabor suave y natural.",
  },
  {
    src: delMonte.jugoPera,
    title: "Jugo de Pera",
    desc: "Jugo de pera, perfecto para cualquier ocasión.",
  },
  {
    src: delMonte.ketchup,
    title: "Ketchup",
    desc: "Ketchup Del Monte, el complemento ideal para tus comidas.",
  },
  {
    src: delMonte.maizEntero,
    title: "Maíz Entero",
    desc: "Granos de maíz enteros, dulces y tiernos.",
  },
  {
    src: delMonte.maizTaf,
    title: "Maíz TAF",
    desc: "Maíz TAF, práctico y delicioso para tus recetas.",
  },
];

export const glupImages = [
  {
    src: grup.cola,
    title: "Glup Cola",
    desc: "Refresco sabor cola, refrescante y delicioso.",
  },
  {
    src: grup.kolita,
    title: "Glup Kolita",
    desc: "Refresco sabor kolita, ideal para cualquier ocasión.",
  },
  {
    src: grup.fresh,
    title: "Glup Fresh",
    desc: "Refresco Glup Fresh, sabor único y refrescante.",
  },
  {
    src: grup.justy,
    title: "Glup Justy",
    desc: "Refresco Glup Justy, perfecto para compartir.",
  },
  {
    src: grup.uva,
    title: "Glup Uva",
    desc: "Refresco sabor uva, dulce y refrescante.",
  },
];

export const veroImages = [
  { src: vero.rojo100, title: "Vero Rojo", desc: "Descripción de Vero Rojo" },
  { src: vero.azul100, title: "Vero Azul", desc: "Descripción de Vero Azul" },
  {
    src: vero.azulito50,
    title: "Vero Verde",
    desc: "Descripción de Vero Verde",
  },
];

export const cometinImages = [
  {
    src: cometin.arosCebolla,
    title: "Aros de Cebolla",
    desc: "Snack sabor cebolla, crujiente y delicioso.",
  },
  {
    src: cometin.arosMaiz,
    title: "Aros de Maíz",
    desc: "Aros de maíz con sabor tradicional.",
  },
  {
    src: cometin.arosPicante,
    title: "Aros Picantes",
    desc: "Aros con un toque picante para los amantes del sabor fuerte.",
  },
  {
    src: cometin.arosTocineta,
    title: "Aros Tocineta",
    desc: "Aros sabor tocineta, irresistibles.",
  },
  {
    src: cometin.bolitaQueso,
    title: "Bolitas de Queso",
    desc: "Bolitas crujientes con sabor a queso.",
  },
  {
    src: cometin.chicharron,
    title: "Chicharrón",
    desc: "Snack tipo chicharrón, perfecto para compartir.",
  },
  {
    src: cometin.chulitos,
    title: "Chulitos",
    desc: "Chulitos tradicionales, ideales para picar.",
  },
  {
    src: cometin.cotufasCarameladas,
    title: "Cotufas Carameladas",
    desc: "Palomitas dulces con caramelo.",
  },
  {
    src: cometin.maniFamiliar,
    title: "Maní Familiar",
    desc: "Maní en presentación familiar.",
  },
  {
    src: cometin.maniJapones,
    title: "Maní Japonés",
    desc: "Maní japonés, crujiente y sabroso.",
  },
  {
    src: cometin.maniMerey,
    title: "Maní con Merey",
    desc: "Maní combinado con merey.",
  },
  {
    src: cometin.maniPasas,
    title: "Maní con Pasas",
    desc: "Maní mezclado con pasas.",
  },
  {
    src: cometin.merey,
    title: "Merey",
    desc: "Merey natural, fuente de energía.",
  },
  {
    src: cometin.palitoCebolla,
    title: "Palitos de Cebolla",
    desc: "Palitos sabor cebolla, perfectos para picar.",
  },
  {
    src: cometin.palitoQueso,
    title: "Palitos de Queso",
    desc: "Palitos crujientes con sabor a queso.",
  },
  {
    src: cometin.palitoPapa,
    title: "Palitos de Papa",
    desc: "Palitos de papa, clásicos y deliciosos.",
  },
];

export const esmeraldaImages = [
  {
    src: esmeralda.sal500,
    title: "Sal Esmeralda 500g",
    desc: "Sal refinada Esmeralda en presentación de 500 gramos.",
  },
  {
    src: esmeralda.sal1000,
    title: "Sal Esmeralda 1000g",
    desc: "Sal refinada Esmeralda en presentación de 1 kilogramo.",
  },
  {
    src: esmeralda.salAhumada,
    title: "Sal Ahumada",
    desc: "Sal Esmeralda con sabor ahumado, ideal para parrillas.",
  },
  {
    src: esmeralda.salAjo,
    title: "Sal con Ajo",
    desc: "Sal Esmeralda con ajo, perfecta para sazonar tus comidas.",
  },
  {
    src: esmeralda.salFinasHierbas,
    title: "Sal Finas Hierbas",
    desc: "Sal Esmeralda con finas hierbas para realzar el sabor.",
  },
  {
    src: esmeralda.salParrilla,
    title: "Sal Parrilla",
    desc: "Sal Esmeralda especial para parrillas y asados.",
  },
  {
    src: esmeralda.salRosada,
    title: "Sal Rosada",
    desc: "Sal rosada Esmeralda, fuente natural de minerales.",
  },
];
