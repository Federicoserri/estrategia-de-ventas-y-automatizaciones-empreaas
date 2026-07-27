/**
 * catalog-data.js
 * Estructura del catálogo de Servi Luz.
 *
 * No hay productos cargados todavía: no se inventan artículos, precios,
 * marcas ni stock. Se deja el esquema listo para cargar productos reales.
 * Mientras CATALOG_PRODUCTS esté vacío, catalogo.html muestra el estado
 * "todavía no hay productos cargados" con la acción de consulta por WhatsApp.
 *
 * Esquema de un producto (referencia, no usar datos de ejemplo como reales):
 * {
 *   id: "codigo-interno",
 *   name: "Nombre del producto",
 *   categoryId: "id de una categoría de site-config.js",
 *   brand: "Marca",
 *   description: "Descripción corta",
 *   specs: { medida: "", uso: "" },
 *   code: "Código de referencia",
 *   availability: "disponible" | "sin-stock" | "consultar",
 *   price: null, // number solo si el precio está confirmado y vigente
 *   image: "/assets/images/...",
 *   tag: null, // "nuevo" | "oferta" | "sin-stock"
 * }
 */

const CATALOG_PRODUCTS = [];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CATALOG_PRODUCTS;
}
