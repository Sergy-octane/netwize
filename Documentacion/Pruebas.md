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

## Semana 16 — Pruebas de navegación

### Prueba 1 — Navegación al Dashboard desde el Sidebar

**Objetivo:** Verificar que el usuario pueda acceder al Dashboard utilizando la barra lateral.

**Procedimiento:**

1. Ingresar a NetWize.
2. Ubicar la barra lateral.
3. Seleccionar "Dashboard".

**Resultado esperado:**

La aplicación debe mostrar correctamente el Dashboard.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Navegación al Simulador desde el Sidebar

**Objetivo:** Verificar que el usuario pueda acceder al Simulador utilizando la barra lateral.

**Procedimiento:**

1. Ingresar a NetWize.
2. Ubicar la barra lateral.
3. Seleccionar "Simulador".

**Resultado esperado:**

La aplicación debe mostrar correctamente el Simulador.

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Navegación mediante botones internos

**Objetivo:** Verificar que los botones internos de la aplicación permitan desplazarse entre las vistas principales.

**Procedimiento:**

1. Ingresar al Dashboard.
2. Seleccionar la opción para iniciar una simulación.
3. Verificar el acceso al Simulador.
4. Utilizar la opción para regresar al Dashboard.

**Resultado esperado:**

El usuario debe poder desplazarse correctamente entre Dashboard y Simulador.

**Resultado obtenido:** Correcto.

---

### Prueba 4 — Revisión de Enciclopedia

**Objetivo:** Verificar el comportamiento actual de la opción Enciclopedia.

**Procedimiento:**

1. Ingresar a NetWize.
2. Ubicar la opción "Enciclopedia" en el Sidebar.
3. Seleccionarla.

**Resultado esperado:**

La opción debe permanecer identificada como una funcionalidad pendiente de desarrollo.

**Resultado obtenido:** Correcto. La opción se encuentra visible, pero todavía no cuenta con una vista o funcionalidad asociada.

---

### Resultado general

Las pruebas realizadas durante la Semana 16 permitieron verificar el funcionamiento de la navegación principal de NetWize.

El Sidebar permite acceder correctamente al Dashboard y al Simulador, y los botones internos de navegación funcionan de acuerdo con lo esperado.

La Enciclopedia queda definida como una funcionalidad futura.

## Semana 17 — Pruebas responsive

### Prueba 1 — Visualización en celular

**Objetivo:** Verificar que la interfaz se adapte correctamente a pantallas pequeñas.

**Procedimiento:**

1. Abrir NetWize en un tamaño de pantalla correspondiente a un celular.
2. Revisar la distribución de los elementos.
3. Verificar que no existan elementos fuera de la pantalla.

**Resultado esperado:**

La interfaz debe adaptarse correctamente al tamaño disponible.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Visualización en tablet

**Objetivo:** Verificar el comportamiento de la interfaz en tamaños de pantalla correspondientes a tablets.

**Procedimiento:**

1. Abrir NetWize en un tamaño de pantalla correspondiente a una tablet.
2. Revisar la barra lateral.
3. Verificar la distribución del contenido.

**Resultado esperado:**

El Sidebar y el contenido principal deben mostrarse correctamente sin afectar la navegación.

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Visualización en portátil

**Objetivo:** Verificar que la interfaz mantenga su distribución en pantallas de mayor tamaño.

**Procedimiento:**

1. Abrir NetWize en un tamaño de pantalla correspondiente a un portátil.
2. Revisar el Sidebar y el contenido principal.
3. Verificar la navegación.

**Resultado esperado:**

Todos los elementos deben mostrarse correctamente y mantener su distribución.

**Resultado obtenido:** Correcto.

---

### Prueba 4 — Corrección del Sidebar

**Objetivo:** Verificar que el Sidebar se muestre correctamente después del ajuste del breakpoint responsive.

**Procedimiento:**

1. Probar NetWize en diferentes anchos de pantalla.
2. Revisar la visibilidad del Sidebar.
3. Verificar que la navegación continúe funcionando.

**Resultado esperado:**

El Sidebar debe mostrarse correctamente en los tamaños establecidos para tablets y pantallas mayores.

**Resultado obtenido:** Correcto.

---

### Prueba 5 — Desbordamiento horizontal

**Objetivo:** Verificar que ningún elemento genere desplazamiento horizontal innecesario.

**Procedimiento:**

1. Revisar NetWize en diferentes tamaños de pantalla.
2. Desplazarse por las diferentes vistas.
3. Verificar los límites de la interfaz.

**Resultado esperado:**

El contenido debe mantenerse dentro del ancho disponible.

**Resultado obtenido:** Correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 17 permitieron verificar el comportamiento responsive de NetWize en diferentes tamaños de pantalla.

Se corrigió el comportamiento del Sidebar y se confirmó que la interfaz mantiene una distribución adecuada sin realizar cambios estructurales en el diseño.

## Semana 18 — Pruebas de interfaz y microinteracciones

### Prueba 1 — Estado activo del Sidebar

**Objetivo:** Verificar que la opción correspondiente a la página actual se identifique visualmente.

**Procedimiento:**

1. Abrir NetWize.
2. Seleccionar Dashboard.
3. Seleccionar Simulador.
4. Revisar el estado visual de las opciones.

**Resultado esperado:**

La página seleccionada debe mostrarse resaltada visualmente.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Microinteracciones

**Objetivo:** Verificar el funcionamiento de las animaciones y efectos hover.

**Procedimiento:**

1. Pasar el cursor sobre las tarjetas del Dashboard.
2. Pasar el cursor sobre las opciones del Sidebar.
3. Revisar las transiciones visuales.

**Resultado esperado:**

Los elementos deben responder suavemente a la interacción del usuario.

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Estado vacío del historial

**Objetivo:** Verificar la visualización del historial cuando no existen registros.

**Procedimiento:**

1. Eliminar temporalmente el registro `historial` de LocalStorage.
2. Recargar NetWize.
3. Revisar la sección Historial de casos.

**Resultado esperado:**

Debe mostrarse un mensaje indicando que todavía no existen casos resueltos.

**Resultado obtenido:** Correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 18 permitieron verificar las nuevas animaciones, microinteracciones y estados visuales implementados en NetWize.

Las funcionalidades principales continúan funcionando correctamente después de las mejoras de interfaz.

## Semana 19 — Pruebas de Enciclopedia N1

### Prueba 1 — Visualización de conceptos

**Objetivo:** Verificar que los conceptos almacenados en `encyclopedia.json` se carguen correctamente.

**Procedimiento:**

1. Abrir NetWize.
2. Seleccionar Enciclopedia desde el Sidebar.
3. Revisar las tarjetas mostradas.

**Resultado esperado:**

Los conceptos deben aparecer correctamente en la Enciclopedia.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Información de los conceptos

**Objetivo:** Verificar que cada concepto muestre la información correspondiente.

**Procedimiento:**

1. Abrir la Enciclopedia.
2. Revisar diferentes tarjetas.
3. Comprobar las secciones de cada concepto.

**Resultado esperado:**

Cada tarjeta debe mostrar:

- ¿Qué es?
- ¿Para qué sirve?
- ¿Qué debo revisar como N1?

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Navegación

**Objetivo:** Verificar que la Enciclopedia pueda abrirse desde el Sidebar.

**Procedimiento:**

1. Abrir NetWize.
2. Seleccionar Enciclopedia.
3. Navegar hacia Dashboard y Simulador.
4. Regresar a Enciclopedia.

**Resultado esperado:**

La navegación debe funcionar correctamente sin recargar la aplicación.

**Resultado obtenido:** Correcto.

---

### Prueba 4 — Responsive

**Objetivo:** Verificar que las tarjetas se adapten a diferentes tamaños de pantalla.

**Procedimiento:**

1. Probar la Enciclopedia en celular.
2. Probarla en tablet.
3. Probarla en portátil.
4. Revisar la distribución de las tarjetas.

**Resultado esperado:**

Las tarjetas deben adaptarse al ancho disponible sin generar desbordamiento horizontal.

**Resultado obtenido:** Correcto.

---

### Prueba 5 — Carga dinámica

**Objetivo:** Verificar que la Enciclopedia genere las tarjetas a partir del archivo JSON.

**Procedimiento:**

1. Abrir la Enciclopedia.
2. Revisar los conceptos cargados.
3. Comprobar que la información corresponda al contenido de `encyclopedia.json`.

**Resultado esperado:**

Los conceptos deben generarse automáticamente a partir de los datos almacenados en el archivo JSON.

**Resultado obtenido:** Correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 19 permitieron verificar el funcionamiento de la Enciclopedia N1, su navegación, carga dinámica de información y comportamiento responsive.

La nueva funcionalidad se integra correctamente con las demás vistas de NetWize.

---

## Semana 20 — Pruebas de optimización y limpieza

### Prueba 1 — Consola del navegador

**Objetivo:** Verificar que no existan errores visibles en la consola.

**Procedimiento:**

1. Abrir NetWize.
2. Abrir las herramientas de desarrollo del navegador.
3. Revisar la consola.
4. Navegar entre las diferentes vistas.

**Resultado esperado:**

No deben aparecer errores relacionados con la aplicación.

**Resultado obtenido:** Correcto.

---

### Prueba 2 — Funcionamiento general

**Objetivo:** Verificar que las funcionalidades principales continúen funcionando después de la limpieza.

**Procedimiento:**

1. Abrir el Dashboard.
2. Abrir el Simulador.
3. Completar una simulación.
4. Abrir la Enciclopedia.
5. Navegar entre las diferentes vistas.

**Resultado esperado:**

Todas las funcionalidades deben continuar funcionando correctamente.

**Resultado obtenido:** Correcto.

---

### Prueba 3 — Persistencia del historial

**Objetivo:** Verificar que el historial continúe funcionando después de la revisión del código.

**Procedimiento:**

1. Completar una simulación.
2. Revisar el historial.
3. Recargar la aplicación.
4. Revisar nuevamente el historial.

**Resultado esperado:**

El registro debe mantenerse almacenado después de recargar la aplicación.

**Resultado obtenido:** Correcto.

---

### Prueba 4 — Responsive

**Objetivo:** Verificar que la limpieza del código no afecte la adaptación de la interfaz.

**Procedimiento:**

1. Probar NetWize en celular.
2. Probar NetWize en tablet.
3. Probar NetWize en portátil.
4. Revisar las diferentes vistas.

**Resultado esperado:**

La interfaz debe mantener su comportamiento responsive.

**Resultado obtenido:** Correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 20 permitieron comprobar que las funcionalidades principales continúan funcionando correctamente después de la optimización y limpieza del código.

No se detectaron errores que afecten el funcionamiento de NetWize.
