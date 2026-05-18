const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const R = require('./respuestas');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

// Rastrea si ya le mandamos bienvenida a este número en la sesión
const saludados = new Set();

client.on('qr', qr => {
  console.log('\n========================================');
  console.log('  Escaneá este QR con tu WhatsApp');
  console.log('  (WhatsApp → tres puntos → Aparatos vinculados)');
  console.log('========================================\n');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('\n✅ Bot conectado y funcionando\n');
});

client.on('message', async msg => {
  // Ignorar mensajes de grupos y del propio bot
  if (msg.from.endsWith('@g.us')) return;
  if (msg.fromMe) return;

  const texto = msg.body.toLowerCase().trim();
  const numero = msg.from;

  console.log(`[${new Date().toLocaleTimeString()}] Mensaje de ${numero}: ${msg.body}`);

  let respuesta = null;

  // Opciones del menú por número
  if (texto === '1') {
    respuesta = R.horario;
  } else if (texto === '2') {
    respuesta = R.ubicacion;
  } else if (texto === '3') {
    respuesta = R.productos;
  } else if (texto === '4') {
    respuesta = R.precios;
  } else if (texto === '5') {
    respuesta = R.pagos;
  } else if (texto === '6') {
    respuesta = R.envios;
  } else if (texto === '7') {
    respuesta = R.humano;

  // Detección por palabras clave
  } else if (coincide(texto, ['hola', 'buenas', 'buenos', 'buen día', 'buenas tardes', 'buenas noches', 'hi', 'ola'])) {
    if (!saludados.has(numero)) {
      saludados.add(numero);
      respuesta = R.bienvenida;
    } else {
      respuesta = R.bienvenida;
    }

  } else if (coincide(texto, ['horario', 'hora', 'abren', 'cierran', 'cuando abren', 'qué hora', 'que hora', 'abierto', 'cerrado'])) {
    respuesta = R.horario;

  } else if (coincide(texto, ['dirección', 'direccion', 'donde', 'dónde', 'ubicación', 'ubicacion', 'como llego', 'cómo llego', 'llegar', 'mapa', 'están', 'estan'])) {
    respuesta = R.ubicacion;

  } else if (coincide(texto, ['cerradura', 'cerraduras', 'candado', 'candados', 'yale', 'antipanico', 'antipánico'])) {
    respuesta = R.cerraduras;

  } else if (coincide(texto, ['bisagra', 'bisagras', 'pomela', 'pomelas', 'gozne'])) {
    respuesta = R.bisagras;

  } else if (coincide(texto, ['tornillo', 'tornillos', 'bulón', 'bulon', 'tuerca', 'tuercas', 'remache', 'clavo', 'fisher', 'taco'])) {
    respuesta = R.tornillos;

  } else if (coincide(texto, ['precio', 'precios', 'cuánto', 'cuanto', 'cuesta', 'vale', 'valor', 'costo', 'cotización', 'cotizacion'])) {
    respuesta = R.precios;

  } else if (coincide(texto, ['pago', 'pagos', 'efectivo', 'tarjeta', 'transferencia', 'mercadopago', 'mercado pago', 'débito', 'debito', 'crédito', 'credito'])) {
    respuesta = R.pagos;

  } else if (coincide(texto, ['envío', 'envio', 'envíos', 'envios', 'delivery', 'mandan', 'entregan', 'llevan', 'reparto'])) {
    respuesta = R.envios;

  } else if (coincide(texto, ['persona', 'humano', 'alguien', 'empleado', 'hablar con', 'asesor', 'vendedor', 'ayuda'])) {
    respuesta = R.humano;

  } else if (coincide(texto, ['producto', 'productos', 'stock', 'tienen', 'tenés', 'tenes', 'qué tienen', 'que tienen', 'catálogo', 'catalogo'])) {
    respuesta = R.productos;

  } else {
    // Primer mensaje sin saludo → bienvenida
    if (!saludados.has(numero)) {
      saludados.add(numero);
      respuesta = R.bienvenida;
    } else {
      respuesta = R.noEntiendo;
    }
  }

  if (respuesta) {
    await msg.reply(respuesta);
    console.log(`[${new Date().toLocaleTimeString()}] Respondido ✓`);
  }
});

client.on('disconnected', () => {
  console.log('Bot desconectado. Reiniciá con: npm start');
});

client.initialize();

// Función auxiliar: devuelve true si el texto contiene alguna de las palabras clave
function coincide(texto, palabras) {
  return palabras.some(p => texto.includes(p));
}
