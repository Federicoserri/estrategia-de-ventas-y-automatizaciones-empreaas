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
✓ [Automatización 1 incluida — ej: respuesta automática por WhatsApp]
✓ [Automatización 2 incluida — ej: notificación cuando llega un contacto]

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

### ENTREGABLE 4: Automatizaciones para implementar

Genera las automatizaciones más útiles para ESTE negocio específico según su rubro. Para cada una, incluye el flujo n8n listo para importar.

**Selecciona las 3 automatizaciones más relevantes según el rubro:**

#### CRITERIOS DE SELECCIÓN:
- Negocio con reservas (restaurante, peluquería, clínica, gimnasio) → prioriza automatización de reservas + recordatorios
- Negocio de productos (tienda, artesanías, indumentaria) → prioriza notificación de stock + seguimiento post-compra  
- Negocio de servicios (abogado, contador, consultor) → prioriza calificación de leads + seguimiento
- Negocio local sin web → prioriza captura de leads desde Instagram + respuesta automática WhatsApp
- Cualquier negocio → siempre incluye notificación de contacto nuevo

#### AUTOMATIZACIÓN A — Captura y notificación de lead nuevo

Descripción: Cuando alguien completa el formulario de contacto en la web, Claude recibe los datos, los guarda y le notifica al dueño por WhatsApp en menos de 1 minuto.

```json
{
  "name": "Lead Nuevo - Notificación WhatsApp",
  "nodes": [
    {
      "name": "Webhook - Formulario Web",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "lead-nuevo",
        "responseMode": "onReceived",
        "responseData": "allEntries"
      },
      "position": [250, 300]
    },
    {
      "name": "Formatear Mensaje",
      "type": "n8n-nodes-base.set",
      "parameters": {
        "values": {
          "string": [
            {
              "name": "mensaje",
              "value": "=🔔 *LEAD NUEVO*\n\n👤 Nombre: {{$json[\"nombre\"]}}\n📱 WhatsApp: {{$json[\"telefono\"]}}\n📧 Email: {{$json[\"email\"]}}\n💬 Consulta: {{$json[\"mensaje\"]}}\n\n⏰ {{$now.format('DD/MM/YYYY HH:mm')}}"
            }
          ]
        }
      },
      "position": [450, 300]
    },
    {
      "name": "WhatsApp - Notificar Dueño",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "method": "POST",
        "url": "https://api.whatsapp.com/send",
        "sendBody": true,
        "bodyParameters": {
          "parameters": [
            { "name": "phone", "value": "={{$env.WHATSAPP_NUMERO_DUENO}}" },
            { "name": "text", "value": "={{$json[\"mensaje\"]}}" }
          ]
        }
      },
      "position": [650, 300]
    },
    {
      "name": "Guardar en Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "parameters": {
        "operation": "append",
        "sheetId": "={{$env.GOOGLE_SHEET_ID}}",
        "range": "Leads!A:F",
        "values": {
          "values": [
            ["={{$now.format('DD/MM/YYYY HH:mm')}}", "={{$json[\"nombre\"]}}", "={{$json[\"telefono\"]}}", "={{$json[\"email\"]}}", "={{$json[\"mensaje\"]}}", "Nuevo"]
          ]
        }
      },
      "position": [650, 450]
    }
  ],
  "connections": {
    "Webhook - Formulario Web": { "main": [[{ "node": "Formatear Mensaje", "type": "main", "index": 0 }]] },
    "Formatear Mensaje": { "main": [[{ "node": "WhatsApp - Notificar Dueño", "type": "main", "index": 0 }, { "node": "Guardar en Google Sheets", "type": "main", "index": 0 }]] }
  }
}
```

**Variables de entorno a configurar en n8n:**
- `WHATSAPP_NUMERO_DUENO`: número con código de país (ej: 5491112345678)
- `GOOGLE_SHEET_ID`: ID de la hoja de cálculo donde guardar los leads

---

#### AUTOMATIZACIÓN B — Respuesta automática al lead (personalizada por rubro)

Descripción: El lead recibe un mensaje automático por email o WhatsApp dentro de los 2 minutos de contactar, con información útil y el siguiente paso claro.

```json
{
  "name": "Respuesta Automática - Lead Nuevo",
  "nodes": [
    {
      "name": "Trigger - Lead Recibido",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "lead-respuesta",
        "responseMode": "onReceived"
      },
      "position": [250, 300]
    },
    {
      "name": "Esperar 2 minutos",
      "type": "n8n-nodes-base.wait",
      "parameters": {
        "amount": 2,
        "unit": "minutes"
      },
      "position": [450, 300]
    },
    {
      "name": "Email de respuesta",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "fromEmail": "={{$env.EMAIL_NEGOCIO}}",
        "toEmail": "={{$json[\"email\"]}}",
        "subject": "=Recibimos tu consulta, {{$json[\"nombre\"]}} 👋",
        "text": "=Hola {{$json[\"nombre\"]}},\n\nGracias por contactarnos. Recibimos tu consulta y nos estaremos comunicando contigo en las próximas horas.\n\nMientras tanto, podés ver nuestros trabajos en [LINK PORTFOLIO].\n\nSaludos,\n[NOMBRE DEL NEGOCIO]"
      },
      "position": [650, 300]
    }
  ],
  "connections": {
    "Trigger - Lead Recibido": { "main": [[{ "node": "Esperar 2 minutos", "type": "main", "index": 0 }]] },
    "Esperar 2 minutos": { "main": [[{ "node": "Email de respuesta", "type": "main", "index": 0 }]] }
  }
}
```

**Variables a configurar:**
- `EMAIL_NEGOCIO`: email desde el que se envía
- Personalizar el texto del email con el nombre real del negocio y link al portfolio

---

#### AUTOMATIZACIÓN C — Seguimiento a leads sin respuesta (3 días)

Descripción: Si un lead no respondió en 3 días, envía un seguimiento automático para reactivar la conversación.

```json
{
  "name": "Seguimiento Lead Sin Respuesta",
  "nodes": [
    {
      "name": "Trigger Diario",
      "type": "n8n-nodes-base.scheduleTrigger",
      "parameters": {
        "rule": {
          "interval": [{ "field": "cronExpression", "expression": "0 10 * * *" }]
        }
      },
      "position": [250, 300]
    },
    {
      "name": "Leer Google Sheets - Leads",
      "type": "n8n-nodes-base.googleSheets",
      "parameters": {
        "operation": "read",
        "sheetId": "={{$env.GOOGLE_SHEET_ID}}",
        "range": "Leads!A:F"
      },
      "position": [450, 300]
    },
    {
      "name": "Filtrar - Sin respuesta hace 3 días",
      "type": "n8n-nodes-base.filter",
      "parameters": {
        "conditions": {
          "string": [
            { "value1": "={{$json[\"estado\"]}}", "operation": "equal", "value2": "Nuevo" }
          ],
          "dateTime": [
            { "value1": "={{$json[\"fecha\"]}}", "operation": "before", "value2": "={{$now.minus({days: 3}).toISO()}}" }
          ]
        }
      },
      "position": [650, 300]
    },
    {
      "name": "Email de seguimiento",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "fromEmail": "={{$env.EMAIL_NEGOCIO}}",
        "toEmail": "={{$json[\"email\"]}}",
        "subject": "=¿Pudiste ver nuestra propuesta, {{$json[\"nombre\"]}}?",
        "text": "=Hola {{$json[\"nombre\"]}},\n\nTe escribo porque hace unos días nos contactaste y quería asegurarme de que recibiste nuestra respuesta.\n\n¿Tuviste oportunidad de verla? Quedamos a disposición para cualquier consulta.\n\nSaludos,\n[NOMBRE DEL NEGOCIO]"
      },
      "position": [850, 300]
    },
    {
      "name": "Actualizar estado en Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "parameters": {
        "operation": "update",
        "sheetId": "={{$env.GOOGLE_SHEET_ID}}",
        "range": "Leads!F{{$itemIndex + 2}}",
        "values": { "values": [["Seguimiento enviado"]] }
      },
      "position": [850, 450]
    }
  ],
  "connections": {
    "Trigger Diario": { "main": [[{ "node": "Leer Google Sheets - Leads", "type": "main", "index": 0 }]] },
    "Leer Google Sheets - Leads": { "main": [[{ "node": "Filtrar - Sin respuesta hace 3 días", "type": "main", "index": 0 }]] },
    "Filtrar - Sin respuesta hace 3 días": { "main": [[{ "node": "Email de seguimiento", "type": "main", "index": 0 }, { "node": "Actualizar estado en Sheets", "type": "main", "index": 0 }]] }
  }
}
```

---

## Formato de presentación final

Al terminar los 4 entregables, muestra este resumen:

```
═══════════════════════════════════════
RESUMEN — [Nombre del negocio]
═══════════════════════════════════════

✓ Análisis completado: [rubro] en [ciudad si se sabe]
✓ Propuesta comercial: lista para enviar
✓ Script de ventas: adaptado a sus objeciones habituales
✓ Automatizaciones generadas: [lista las 3 que generaste]

PRÓXIMOS PASOS SUGERIDOS:
1. Enviar la propuesta por [WhatsApp/email según lo que tienen]
2. Si responden: usar el script en la reunión
3. Si no responden en 3 días: hacer seguimiento manual
4. Al cerrar: implementar las automatizaciones en n8n

¿Querés ajustar algo de la propuesta o el script?
¿O arrancamos con otro prospecto?
```

---

## Reglas de la skill

- **Nunca inventar datos**: si no encontró algo en la web o Instagram, lo dice y pregunta
- **Siempre personalizar**: la propuesta y el script deben mencionar algo específico del negocio analizado — nunca genérico
- **Rubro primero**: las automatizaciones se eligen según el rubro, no al azar
- **Sin precios**: no sugerir cuánto cobrar por el diseño web
- **Fallback amigable**: si WebFetch falla en Instagram o la web, pedir los datos clave manualmente y seguir igual
