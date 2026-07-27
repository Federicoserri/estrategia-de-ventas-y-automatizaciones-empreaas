/**
 * site-config.js
 * Fuente única de datos comerciales de Servi Luz.
 * Todo el sitio lee de acá: no repetir estos datos a mano en otros archivos.
 *
 * Campos marcados con "CONFIRMAR" en su comentario son placeholders técnicos
 * (necesarios para que el sitio funcione) y NO deben tomarse como datos reales.
 * Reemplazar antes de publicar. Ninguno de estos placeholders se muestra en
 * la interfaz como una afirmación editorial (no hay reseñas, marcas, horarios
 * ni calificaciones inventadas: esas secciones quedan ocultas hasta tener el dato real).
 */

const SITE_CONFIG = {
  business: {
    name: "Servi Luz",
    shortName: "Servi Luz",
    tagline: "Ferretería en Palermo",
    legalCategory: "Ferretería", // confirmado: rubro principal del local
    // CONFIRMAR: categorías secundarias reales (electricidad, iluminación, cerrajería, etc.)
    // Se completan en `categories` más abajo con la propiedad `confirmed`.
    description:
      "En Servi Luz encontrás productos para reparaciones, instalaciones y mantenimiento, con la posibilidad de consultar antes de acercarte al local.",
  },

  contact: {
    address: {
      street: "Juncal 3454",
      neighborhood: "Palermo",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "CABA",
      country: "Argentina",
      postalCode: "", // CONFIRMAR
    },
    // CONFIRMAR: número real. Placeholder inválido a propósito para que no se
    // confunda con un contacto real si se publica sin reemplazar.
    phone: "+54 9 11 0000-0000",
    whatsapp: "5491100000000", // CONFIRMAR (formato: código país + área + número, sin signos)
    email: "", // CONFIRMAR (opcional)
    instagram: "", // CONFIRMAR (usuario de Instagram del local, si existe)
    googleMapsUrl: "https://maps.app.goo.gl/AEyztYmP7JV81HZg8",
    // CONFIRMAR: coordenadas exactas para el schema GeoCoordinates
    geo: {
      lat: null,
      lng: null,
    },
  },

  hours: {
    // CONFIRMAR: horarios reales de atención.
    confirmed: false,
    schedule: [
      { days: "Lunes a viernes", hours: "" },
      { days: "Sábados", hours: "" },
      { days: "Domingos", hours: "" },
    ],
  },

  // Categorías centrales de navegación y de la grilla de la home.
  // `confirmed: true` = validado como rubro real del local.
  // `confirmed: false` = habitual en una ferretería de barrio pero pendiente
  // de confirmación puntual con Servi Luz antes de publicitarlo como propio.
  categories: [
    {
      id: "ferreteria-general",
      name: "Ferretería general",
      description: "Lo de todos los días: fijaciones, herrajes y repuestos.",
      image: "/assets/images/ferreteria.svg",
      confirmed: true,
      size: "medium",
    },
    {
      id: "herramientas",
      name: "Herramientas",
      description: "Manuales y eléctricas, para el hogar y para obra.",
      image: "/assets/images/herramientas.svg",
      confirmed: true,
      size: "wide",
    },
    {
      id: "tornillos-fijaciones",
      name: "Tornillos y fijaciones",
      description: "Medidas y tipos para cada trabajo.",
      image: "/assets/images/ferreteria.svg",
      confirmed: true,
      size: "small",
    },
    {
      id: "electricidad",
      name: "Electricidad e iluminación",
      description: "Materiales eléctricos y artefactos de iluminación.",
      image: "/assets/images/electricidad.svg",
      confirmed: false, // CONFIRMAR
      size: "large",
    },
    {
      id: "cerrajeria",
      name: "Cerrajería",
      description: "Cerraduras, herrajes y duplicado de llaves.",
      image: "/assets/images/cerrajeria.svg",
      confirmed: false, // CONFIRMAR
      size: "medium",
    },
    {
      id: "pintura",
      name: "Pintura",
      description: "Pinturas, accesorios y elementos para pintar.",
      image: "/assets/images/ferreteria.svg",
      confirmed: false, // CONFIRMAR
      size: "small",
    },
    {
      id: "plomeria",
      name: "Plomería",
      description: "Caños, conexiones y accesorios para reparaciones.",
      image: "/assets/images/ferreteria.svg",
      confirmed: false, // CONFIRMAR
      size: "small",
    },
    {
      id: "hogar",
      name: "Accesorios para el hogar",
      description: "Soluciones prácticas para el día a día en casa.",
      image: "/assets/images/mostrador-servi-luz.svg",
      confirmed: false, // CONFIRMAR
      size: "medium",
    },
  ],

  // Solo se muestran en la web los servicios con confirmed: true.
  services: [
    {
      name: "Asesoramiento en el local",
      description: "Te ayudamos a encontrar el producto indicado para tu reparación o instalación.",
      confirmed: true,
    },
    {
      name: "Consultas por WhatsApp",
      description: "Preguntá stock, precio o características antes de venir.",
      confirmed: true,
    },
    {
      name: "Retiro en el local",
      description: "Coordiná tu pedido y retiralo en Juncal 3454.",
      confirmed: true,
    },
    {
      name: "Duplicado de llaves",
      description: "",
      confirmed: false, // CONFIRMAR
    },
    {
      name: "Cerrajería",
      description: "",
      confirmed: false, // CONFIRMAR
    },
    {
      name: "Entrega a domicilio en la zona",
      description: "",
      confirmed: false, // CONFIRMAR
    },
    {
      name: "Venta a profesionales y consorcios",
      description: "",
      confirmed: false, // CONFIRMAR
    },
  ],

  // CONFIRMAR: cargar solo marcas realmente comercializadas. Vacío = sección oculta.
  brands: [],

  // CONFIRMAR: cargar reseñas reales tomadas de Google Maps (texto exacto, sin corregir).
  // Vacío = sección de reseñas oculta.
  reviews: {
    rating: null, // CONFIRMAR (ej: 4.7)
    count: null, // CONFIRMAR (ej: 132)
    items: [
      // { author: "", text: "", source: "Google", url: "" }
    ],
  },

  // Mensajes prellenados de WhatsApp según contexto.
  whatsappMessages: {
    general: "Hola, quería hacer una consulta sobre productos de Servi Luz.",
    product: (productName) => `Hola, quería consultar stock y precio de ${productName}.`,
    professional: "Hola, quería consultar por una compra para obra, comercio o consorcio.",
    advice: "Hola, quería asesoramiento para encontrar el producto que necesito.",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
