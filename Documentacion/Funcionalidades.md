# Funcionalidades de NetWize

## Descripción

NetWize es una aplicación web desarrollada para simular procesos de diagnóstico y soporte técnico de nivel 1 mediante árboles de decisión.

La aplicación permite al usuario practicar diferentes escenarios de soporte y obtener diagnósticos y soluciones de acuerdo con las respuestas seleccionadas.

---

## 1. Selección de casos

El simulador permite seleccionar diferentes casos de soporte técnico.

Actualmente se encuentran implementados:

- No tengo internet
- WiFi lento
- Problemas DNS
- Internet intermitente

Los casos se almacenan en un archivo JSON, permitiendo separar la información de los casos de la lógica de la aplicación.

---

## 2. Árboles de decisión

Cada caso contiene diferentes nodos de decisión.

El usuario responde las preguntas planteadas y el sistema determina cuál será el siguiente paso del diagnóstico.

Las opciones pueden:

- Llevar al siguiente nodo.
- Mostrar un diagnóstico.
- Mostrar una solución.

---

## 3. Diagnóstico y solución

Cuando el usuario selecciona una opción que finaliza el proceso de diagnóstico, NetWize muestra:

- Diagnóstico identificado.
- Solución recomendada.

Esto permite simular el proceso básico de atención de un caso de soporte técnico.

---

## 4. Dashboard

La aplicación cuenta con un Dashboard que funciona como panel principal.

Actualmente permite:

- Visualizar información general del simulador.
- Consultar el historial de simulaciones.
- Acceder nuevamente al simulador.

---

## 5. Navegación

La aplicación permite navegar entre:

- Dashboard.
- Simulador.

La navegación se controla mediante el estado de la aplicación utilizando React.

---

## 6. Historial de simulaciones

NetWize registra las simulaciones finalizadas.

Cada registro almacena:

- Nombre del caso.
- Fecha y hora de la simulación.

Ejemplo:

``text
Caso: WiFi lento
Fecha: 12/08/2026, 08:15:32

## Estadísticas del Dashboard

---

NetWize cuenta con un sistema de estadísticas básicas basado en el historial de simulaciones.

Las estadísticas disponibles son:

- Cantidad de casos resueltos.
- Cantidad de simulaciones realizadas.
- Categoría de soporte más frecuente.
- Cantidad de casos por categoría.
- Representación visual mediante barras de frecuencia.

Los datos utilizados para generar estas estadísticas provienen del historial almacenado localmente mediante `localStorage`.

## Gráficas y estadísticas visuales

NetWize incorpora gráficas simples para representar visualmente la frecuencia de las categorías de soporte.

Las gráficas se construyen sin librerías externas y utilizan:

- React para generar los elementos dinámicamente.
- JavaScript para calcular los porcentajes.
- Tailwind CSS para representar las barras visuales.
- LocalStorage como fuente de los datos del historial.

Cada categoría muestra su cantidad de casos y el porcentaje correspondiente.

Las barras se actualizan automáticamente cuando cambia la información almacenada en el historial.

## 5. Navegación

La aplicación permite navegar entre las principales vistas mediante la barra lateral y los botones internos de la interfaz.

Actualmente se encuentran disponibles:

- Dashboard.
- Simulador.

La navegación se controla mediante el estado `currentPage` de React y la función `setCurrentPage`.

El Sidebar permite cambiar entre las vistas sin necesidad de recargar la aplicación.

La opción **Enciclopedia** se encuentra visible en el Sidebar, pero actualmente está reservada para una futura funcionalidad educativa.

## Mejoras visuales e interacciones

NetWize incorpora mejoras visuales orientadas a proporcionar una experiencia de usuario más dinámica y clara.

Se implementaron:

- Animaciones suaves en las tarjetas del Dashboard mediante transiciones y efectos hover.
- Microinteracciones en las opciones del Sidebar.
- Indicador visual de la sección actualmente seleccionada en el Sidebar.
- Transiciones en las barras de estadísticas.
- Estado visual para el historial cuando no existen simulaciones registradas.

Estas mejoras no modifican la lógica principal de la aplicación y permiten una interacción más clara con los elementos de la interfaz.
