// Declaramos una constante (const) llamada 'baseDeDatos'.
// Una constante es una "caja" en la memoria que guarda datos que no cambiarán de forma.
// El símbolo '{' indica que estamos creando un "Objeto", 
// piensa en él como un gran archivero virtual para guardar toda la información de tus proyectos.
const baseDeDatos = {

    // --- PROYECTO 1 ---
    // "gemba" es el identificador único (ID) del proyecto. 
    // Debe ir entre comillas y sin espacios. Es la llave para buscar este proyecto exacto.
    "gemba": {
        // 'titulo' es una propiedad. Del lado derecho, entre comillas, ponemos el texto real.
        titulo: "Sistema de Acciones Gemba",
        
        // 'etiquetas' usa corchetes '[' y ']'. Esto crea un "Arreglo" (Array) o lista.
        // Permite guardar múltiples elementos ordenados bajo el mismo nombre.
        etiquetas: ["Microsoft Forms", "SharePoint", "Excel Automatizado"],
        
        // Las siguientes líneas guardan textos largos. 
        videoMockup: "[ Espacio reservado para incrustar el Video Explicativo del Sistema Gemba ]",
        problema: "El levantamiento de acciones operativas en piso (Gemba) dependía de anotaciones manuales, lo que generaba retrasos en la captura de datos, pérdida de información y nula visibilidad en tiempo real para la toma de decisiones.",
        solucion: "Se desarrolló un flujo digital donde los operadores ingresan datos vía web usando Microsoft Forms. Esta información alimenta automáticamente una base de datos centralizada en SharePoint, eliminando la transcripción manual.",
        resultado: "Un archivo de Excel local se conecta a SharePoint y se actualiza al instante, mostrando un Dashboard dinámico. Esto redujo el tiempo de procesamiento de datos a cero y mejoró el seguimiento de las acciones operativas."
    }, // <-- Esta coma es vital. Le dice a JavaScript "aquí termina un proyecto, prepárate para el siguiente".

    // --- PROYECTO 2 ---
    "inventarios": {
        titulo: "Dashboard de Inventarios",
        etiquetas: ["Excel Avanzado", "Power Query"],
        videoMockup: "[ Espacio reservado para la imagen del Dashboard de Inventarios ]",
        problema: "El control de materiales se llevaba en múltiples archivos desactualizados, causando quiebres de stock constantes y discrepancias en auditorías.",
        solucion: "Se consolidó la información mediante Power Query, creando un modelo de datos robusto que limpia y conecta directamente con los reportes diarios de almacén.",
        resultado: "Alertas visuales automáticas cuando un producto llega a su punto de reorden, logrando un control de inventario preciso y eliminando las horas de conciliación manual."
    },

    // --- PROYECTO 3 ---
    "cotizador": {
        titulo: "Cotizador Web Integrado",
        etiquetas: ["Web", "MiniApps"],
        videoMockup: "[ Espacio reservado para la vista de la MiniApp del Cotizador ]",
        problema: "El equipo tardaba horas en armar cotizaciones manuales, con frecuentes errores de cálculo en los márgenes y formatos inconsistentes que daban una mala imagen al cliente.",
        solucion: "Una aplicación ligera con una interfaz limpia donde el usuario solo selecciona los productos de un catálogo actualizado y la herramienta calcula impuestos y descuentos de forma automática.",
        resultado: "Generación de cotizaciones impecables en PDF en menos de 1 minuto, estandarizando la imagen corporativa y acelerando el proceso de ventas."
    }
}; // <-- Cerramos el "archivero" principal con la llave de cierre y punto y coma.
