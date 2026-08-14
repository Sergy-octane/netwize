# Pruebas de NetWize

## Objetivo

Verificar que las funcionalidades principales de NetWize funcionen correctamente y que las respuestas del simulador produzcan los resultados esperados.

---

## Prueba 1 — Selección de casos

**Objetivo:** verificar que el usuario pueda seleccionar diferentes casos.

**Procedimiento:**

1. Ingresar al simulador.
2. Seleccionar un caso.
3. Verificar que la información mostrada corresponda al caso seleccionado.

**Resultado esperado:**

El simulador debe mostrar el título, categoría, nivel, descripción y primer nodo del caso seleccionado.

**Estado:** Aprobado.

---

## Prueba 2 — Navegación entre nodos

**Objetivo:** verificar el funcionamiento de los árboles de decisión.

**Procedimiento:**

1. Seleccionar un caso.
2. Responder una pregunta.
3. Seleccionar una opción que tenga un siguiente nodo.

**Resultado esperado:**

El simulador debe mostrar la siguiente pregunta correspondiente al nodo indicado.

**Estado:** Aprobado.

---

## Prueba 3 — Diagnóstico

**Objetivo:** verificar que el sistema muestre el diagnóstico correspondiente.

**Procedimiento:**

1. Seleccionar un caso.
2. Responder las preguntas.
3. Seleccionar una opción que contenga un diagnóstico.

**Resultado esperado:**

El diagnóstico debe aparecer en pantalla.

**Estado:** Aprobado.

---

## Prueba 4 — Solución

**Objetivo:** verificar que el sistema muestre la solución correspondiente.

**Procedimiento:**

1. Seleccionar un caso.
2. Completar el flujo de decisión.
3. Seleccionar una opción que contenga una solución.

**Resultado esperado:**

La solución recomendada debe aparecer en pantalla.

**Estado:** Aprobado.

---

## Prueba 5 — Navegación Dashboard / Simulador

**Objetivo:** verificar la navegación entre las páginas principales.

**Procedimiento:**

1. Ingresar al Dashboard.
2. Seleccionar "Iniciar simulación".
3. Completar o abandonar el simulador.
4. Seleccionar "Volver al Dashboard".

**Resultado esperado:**

El usuario debe poder desplazarse entre Dashboard y Simulador correctamente.

**Estado:** Aprobado.

---

## Prueba 6 — Almacenamiento del historial

**Objetivo:** verificar que las simulaciones finalizadas sean almacenadas.

**Procedimiento:**

1. Completar un caso.
2. Revisar el historial en el Dashboard.
3. Recargar la página.

**Resultado esperado:**

El registro debe mantenerse después de recargar la aplicación.

**Estado:** Aprobado.

---

## Prueba 7 — Fecha y hora

**Objetivo:** verificar que cada simulación registre la fecha y hora.

**Procedimiento:**

1. Completar una simulación.
2. Ingresar al Dashboard.
3. Revisar el historial.

**Resultado esperado:**

Cada registro debe mostrar el caso realizado y su fecha y hora.

**Estado:** Aprobado.

---
## Semana 14 — Pruebas de estadísticas

### Prueba 1 — Contador de casos resueltos

**Objetivo:** Verificar que el Dashboard muestre correctamente la cantidad de casos registrados.

**Resultado esperado:** El número mostrado debe coincidir con la cantidad de registros almacenados en el historial.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Contador de simulaciones

**Objetivo:** Verificar que el Dashboard muestre la cantidad de simulaciones realizadas.

**Resultado esperado:** El contador debe actualizarse utilizando el historial almacenado.

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Categoría más frecuente

**Objetivo:** Verificar que NetWize identifique correctamente la categoría con mayor cantidad de casos.

**Resultado esperado:** El Dashboard debe mostrar la categoría con mayor frecuencia.

**Resultado obtenido:** Correcto.

---

### Prueba 4 — Barras de categorías

**Objetivo:** Verificar la representación visual de la frecuencia de las categorías.

**Resultado esperado:** Cada categoría debe mostrar una barra proporcional a la cantidad de casos registrados.

**Resultado obtenido:** Correcto.

---

### Prueba 5 — Persistencia de estadísticas

**Objetivo:** Verificar que las estadísticas continúen disponibles después de recargar la aplicación.

**Resultado esperado:** Los datos deben mantenerse debido al almacenamiento mediante `localStorage`.

**Resultado obtenido:** Correcto.

## Resultado general

Las pruebas realizadas hasta la Semana 13 permiten verificar el funcionamiento de las principales características implementadas en NetWize.

Las funcionalidades probadas se encuentran operativas.

## Semana 15 — Pruebas de gráficas y estadísticas visuales

### Prueba 1 — Actualización de porcentajes

**Objetivo:** Verificar que los porcentajes de las categorías se calculen automáticamente.

**Resultado esperado:** El porcentaje debe cambiar cuando se agregan nuevos casos al historial.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Actualización de barras

**Objetivo:** Verificar que el tamaño de las barras corresponda al porcentaje de cada categoría.

**Resultado esperado:** Las barras deben aumentar o disminuir proporcionalmente según la cantidad de casos.

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Múltiples categorías

**Objetivo:** Verificar la representación de varias categorías simultáneamente.

**Resultado esperado:** Cada categoría debe mostrar su propia cantidad, porcentaje y barra.

**Resultado obtenido:** Correcto.

---

### Prueba 4 — Sin librerías externas

**Objetivo:** Verificar que las gráficas funcionen sin instalar librerías adicionales.

**Resultado esperado:** Las gráficas deben generarse utilizando React, JavaScript y Tailwind CSS.

**Resultado obtenido:** Correcto.

---

### Prueba 5 — Actualización dinámica

**Objetivo:** Verificar que las estadísticas cambien al resolver diferentes casos.

**Resultado esperado:** Las barras y porcentajes deben subir o disminuir dependiendo de los casos registrados.

**Resultado obtenido:** Correcto.
