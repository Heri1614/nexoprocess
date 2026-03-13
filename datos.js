const baseDeDatos = {
    "gemba": {
        titulo: "Sistema de Acciones Gemba",
        etiquetas: ["Microsoft Forms", "SharePoint", "Excel Automatizado"],
        // Aquí agregamos la ruta de tu nueva imagen:
        imagenMockup: "ScreenSistemaGemba.png", 
        videoMockup: "",
        problema: "El levantamiento de acciones operativas en piso (Gemba) dependía de anotaciones manuales, lo que generaba retrasos en la captura de datos, pérdida de información y nula visibilidad en tiempo real para la toma de decisiones.",
        solucion: "Se desarrolló un flujo digital donde los operadores ingresan datos vía web usando Microsoft Forms. Esta información alimenta automáticamente una base de datos centralizada en SharePoint, eliminando la transcripción manual.",
        resultado: "Un archivo de Excel local se conecta a SharePoint y se actualiza al instante, mostrando un Dashboard dinámico. Esto redujo el tiempo de procesamiento de datos a cero y mejoró el seguimiento de las acciones operativas.",
        linkCompra: "https://nexoprocess.gumroad.com/l/bizzns"
    },
    
    "inventarios": {
        titulo: "Dashboard de Inventarios",
        etiquetas: ["Excel Avanzado", "Power Query"],
        imagenMockup: "",
        videoMockup: "[ Espacio reservado para la imagen del Dashboard de Inventarios ]",
        problema: "El control de materiales se llevaba en múltiples archivos desactualizados, causando quiebres de stock constantes y discrepancias en auditorías.",
        solucion: "Se consolidó la información mediante Power Query, creando un modelo de datos robusto que limpia y conecta directamente con los reportes diarios de almacén.",
        resultado: "Alertas visuales automáticas cuando un producto llega a su punto de reorden, logrando un control de inventario preciso y eliminando las horas de conciliación manual."
    },

    "cotizador": {
        titulo: "Cotizador Web Integrado",
        etiquetas: ["Web", "MiniApps"],
        imagenMockup: "",
        videoMockup: "[ Espacio reservado para la vista de la MiniApp del Cotizador ]",
        problema: "El equipo tardaba horas en armar cotizaciones manuales, con frecuentes errores de cálculo en los márgenes y formatos inconsistentes que daban una mala imagen al cliente.",
        solucion: "Una aplicación ligera con una interfaz limpia donde el usuario solo selecciona los productos de un catálogo actualizado y la herramienta calcula impuestos y descuentos de forma automática.",
        resultado: "Generación de cotizaciones impecables en PDF en menos de 1 minuto, estandarizando la imagen corporativa y acelerando el proceso de ventas."
    }
};
