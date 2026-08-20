# Bitácora de Desarrollo - NetWize

## Semana 1

### Actividades

- Instalación de Node.js.
- Configuración de Visual Studio Code.
- Creación del proyecto React con Vite.
- Creación del repositorio en GitHub.
- Primer commit del proyecto.
- Estudio de conceptos básicos de React.
- Comprensión de la estructura inicial de `App.jsx`.
- Primera modificación de la aplicación.
- Creación de la pantalla inicial de NetWize.
- Actualización del repositorio GitHub.

---

## Semana 2

### Actividades

- Estudio de la estructura de componentes en React.
- Creación de componentes para organizar la interfaz.
- Implementación inicial de la estructura visual de NetWize.
- Creación de los componentes `Navbar`, `Sidebar` y `Layout`.
- Organización de los archivos del proyecto.
- Primeros avances en la navegación de la aplicación.

---

## Semana 3

### Actividades

- Definición de los primeros casos de soporte técnico.
- Diseño de los primeros árboles de decisión.
- Creación del archivo `casos.json`.
- Definición de preguntas y opciones para los diferentes escenarios.
- Organización de los casos por categoría y nivel.
- Separación de los datos de los casos respecto a la lógica de la aplicación.

### Casos iniciales

- No tengo internet.
- WiFi lento.
- Problemas DNS.

---

## Semana 4

### Actividades

- Estudio y aplicación de Tailwind CSS.
- Implementación de estilos para la interfaz.
- Creación de tarjetas para presentar la información.
- Diseño inicial del simulador.
- Implementación de botones para las opciones de los casos.
- Mejoras visuales en la estructura general de NetWize.

---

## Semana 5

### Actividades

- Desarrollo del Dashboard principal.
- Implementación de la estructura visual del panel principal.
- Creación de indicadores iniciales.
- Integración del Dashboard con la estructura general de la aplicación.
- Organización de las páginas principales del proyecto.

---

## Semana 6

### Actividades

- Implementación de la navegación entre las diferentes vistas.
- Creación del estado `currentPage`.
- Integración de `Dashboard` y `Simulator` dentro de `Layout`.
- Implementación de navegación entre Dashboard y Simulador.
- Pruebas de funcionamiento de la navegación.

---

## Semana 7

### Actividades

- Mejoras en el diseño responsive de la aplicación.
- Ajustes de la barra lateral y navegación.
- Mejoras en botones, tarjetas y distribución de contenido.
- Organización visual del simulador.
- Ajustes de estilos utilizando Tailwind CSS.

---

## Semana 8

### Actividades

- Desarrollo de la lógica inicial del simulador.
- Implementación de estados utilizando `useState`.
- Manejo del caso seleccionado.
- Manejo del nodo actual del árbol de decisión.
- Implementación de navegación entre nodos.
- Pruebas de diferentes rutas dentro de los árboles.

---

## Semana 9

### Actividades

- Integración de los datos almacenados en `casos.json` con el simulador.
- Implementación de la lectura dinámica de los casos.
- Eliminación de información repetida en los componentes.
- Generación dinámica de los botones de selección de casos.
- Pruebas con diferentes escenarios.

---

## Semana 10

### Actividades

- Implementación de diagnósticos dinámicos.
- Implementación de soluciones dinámicas.
- Asociación de diagnósticos y soluciones con las opciones de cada nodo.
- Limpieza de resultados anteriores al cambiar de nodo.
- Pruebas de los diferentes caminos de los árboles de decisión.

---

## Semana 11

### Actividades

- Corrección de errores encontrados durante las pruebas.
- Revisión de la estructura de los árboles de decisión.
- Corrección de referencias entre nodos.
- Pruebas de los casos existentes.
- Mejoras en la presentación de la información.
- Incorporación de información adicional en cada caso:
  - Categoría.
  - Nivel.
  - Descripción.
- Implementación del indicador del paso actual dentro del árbol.

---

## Semana 12

### Actividades

- Consolidación del simulador de soporte técnico.
- Implementación de múltiples casos utilizando una estructura de datos común.
- Incorporación del caso de Internet intermitente.
- Diseño de nuevos caminos de decisión.
- Pruebas de diferentes respuestas dentro de los casos.
- Corrección de errores relacionados con la navegación entre nodos.
- Implementación funcional de la navegación entre Dashboard y Simulador.
- Revisión general de la interfaz del simulador.

### Resultado

El simulador permite seleccionar diferentes casos y recorrer sus respectivos árboles de decisión, mostrando diagnósticos y soluciones de acuerdo con las respuestas seleccionadas.

---

## Semana 13

### Objetivo

Implementar almacenamiento local para conservar un historial de las simulaciones realizadas.

### Actividades

- Estudio del funcionamiento de `localStorage`.
- Pruebas de almacenamiento de información directamente desde el navegador.
- Implementación del almacenamiento del historial de simulaciones.
- Recuperación del historial al iniciar el simulador.
- Conversión de los datos a formato JSON para su almacenamiento.
- Implementación del registro de fecha y hora de cada simulación.
- Integración del historial con el Dashboard.
- Pruebas de persistencia después de recargar la aplicación.
- Corrección de errores relacionados con el cambio de estructura de los datos almacenados.
- Verificación del funcionamiento del historial entre el Simulador y el Dashboard.

### Estructura del registro

Cada simulación almacena:

- Nombre del caso.
- Fecha y hora de realización.

Ejemplo:

``json
{
  "caso": "WiFi lento",
  "fecha": "12/08/2026, 08:15:32"
}
---
## Semana 14

### Objetivos

- Mostrar estadísticas básicas del simulador.
- Mostrar cantidad de casos resueltos.
- Mostrar cantidad de simulaciones realizadas.
- Identificar las categorías de soporte más frecuentes.
- Representar visualmente la frecuencia de las categorías.

### Desarrollo

- Se implementó la lectura del historial de simulaciones almacenado en `localStorage`.
- Se agregaron estadísticas dinámicas al Dashboard.
- Se implementó el contador de casos resueltos.
- Se implementó el contador de simulaciones realizadas.
- Se implementó el cálculo de la categoría de soporte más frecuente.
- Se agregó un apartado de categorías frecuentes.
- Se implementaron barras visuales para representar la frecuencia de cada categoría.
- Las estadísticas se generan automáticamente a partir del historial almacenado.
- Se verificó el funcionamiento de las estadísticas al regresar desde el simulador al Dashboard.

### Resultado

El Dashboard de NetWize ahora presenta información dinámica sobre el uso del simulador y permite visualizar los casos resueltos, las simulaciones realizadas y las categorías de soporte más frecuentes.

Las estadísticas utilizan los datos almacenados localmente mediante `localStorage`, evitando que la información se pierda al recargar la aplicación.

## Semana 15

### Objetivos

- Crear gráficas simples sin utilizar librerías externas.
- Representar estadísticas mediante barras visuales.
- Implementar porcentajes dinámicos.
- Mejorar la apariencia del Dashboard.

### Desarrollo

- Se mejoró la presentación visual de las estadísticas del Dashboard.
- Se implementaron tarjetas visuales para mostrar información resumida.
- Se agregaron barras de progreso utilizando únicamente clases de Tailwind CSS.
- Se implementó el cálculo dinámico del porcentaje correspondiente a cada categoría.
- Se agregó la representación del número de casos y su porcentaje.
- Se incorporó una transición visual en las barras para mejorar la experiencia de usuario.
- Las gráficas utilizan directamente los datos almacenados en el historial de simulaciones.
- No se utilizaron librerías externas para la generación de gráficas.

### Resultado

El Dashboard de NetWize cuenta con una representación visual de las categorías de soporte más frecuentes mediante barras dinámicas. Los porcentajes se calculan automáticamente según los casos registrados, permitiendo que las gráficas se actualicen de acuerdo con el uso del simulador.

## Semana 16

### Objetivos

* Revisar la navegación general de la aplicación.
* Implementar navegación funcional desde la barra lateral.
* Permitir el acceso al Dashboard y al Simulador desde el Sidebar.
* Verificar el funcionamiento de los botones internos de navegación.
* Revisar el comportamiento de la opción Enciclopedia.

### Desarrollo

* Se revisó el funcionamiento de la barra lateral de navegación.
* Se identificó que las opciones del Sidebar eran únicamente elementos visuales y no ejecutaban ninguna acción.
* Se implementó el estado `currentPage` para controlar la vista mostrada en la aplicación.
* Se conectó el componente `Sidebar` con `Layout` mediante la función `setCurrentPage`.
* Se implementó la navegación hacia el Dashboard desde el Sidebar.
* Se implementó la navegación hacia el Simulador desde el Sidebar.
* Se verificó el funcionamiento de los botones internos del Dashboard y del Simulador.
* Se realizaron pruebas de navegación entre las principales vistas de NetWize.
* Se revisó la opción Enciclopedia y se determinó que será desarrollada como una funcionalidad futura.
* Se realizó una revisión general del funcionamiento de la interfaz y la navegación.

### Resultado

La barra lateral de NetWize ahora permite navegar correctamente entre el Dashboard y el Simulador.

La navegación dejó de ser únicamente visual y pasó a controlar las vistas mostradas mediante el estado de React.

La opción Enciclopedia permanece como una funcionalidad futura, cuya finalidad será proporcionar explicaciones sencillas sobre conceptos relacionados con redes y soporte técnico.

## Semana 17

### Objetivos

* Revisar el comportamiento responsive de NetWize.
* Verificar la interfaz en celular, tablet y portátil.
* Detectar y corregir pequeños problemas de visualización.
* Mantener el diseño existente sin realizar cambios estructurales.

### Desarrollo

* Se realizó una revisión general de la interfaz en diferentes tamaños de pantalla.
* Se verificó el comportamiento de NetWize en dispositivos móviles, tablets y portátiles.
* Se identificó un problema de visualización de la barra lateral en determinados tamaños de pantalla.
* Se ajustó el breakpoint responsive del Sidebar para mejorar su visualización en tablets y pantallas de mayor tamaño.
* Se verificó nuevamente la navegación después del ajuste.
* Se comprobó que no existieran problemas de desbordamiento horizontal o elementos fuera de la pantalla.
* Se realizó una revisión final de la interfaz responsive.

### Resultado

NetWize presenta un comportamiento responsive adecuado en celular, tablet y portátil.

Se corrigió el comportamiento de visualización del Sidebar en determinados tamaños de pantalla sin modificar el diseño general de la aplicación.


