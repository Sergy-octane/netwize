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

## Resultado general

Las pruebas realizadas hasta la Semana 13 permiten verificar el funcionamiento de las principales características implementadas en NetWize.

Las funcionalidades probadas se encuentran operativas.
