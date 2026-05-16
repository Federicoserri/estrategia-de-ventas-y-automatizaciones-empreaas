# Skill: crear-skill

## Cuándo usar esta skill

Úsala cuando el usuario quiera crear una skill nueva para Claude Code. Se activa automáticamente al abrir este proyecto y cuando el usuario describe un proceso que quiere automatizar.

---

## Flujo de conversación

### Paso 1 — Entender el proceso

Haz UNA sola pregunta abierta para entender qué quiere automatizar. No hagas un interrogatorio.

> "Cuéntame el proceso que quieres automatizar. ¿Qué haces ahora manualmente y qué resultado esperas al final?"

Escucha la respuesta y deduce todo lo que puedas. Solo pregunta lo que no puedas deducir.

### Paso 2 — Clarificar lo imprescindible (máximo 3 preguntas)

Si necesitas más datos, pregunta solo lo esencial en un solo mensaje agrupado:

- ¿Qué datos de entrada necesita? (archivos, URLs, texto, formulario...)
- ¿Qué genera al final? (HTML, PDF, JSON, informe de texto, email...)
- ¿Hay algún requisito técnico especial? (acceso a web, herramientas externas...)

Si puedes deducirlo del contexto, no preguntes. Propón tú la solución y confirma.

### Paso 3 — Generar la skill

Crea el archivo de la skill en `.claude/skills/` con este formato:

```
.claude/skills/XX-nombre-skill.md
```

Donde `XX` es el siguiente número disponible (revisa qué archivos ya hay en `.claude/skills/` con `ls .claude/skills/`).

---

## Estructura del archivo de skill a generar

Genera un archivo `.md` que siga exactamente esta estructura:

```markdown
# Skill: [nombre-descriptivo]

## Cuándo usar esta skill

[Una frase clara de cuándo Claude debe usar esta skill automáticamente]

---

## Mensaje de bienvenida

Cuando el usuario inicie esta skill, responde:

> **[Título atractivo]**
>
> [Explicación breve de qué hace y qué necesitas del usuario]
>
> **[Primera pregunta o acción]**

---

## Flujo de trabajo

### Paso 1 — [Nombre del paso]
[Instrucciones precisas para Claude]

### Paso 2 — [Nombre del paso]
[Instrucciones precisas para Claude]

[... continúa según la complejidad del proceso]

---

## Datos que necesita

- [Dato 1]: [cómo obtenerlo — preguntando al usuario / automáticamente / inferido]
- [Dato 2]: [cómo obtenerlo]

## Lo que genera

- [Output 1]: [descripción]
- [Output 2]: [descripción]

---

## Principios a seguir

1. No inventar datos — preguntar si no tiene
2. Obtener automáticamente lo que pueda (web, archivos, sistema)
3. Auto-instalar dependencias si las necesita
4. Flujo conversacional, no interrogatorio
5. Fallback amigable si algo falla
6. Resumen claro de lo generado al terminar
```

---

## Reglas para generar buenas skills

- **Nombre del archivo**: usa kebab-case descriptivo. Ej: `03-generador-presupuestos.md`
- **Trigger claro**: la skill debe saber exactamente cuándo activarse
- **Flujo conversacional**: agrupa preguntas, no hagas una por mensaje
- **Nunca inventes**: si la skill necesita datos del usuario, los pide. Si puede obtenerlos sola (web scraping, leer archivos, API), los obtiene
- **Dependencias**: si la skill necesita Node.js, Python, Playwright u otras herramientas, incluye instrucciones para auto-instalarlas con fallback si no están disponibles
- **Diseño libre**: si genera algo visual (HTML, CSS), dale libertad creativa — no definas colores ni estilos rígidos
- **Sin precios ni consejos de venta**: la skill no sugiere qué cobrar ni cómo vender

---

## Después de crear la skill

Una vez generado el archivo, di al usuario:

> **Skill creada y lista**
>
> He instalado la skill `[nombre]` en `.claude/skills/`. 
>
> Para usarla: abre una nueva conversación en este proyecto y describe lo que necesitas. Claude la activará automáticamente.
>
> **¿Quieres que genere también un kit completo** para compartir con otros? Generaría la carpeta `kit-[nombre]/` con CLAUDE.md, INSTRUCCIONES.md y la skill lista para distribuir.

Si el usuario quiere el kit completo, genera:

```
kit-[nombre]/
├── CLAUDE.md          ← Comportamiento al iniciar + descripción del kit
├── INSTRUCCIONES.md   ← Pasos para el usuario (sin tecnicismos)
└── .claude/
    └── skills/
        └── XX-[nombre].md   ← La skill generada
```

**CLAUDE.md del kit** debe incluir:
- Descripción de qué hace el kit
- Comportamiento al iniciar (mensaje de bienvenida exacto)
- Qué genera
- Requisitos técnicos si los hay

**INSTRUCCIONES.md del kit** debe incluir:
- Requisitos (VS Code + extensión Claude Code)
- Pasos numerados simples
- Ejemplos de qué escribir para activar la skill
- Estructura de carpetas

---

## Resumen final

Al terminar, muestra siempre:

```
✓ Skill creada: .claude/skills/XX-[nombre].md
✓ Trigger: [cuándo se activa]
✓ Genera: [qué produce]
[✓ Kit generado: kit-[nombre]/]   ← solo si generaste el kit
```
