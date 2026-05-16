# Skill: estrategia-ventas-diseno-web

## Cuándo usar esta skill

Úsala cuando el usuario quiera crear una estrategia de ventas de servicios de diseño web para un negocio específico. Se activa cuando el usuario menciona un prospecto, cliente potencial, negocio a analizar, o cuando dice "analiza este negocio", "quiero venderle una web a...", "tengo un prospecto de...".

---

## Mensaje de bienvenida

Cuando el usuario active esta skill, responde:

> **Estrategia de ventas + automatizaciones para diseño web**
>
> Voy a analizar el negocio, construir la estrategia de venta y generar las automatizaciones listas para implementar.
>
> ¿Qué tiene este negocio online?
> - **Web** → dame la URL
> - **Solo Instagram** → dame el @
> - **Nada online** → dime a qué se dedican y en qué ciudad están

---

## Fase 1 — Recolección y análisis automático

### Si tiene web (URL proporcionada)

Usa WebFetch para analizar:
- Propuesta de valor (¿qué venden y a quién?)
- Calidad visual y UX (diseño, estructura, velocidad percibida)
- CTAs presentes o ausentes
- Formularios de contacto, WhatsApp, reservas
- Presencia de blog, testimonios, precios
- Versión móvil (inferida del código)
- Redes sociales enlazadas

Luego busca su Instagram/Facebook con WebSearch: `"[nombre negocio]" site:instagram.com OR site:facebook.com`

### Si solo tiene Instagram (@handle)

Usa WebFetch en `https://www.instagram.com/[handle]/` para extraer:
- Bio (qué venden, ciudad, contacto)
- Número de seguidores y siguiendo
- Cantidad de publicaciones
- Enlace en bio (si tienen)
- Tipo de contenido predominante (fotos de producto, servicios, behind-the-scenes)
- Tick verificado

Luego busca si tienen web con WebSearch: `"[nombre del negocio inferido de la bio]" web sitio`

### Si no tiene nada online

Pregunta en un solo mensaje:
- ¿A qué se dedican exactamente? (producto o servicio)
- ¿Dónde están? (ciudad/país)
- ¿Cómo consiguen clientes ahora? (boca a boca, volantes, redes...)
- ¿Tienen WhatsApp de negocio?

### En todos los casos — busca contexto del rubro

Ejecuta WebSearch: `diseño web para [rubro] Argentina/España precio tendencias 2025`

Esto te da contexto para personalizar la propuesta con datos reales del mercado.

---

## Fase 2 — Diagnóstico del negocio

Construye internamente un diagnóstico con:

**Presencia digital actual:**
- ¿Qué tienen? ¿Qué les falta?
- ¿Cómo los encuentra un cliente nuevo hoy?
- ¿Cuánto les está costando no tener web o tenerla mal?

**Dolor principal identificado** (elige el más evidente):
- Sin web → invisibles en Google, pierden credibilidad
- Web desactualizada → aleja clientes antes de que contacten
- Web sin CTAs → visitas que no convierten
- Sin mobile → pierden el 70%+ del tráfico
- Sin automatización → responden manualmente, pierden leads

**Oportunidad específica:**
- Qué mejoraría concretamente en su negocio con una web bien hecha
- Qué tipo de web necesitan (landing, catálogo, reservas, e-commerce...)

---

## Fase 3 — Los 4 entregables

Genera los 4 entregables en secuencia, separados claramente con títulos.

---

### ENTREGABLE 1: Análisis del prospecto

```
═══════════════════════════════════════
ANÁLISIS: [Nombre del negocio] — [Rubro]
═══════════════════════════════════════

PRESENCIA DIGITAL ACTUAL
─────────────────────────
Web: [tienen / no tienen / URL]
Instagram: [@handle — X seguidores / no tienen]
Otros canales: [lista]

DIAGNÓSTICO RÁPIDO
─────────────────────────
✗ [Problema 1 detectado]
✗ [Problema 2 detectado]
✗ [Problema 3 detectado]

OPORTUNIDAD
─────────────────────────
[2-3 líneas explicando qué cambiaría con una web bien hecha
específicamente para ESTE negocio y su rubro]

TIPO DE WEB RECOMENDADA
─────────────────────────
[Landing / Catálogo / Reservas / E-commerce / Portfolio]
Justificación: [por qué este tipo para este negocio]
```

---

### ENTREGABLE 2: Propuesta comercial lista para enviar

Genera un documento profesional, personalizado, listo para copiar y enviar por WhatsApp, email o presentar en reunión.

```
═══════════════════════════════════════
PROPUESTA DE DISEÑO WEB
Para: [Nombre del negocio]
═══════════════════════════════════════

Hola [nombre si lo tienes, si no: "equipo de [negocio]"],

[Párrafo de apertura personalizado — menciona algo específico que
viste en su Instagram o web. No genérico. Ej: "Vi que tienen
más de X seguidores en Instagram pero sin web donde esos seguidores
puedan ver todos sus servicios y contactarlos directamente..."]

EL PROBLEMA QUE RESUELVE
─────────────────────────
[Explica el dolor principal en términos de negocio:
clientes que no los encuentran, ventas que se pierden,
credibilidad que falta. 2-3 frases directas.]

LO QUE VOY A HACER
─────────────────────────
Diseño y desarrollo de [tipo de web] que incluye:

✓ [Feature 1 relevante para su rubro]
✓ [Feature 2 relevante para su rubro]
✓ [Feature 3 — ej: formulario de contacto / botón WhatsApp / reservas]
✓ [Feature 4 — ej: galería de trabajos / menú de servicios / catálogo]
✓ Diseño adaptado a móvil, tablet y escritorio
✓ [Automatización 1 — ej: formulario que avisa por WhatsApp al instante]
✓ [Automatización 2 — ej: seguimiento automático si no responden]

POR QUÉ LES CONVIENE AHORA
─────────────────────────
[Argumento específico para su rubro. Ej para un restaurante:
"El 87% de las personas busca restaurantes en Google antes de ir.
Si no aparecen ahí, ese cliente va a la competencia."]

PRÓXIMO PASO
─────────────────────────
¿Tienen 20 minutos esta semana para que les muestre ejemplos
de webs que hice para negocios similares?

[Tu nombre]
[Tu contacto]
```

---

### ENTREGABLE 3: Script de ventas

Guión conversacional para usar en llamada, videollamada o reunión presencial.

```
═══════════════════════════════════════
SCRIPT DE VENTAS — [Nombre del negocio]
═══════════════════════════════════════

APERTURA (primeros 60 segundos)
─────────────────────────────────
"Hola [nombre], gracias por tu tiempo. Vi lo que hacen en
[Instagram/su web/referencias] y me pareció interesante hablar
porque [observación específica y positiva de su negocio].

Quería contarte algo concreto que vi y que creo que les está
costando clientes. ¿Te parece si te lo muestro?"

→ Objetivo: despertar curiosidad, no vender todavía.

IDENTIFICACIÓN DEL DOLOR
─────────────────────────────────
Pregunta 1: "¿Cómo te llegan los clientes nuevos hoy?"
   → Escucha. Si dicen redes/boca a boca → abres el tema web.

Pregunta 2: "¿Cuántos contactos nuevos recibirías por mes
   si te encontraran fácil en Google?"
   → Hazlos pensar en el volumen que están perdiendo.

Pregunta 3: "Cuando un cliente potencial te busca en Google,
   ¿qué encuentra?"
   → Si no tienen web o está desactualizada, ellos mismos
     lo ven como problema.

PRESENTACIÓN DE LA SOLUCIÓN
─────────────────────────────────
"Lo que propongo es una web que hace tres cosas concretas
para un negocio como el tuyo:

Primero, que te encuentren — [explicar SEO básico en 1 frase].
Segundo, que conviertan — [explicar CTAs/formularios en 1 frase].
Tercero, que no pierdas tiempo — [mencionar automatización clave].

Te muestro cómo quedó para un negocio similar..."
   → Muestra portfolio o caso de referencia del mismo rubro.

MANEJO DE OBJECIONES
─────────────────────────────────

"Es caro / no tengo presupuesto ahora"
→ "Entiendo. ¿Cuánto vale para vos conseguir un cliente nuevo?
   Si la web te trae 2-3 clientes más por mes, ¿cuándo se paga sola?"

"Ya tengo Instagram, no necesito web"
→ "Instagram es perfecto para llegar a gente que ya te sigue.
   La web es para los que te buscan por primera vez en Google
   y no saben que existís. Son dos públicos distintos."

"Lo tengo que pensar / consultar"
→ "Claro, tiene sentido. ¿Qué información te falta para decidir?
   ¿Te parece si te mando la propuesta por escrito y la revisamos
   juntos la próxima semana?"

"Ya tuve una web y no me funcionó"
→ "¿Qué pasó con esa web? ¿Qué esperabas que hiciera?"
   → Escucha. Después explica qué harías diferente.

CIERRE
─────────────────────────────────
"¿Qué te parece si arrancamos con el diseño esta semana?
Necesito [lista de lo que necesitás: logo, fotos, textos o
te encargás vos de eso también] y en [plazo] tienen la web online."

Si duda: "¿Qué te generaría más confianza para arrancar?"
```

---

### ENTREGABLE 4: Automatizaciones — archivos listos para usar

No uses herramientas externas. Genera los archivos directamente con Write y ábrelos en el navegador cuando corresponda.

**Selecciona las 3 automatizaciones más útiles según el rubro y généralas como archivos reales:**

#### CRITERIOS DE SELECCIÓN:
- Negocio con reservas (restaurante, peluquería, clínica, gimnasio) → formulario de reserva + tracker de citas + secuencia de recordatorio
- Negocio de productos (tienda, artesanías, indumentaria) → catálogo con WhatsApp integrado + tracker de pedidos + mensajes de seguimiento post-compra
- Negocio de servicios (abogado, contador, consultor, diseñador) → formulario de calificación de lead + tracker de prospectos + secuencia de nurturing
- Negocio local sin web → página de captura simple + tracker de leads + mensajes de bienvenida/seguimiento
- Cualquier negocio → siempre incluye el tracker de prospectos

---

#### AUTOMATIZACIÓN A — Formulario de captura de contacto/lead

Genera un archivo `formulario-[nombre-negocio].html` con:
- Formulario completo adaptado al rubro (campos relevantes para ese negocio)
- Al enviar: guarda los datos en localStorage del navegador Y abre WhatsApp del dueño con el mensaje pre-completado con los datos del lead
- Diseño profesional, adaptado al rubro (colores, tono, copy)
- Funciona sin servidor — solo abrirlo en el navegador

Ejemplo del comportamiento al enviar:
```javascript
// Al submit: construye el mensaje y abre WhatsApp
const mensaje = `Nuevo contacto desde la web:\nNombre: ${nombre}\nTelefono: ${tel}\nConsulta: ${consulta}`;
window.open(`https://wa.me/[NUMERO_DUENO]?text=${encodeURIComponent(mensaje)}`);
```

---

#### AUTOMATIZACIÓN B — Secuencia de mensajes de seguimiento

Genera un archivo `seguimiento-[nombre-negocio].md` con la secuencia completa de mensajes listos para copiar y pegar, personalizados para el rubro:

```
SECUENCIA DE SEGUIMIENTO — [Nombre del negocio]

DÍA 0 — Mensaje inicial (enviar al cerrar el contacto)
WhatsApp:
"[Mensaje personalizado para el primer contacto, tono del rubro]"

DÍA 1 — Si no respondió
WhatsApp:
"[Mensaje de seguimiento suave, menciona algo específico del negocio]"

DÍA 3 — Si sigue sin responder
WhatsApp:
"[Mensaje con nuevo ángulo — aporta algo de valor antes de volver a ofrecer]"

DÍA 7 — Último intento
WhatsApp:
"[Mensaje de cierre amigable, deja la puerta abierta]"

EMAIL ALTERNATIVO (si tienen email)
Asunto: [Asunto personalizado para el rubro]
Cuerpo: [Email completo listo para enviar]
```

---

#### AUTOMATIZACIÓN C — Tracker de prospectos (mini CRM)

Genera un archivo `tracker-prospectos.html` — una página HTML standalone que funciona como CRM mínimo viable:

- Tabla de prospectos con columnas: Negocio, Rubro, Contacto, Estado (Analizado / Propuesta enviada / En negociación / Cerrado / Perdido), Fecha, Notas
- Botones para cambiar el estado con un click
- Filtro por estado
- Los datos se guardan en localStorage (persisten aunque se cierre el navegador)
- Botón "Exportar CSV" para sacar los datos
- Botón "Agregar prospecto" con formulario inline
- Al abrir, carga el prospecto actual ya pre-cargado con los datos que se acaban de analizar

El archivo se genera una sola vez y se reutiliza para todos los prospectos futuros. Si ya existe `tracker-prospectos.html` en el proyecto, solo agrega el nuevo prospecto al localStorage sin reescribir el archivo.

---

## Formato de presentación final

Al terminar los 4 entregables, muestra este resumen:

```
═══════════════════════════════════════
RESUMEN — [Nombre del negocio]
═══════════════════════════════════════

✓ Análisis completado: [rubro] en [ciudad si se sabe]
✓ Propuesta comercial: lista para enviar
✓ Script de ventas: con objeciones del rubro
✓ Archivos generados:
   → formulario-[negocio].html   (captura de leads con WhatsApp)
   → seguimiento-[negocio].md    (mensajes día 0, 1, 3 y 7)
   → tracker-prospectos.html     (CRM — [negocio] ya cargado)

PRÓXIMOS PASOS:
1. Enviar la propuesta por [WhatsApp/email]
2. Si responden → usar el script en la reunión
3. Si no responden → seguir la secuencia del .md
4. Al cerrar → registrar en tracker-prospectos.html

¿Ajustamos algo o arrancamos con otro prospecto?
```

---

## Reglas de la skill

- **Nunca inventar datos**: si no encontró algo en la web o Instagram, lo dice y pregunta
- **Siempre personalizar**: la propuesta y el script deben mencionar algo específico del negocio analizado — nunca genérico
- **Rubro primero**: las automatizaciones se eligen según el rubro, no al azar
- **Sin precios**: no sugerir cuánto cobrar por el diseño web
- **Fallback amigable**: si WebFetch falla en Instagram o la web, pedir los datos clave manualmente y seguir igual
