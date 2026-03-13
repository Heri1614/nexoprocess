const baseDeDatos = {
    "gemba": {
        titulo: "Sistema de Acciones Gemba",
        // Etiquetas reales de tu producto
        etiquetas: ["Dashboard Web", "Gestión Local", "Exportable a CSV"], 
        imagenMockup: "ScreenSistemaGemba.png", 
        videoMockup: "",
        
        // Textos adaptados a tu archivo HTML
        problema: "Durante los recorridos en piso (Gemba), los supervisores anotan los hallazgos en libretas o archivos de Excel desordenados. Esto hace casi imposible visualizar qué tareas están atrasadas, quién es el responsable y generar reportes rápidos para las juntas de gerencia.",
        
        solucion: "Un Action Tracker interactivo en formato web (HTML) listo para usarse. No requiere instalación, servidores ni internet; funciona directamente en tu navegador. Cuenta con un panel limpio para registrar hallazgos, asignar prioridades y visualizar el avance general en gráficas automáticas.",
        
        resultado: "Control absoluto y visual de tu área operativa. Administra los tiempos de cierre eficientemente y, cuando necesites compartir la información, exporta toda tu base de datos a un archivo CSV compatible con Excel con un solo clic.",
        
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
