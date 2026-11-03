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

**Objetivo:** verificar que el Dashboard muestre correctamente la cantidad de casos registrados.

**Resultado esperado:** el número mostrado debe coincidir con la cantidad de registros almacenados en el historial.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Contador de simulaciones

**Objetivo:** verificar que el Dashboard muestre la cantidad de simulaciones realizadas.

**Resultado esperado:** el contador debe actualizarse utilizando el historial almacenado.

**Resultado obtenido:** correcto.

---

### Prueba 3 — Categoría más frecuente

**Objetivo:** verificar que NetWize identifique correctamente la categoría con mayor cantidad de casos.

**Resultado esperado:** el Dashboard debe mostrar la categoría con mayor frecuencia.

**Resultado obtenido:** correcto.

---

### Prueba 4 — Barras de categorías

**Objetivo:** verificar la representación visual de la frecuencia de las categorías.

**Resultado esperado:** cada categoría debe mostrar una barra proporcional a la cantidad de casos registrados.

**Resultado obtenido:** correcto.

---

### Prueba 5 — Persistencia de estadísticas

**Objetivo:** verificar que las estadísticas continúen disponibles después de recargar la aplicación.

**Resultado esperado:** los datos deben mantenerse debido al almacenamiento mediante `localStorage`.

**Resultado obtenido:** correcto.

## Resultado general

Las pruebas realizadas hasta la Semana 14 permitieron verificar el funcionamiento de las principales características implementadas en NetWize.

Las funcionalidades probadas se encuentran operativas.

---

## Semana 15 — Pruebas de gráficas y estadísticas visuales

### Prueba 1 — Actualización de porcentajes

**Objetivo:** verificar que los porcentajes de las categorías se calculen automáticamente.

**Resultado esperado:** el porcentaje debe cambiar cuando se agregan nuevos casos al historial.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Actualización de barras

**Objetivo:** verificar que el tamaño de las barras corresponda al porcentaje de cada categoría.

**Resultado esperado:** las barras deben aumentar o disminuir proporcionalmente según la cantidad de casos.

**Resultado obtenido:** correcto.

---

### Prueba 3 — Múltiples categorías

**Objetivo:** verificar la representación de varias categorías simultáneamente.

**Resultado esperado:** cada categoría debe mostrar su propia cantidad, porcentaje y barra.

**Resultado obtenido:** correcto.

---

### Prueba 4 — Sin librerías externas

**Objetivo:** verificar que las gráficas funcionen sin instalar librerías adicionales.

**Resultado esperado:** las gráficas deben generarse utilizando React, JavaScript y Tailwind CSS.

**Resultado obtenido:** correcto.

---

### Prueba 5 — Actualización dinámica

**Objetivo:** verificar que las estadísticas cambien al resolver diferentes casos.

**Resultado esperado:** las barras y porcentajes deben subir o disminuir dependiendo de los casos registrados.

**Resultado obtenido:** correcto.

---

## Semana 16 — Pruebas de navegación

### Prueba 1 — Navegación al Dashboard desde el Sidebar

**Objetivo:** verificar que el usuario pueda acceder al Dashboard utilizando la barra lateral.

**Procedimiento:**

1. Ingresar a NetWize.
2. Ubicar la barra lateral.
3. Seleccionar "Dashboard".

**Resultado esperado:**

La aplicación debe mostrar correctamente el Dashboard.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Navegación al Simulador desde el Sidebar

**Objetivo:** verificar que el usuario pueda acceder al Simulador utilizando la barra lateral.

**Procedimiento:**

1. Ingresar a NetWize.
2. Ubicar la barra lateral.
3. Seleccionar "Simulador".

**Resultado esperado:**

La aplicación debe mostrar correctamente el Simulador.

**Resultado obtenido:** correcto.

---

### Prueba 3 — Navegación mediante botones internos

**Objetivo:** verificar que los botones internos de la aplicación permitan desplazarse entre las vistas principales.

**Procedimiento:**

1. Ingresar al Dashboard.
2. Seleccionar la opción para iniciar una simulación.
3. Verificar el acceso al Simulador.
4. Utilizar la opción para regresar al Dashboard.

**Resultado esperado:**

El usuario debe poder desplazarse correctamente entre Dashboard y Simulador.

**Resultado obtenido:** correcto.

---

### Prueba 4 — Revisión de Enciclopedia

**Objetivo:** verificar el comportamiento de la opción Enciclopedia durante esta etapa del desarrollo.

**Procedimiento:**

1. Ingresar a NetWize.
2. Ubicar la opción "Enciclopedia" en el Sidebar.
3. Seleccionarla.

**Resultado esperado:**

La opción debe permanecer identificada como una funcionalidad pendiente de desarrollo.

**Resultado obtenido:** correcto. En esta etapa, la opción se encontraba visible, pero todavía no contaba con una vista o funcionalidad asociada.

---

### Resultado general

Las pruebas realizadas durante la Semana 16 permitieron verificar el funcionamiento de la navegación principal de NetWize.

El Sidebar permite acceder correctamente al Dashboard y al Simulador, y los botones internos de navegación funcionan de acuerdo con lo esperado.

La Enciclopedia quedó definida como una funcionalidad futura y fue desarrollada posteriormente.

---

## Semana 17 — Pruebas responsive

### Prueba 1 — Visualización en celular

**Objetivo:** verificar que la interfaz se adapte correctamente a pantallas pequeñas.

**Procedimiento:**

1. Abrir NetWize en un tamaño de pantalla correspondiente a un celular.
2. Revisar la distribución de los elementos.
3. Verificar que no existan elementos fuera de la pantalla.

**Resultado esperado:**

La interfaz debe adaptarse correctamente al tamaño disponible.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Visualización en tablet

**Objetivo:** verificar el comportamiento de la interfaz en tamaños de pantalla correspondientes a tablets.

**Procedimiento:**

1. Abrir NetWize en un tamaño de pantalla correspondiente a una tablet.
2. Revisar la barra lateral.
3. Verificar la distribución del contenido.

**Resultado esperado:**

El Sidebar y el contenido principal deben mostrarse correctamente sin afectar la navegación.

**Resultado obtenido:** correcto.

---

### Prueba 3 — Visualización en portátil

**Objetivo:** verificar que la interfaz mantenga su distribución en pantallas de mayor tamaño.

**Procedimiento:**

1. Abrir NetWize en un tamaño de pantalla correspondiente a un portátil.
2. Revisar el Sidebar y el contenido principal.
3. Verificar la navegación.

**Resultado esperado:**

Todos los elementos deben mostrarse correctamente y mantener su distribución.

**Resultado obtenido:** correcto.

---

### Prueba 4 — Corrección del Sidebar

**Objetivo:** verificar que el Sidebar se muestre correctamente después del ajuste del breakpoint responsive.

**Procedimiento:**

1. Probar NetWize en diferentes anchos de pantalla.
2. Revisar la visibilidad del Sidebar.
3. Verificar que la navegación continúe funcionando.

**Resultado esperado:**

El Sidebar debe mostrarse correctamente en los tamaños establecidos para tablets y pantallas mayores.

**Resultado obtenido:** correcto.

---

### Prueba 5 — Desbordamiento horizontal

**Objetivo:** verificar que ningún elemento genere desplazamiento horizontal innecesario.

**Procedimiento:**

1. Revisar NetWize en diferentes tamaños de pantalla.
2. Desplazarse por las diferentes vistas.
3. Verificar los límites de la interfaz.

**Resultado esperado:**

El contenido debe mantenerse dentro del ancho disponible.

**Resultado obtenido:** correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 17 permitieron verificar el comportamiento responsive de NetWize en diferentes tamaños de pantalla.

Se corrigió el comportamiento del Sidebar y se confirmó que la interfaz mantiene una distribución adecuada sin realizar cambios estructurales en el diseño.

---

## Semana 18 — Pruebas de interfaz y microinteracciones

### Prueba 1 — Estado activo del Sidebar

**Objetivo:** verificar que la opción correspondiente a la página actual se identifique visualmente.

**Procedimiento:**

1. Abrir NetWize.
2. Seleccionar Dashboard.
3. Seleccionar Simulador.
4. Revisar el estado visual de las opciones.

**Resultado esperado:**

La página seleccionada debe mostrarse resaltada visualmente.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Microinteracciones

**Objetivo:** verificar el funcionamiento de las animaciones y efectos hover.

**Procedimiento:**

1. Pasar el cursor sobre las tarjetas del Dashboard.
2. Pasar el cursor sobre las opciones del Sidebar.
3. Revisar las transiciones visuales.

**Resultado esperado:**

Los elementos deben responder suavemente a la interacción del usuario.

**Resultado obtenido:** correcto.

---

### Prueba 3 — Estado vacío del historial

**Objetivo:** verificar la visualización del historial cuando no existen registros.

**Procedimiento:**

1. Eliminar temporalmente el registro `historial` de LocalStorage.
2. Recargar NetWize.
3. Revisar la sección Historial de casos.

**Resultado esperado:**

Debe mostrarse un mensaje indicando que todavía no existen casos resueltos.

**Resultado obtenido:** correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 18 permitieron verificar las nuevas animaciones, microinteracciones y estados visuales implementados en NetWize.

Las funcionalidades principales continúan funcionando correctamente después de las mejoras de interfaz.

---

## Semana 19 — Pruebas de Enciclopedia N1

### Prueba 1 — Visualización de conceptos

**Objetivo:** verificar que los conceptos almacenados en `encyclopedia.json` se carguen correctamente.

**Procedimiento:**

1. Abrir NetWize.
2. Seleccionar Enciclopedia desde el Sidebar.
3. Revisar las tarjetas mostradas.

**Resultado esperado:**

Los conceptos deben aparecer correctamente en la Enciclopedia.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Información de los conceptos

**Objetivo:** verificar que cada concepto muestre la información correspondiente.

**Procedimiento:**

1. Abrir la Enciclopedia.
2. Revisar diferentes tarjetas.
3. Comprobar las secciones de cada concepto.

**Resultado esperado:**

Cada tarjeta debe mostrar:

- ¿Qué es?
- ¿Para qué sirve?
- ¿Qué debo revisar como N1?

**Resultado obtenido:** correcto.

---

### Prueba 3 — Navegación

**Objetivo:** verificar que la Enciclopedia pueda abrirse desde el Sidebar.

**Procedimiento:**

1. Abrir NetWize.
2. Seleccionar Enciclopedia.
3. Navegar hacia Dashboard y Simulador.
4. Regresar a Enciclopedia.

**Resultado esperado:**

La navegación debe funcionar correctamente sin recargar la aplicación.

**Resultado obtenido:** correcto.

---

### Prueba 4 — Responsive

**Objetivo:** verificar que las tarjetas se adapten a diferentes tamaños de pantalla.

**Procedimiento:**

1. Probar la Enciclopedia en celular.
2. Probarla en tablet.
3. Probarla en portátil.
4. Revisar la distribución de las tarjetas.

**Resultado esperado:**

Las tarjetas deben adaptarse al ancho disponible sin generar desbordamiento horizontal.

**Resultado obtenido:** correcto.

---

### Prueba 5 — Carga dinámica

**Objetivo:** verificar que la Enciclopedia genere las tarjetas a partir del archivo JSON.

**Procedimiento:**

1. Abrir la Enciclopedia.
2. Revisar los conceptos cargados.
3. Comprobar que la información corresponda al contenido de `encyclopedia.json`.

**Resultado esperado:**

Los conceptos deben generarse automáticamente a partir de los datos almacenados en el archivo JSON.

**Resultado obtenido:** correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 19 permitieron verificar el funcionamiento de la Enciclopedia N1, su navegación, carga dinámica de información y comportamiento responsive.

La nueva funcionalidad se integra correctamente con las demás vistas de NetWize.

---

## Semana 20 — Pruebas de optimización y limpieza

### Prueba 1 — Consola del navegador

**Objetivo:** verificar que no existan errores visibles en la consola.

**Procedimiento:**

1. Abrir NetWize.
2. Abrir las herramientas de desarrollo del navegador.
3. Revisar la consola.
4. Navegar entre las diferentes vistas.

**Resultado esperado:**

No deben aparecer errores relacionados con la aplicación.

**Resultado obtenido:** correcto.

---

### Prueba 2 — Funcionamiento general

**Objetivo:** verificar que las funcionalidades principales continúen funcionando después de la limpieza.

**Procedimiento:**

1. Abrir el Dashboard.
2. Abrir el Simulador.
3. Completar una simulación.
4. Abrir la Enciclopedia.
5. Navegar entre las diferentes vistas.

**Resultado esperado:**

Todas las funcionalidades deben continuar funcionando correctamente.

**Resultado obtenido:** correcto.

---

### Prueba 3 — Persistencia del historial

**Objetivo:** verificar que el historial continúe funcionando después de la revisión del código.

**Procedimiento:**

1. Completar una simulación.
2. Revisar el historial.
3. Recargar la aplicación.
4. Revisar nuevamente el historial.

**Resultado esperado:**

El registro debe mantenerse almacenado después de recargar la aplicación.

**Resultado obtenido:** correcto.

---

### Prueba 4 — Responsive

**Objetivo:** verificar que la limpieza del código no afecte la adaptación de la interfaz.

**Procedimiento:**

1. Probar NetWize en celular.
2. Probar NetWize en tablet.
3. Probar NetWize en portátil.
4. Revisar las diferentes vistas.

**Resultado esperado:**

La interfaz debe mantener su comportamiento responsive.

**Resultado obtenido:** correcto.

---

### Prueba 5 — Navegación del flujo de acceso

**Objetivo:** verificar la navegación entre las nuevas vistas de acceso.

**Procedimiento:**

1. Abrir NetWize.
2. Verificar que se muestre Login.
3. Acceder a Registro.
4. Acceder a Términos y condiciones.
5. Regresar al Registro.
6. Acceder a Recuperación de contraseña.
7. Regresar al Login.

**Resultado esperado:**

Las diferentes vistas deben cargarse correctamente y permitir regresar a las pantallas correspondientes.

**Resultado obtenido:** correcto.

---

### Prueba 6 — Aceptación de términos

**Objetivo:** verificar que el registro requiera la aceptación de los términos y condiciones.

**Procedimiento:**

1. Abrir la vista Registro.
2. Verificar el estado inicial del botón Crear cuenta.
3. Marcar la casilla de términos y condiciones.
4. Verificar el cambio de estado del botón.
5. Desmarcar la casilla.

**Resultado esperado:**

El botón Crear cuenta debe permanecer deshabilitado mientras los términos no sean aceptados y habilitarse al marcar la casilla.

**Resultado obtenido:** correcto.

---

### Prueba 7 — Acceso a ayuda

**Objetivo:** verificar el funcionamiento del botón de ayuda mediante WhatsApp.

**Procedimiento:**

1. Abrir diferentes vistas de NetWize.
2. Verificar que el botón de ayuda esté disponible.
3. Seleccionar el botón.
4. Comprobar que WhatsApp se abra en una nueva pestaña.

**Resultado esperado:**

El botón de ayuda debe estar disponible en las diferentes vistas y abrir correctamente el canal de contacto configurado.

**Resultado obtenido:** correcto.

---

### Resultado general

Las pruebas realizadas durante la Semana 20 permitieron comprobar que las funcionalidades principales continúan funcionando correctamente después de la optimización y limpieza del código.

También se verificó la navegación de las nuevas vistas de acceso, la aceptación de términos y el acceso a ayuda mediante WhatsApp.

---

## Semana 21 — Pruebas de autenticación local

### Prueba 1 — Registro de usuario

**Objetivo:** verificar que el sistema permita crear una cuenta con datos válidos.

**Procedimiento:**

1. Abrir la vista Registro.
2. Ingresar nombre, correo electrónico y contraseña.
3. Confirmar la contraseña.
4. Aceptar los términos y condiciones.
5. Seleccionar Crear cuenta.

**Resultado esperado:**

La cuenta debe crearse correctamente, almacenarse localmente y el usuario debe ser dirigido al Login.

**Resultado obtenido:** correcto. La cuenta se creó correctamente y el sistema mostró el mensaje de confirmación antes de regresar al Login.

**Estado:** aprobado.

---

### Prueba 2 — Almacenamiento de usuario

**Objetivo:** verificar el almacenamiento local de los datos del usuario después del registro.

**Procedimiento:**

1. Crear una cuenta.
2. Revisar el contenido de LocalStorage.
3. Consultar el registro `netwizeUser`.

**Resultado esperado:**

Debe existir un registro `netwizeUser` con los datos básicos del usuario y la contraseña almacenada mediante hash.

**Resultado obtenido:** correcto. Se verificó la existencia de `netwizeUser` y se confirmó que la contraseña no se almacena directamente, sino como un hash SHA-256.

**Estado:** aprobado.

---

### Prueba 3 — Inicio de sesión con credenciales correctas

**Objetivo:** verificar que el usuario pueda ingresar utilizando sus credenciales registradas.

**Procedimiento:**

1. Ingresar el correo y contraseña registrados.
2. Seleccionar Iniciar sesión.
3. Revisar la vista mostrada.

**Resultado esperado:**

El sistema debe validar las credenciales, crear una sesión y dirigir al Dashboard.

**Resultado obtenido:** correcto. El inicio de sesión fue exitoso y el usuario fue dirigido al Dashboard.

**Estado:** aprobado.

---

### Prueba 4 — Inicio de sesión con credenciales incorrectas

**Objetivo:** verificar que el sistema rechace credenciales incorrectas.

**Procedimiento:**

1. Ingresar un correo o contraseña incorrectos.
2. Seleccionar Iniciar sesión.
3. Revisar el mensaje mostrado.

**Resultado esperado:**

El sistema debe impedir el acceso y mostrar un mensaje de error.

**Resultado obtenido:** correcto. El acceso fue rechazado y se mostró el mensaje correspondiente.

**Estado:** aprobado.

---

### Prueba 5 — Persistencia de sesión

**Objetivo:** verificar que la sesión se mantenga después de recargar la aplicación.

**Procedimiento:**

1. Iniciar sesión correctamente.
2. Recargar la aplicación.
3. Revisar la vista mostrada.

**Resultado esperado:**

El sistema debe conservar la sesión y mostrar el Dashboard.

**Resultado obtenido:** correcto. Después de recargar la aplicación, NetWize permaneció en el Dashboard.

**Estado:** aprobado.

---

### Prueba 6 — Cierre de sesión

**Objetivo:** verificar que el usuario pueda cerrar su sesión.

**Procedimiento:**

1. Ingresar al Dashboard.
2. Seleccionar la opción Cerrar sesión desde el Sidebar.
3. Revisar la vista mostrada.
4. Consultar LocalStorage.

**Resultado esperado:**

La sesión debe eliminarse y el usuario debe regresar al Login.

**Resultado obtenido:** correcto. El usuario regresó al Login y la sesión fue eliminada de LocalStorage.

**Estado:** aprobado.

---

### Prueba 7 — Acceso después de cerrar sesión

**Objetivo:** verificar que la aplicación solicite nuevamente el acceso después de cerrar sesión.

**Procedimiento:**

1. Cerrar sesión.
2. Recargar la aplicación.
3. Revisar la vista inicial.

**Resultado esperado:**

La aplicación debe permanecer en Login.

**Resultado obtenido:** correcto. Después de recargar, NetWize permaneció en Login y no permitió continuar hacia los módulos internos mediante la navegación normal de la interfaz.

**Estado:** aprobado.

---

### Prueba 8 — Visibilidad de contraseñas en Login

**Objetivo:** verificar que el usuario pueda mostrar u ocultar la contraseña ingresada durante el inicio de sesión.

**Procedimiento:**

1. Abrir la vista Login.
2. Ingresar una contraseña.
3. Activar el control de visibilidad.
4. Volver a ocultar la contraseña.

**Resultado esperado:**

El control debe alternar correctamente entre mostrar y ocultar los caracteres de la contraseña.

**Estado:** aprobado.

---

### Prueba 9 — Visibilidad de contraseñas en Register

**Objetivo:** verificar que el usuario pueda mostrar u ocultar la contraseña y su confirmación durante el registro.

**Procedimiento:**

1. Abrir la vista Register.
2. Ingresar una contraseña y su confirmación.
3. Activar el control de visibilidad de la contraseña.
4. Activar el control de visibilidad de la confirmación.
5. Volver a ocultar ambos campos.

**Resultado esperado:**

Cada control debe permitir mostrar y ocultar su respectivo campo de contraseña de manera independiente.

**Estado:** aprobado.

---

### Prueba 10 — Validación de recuperación de contraseña

**Objetivo:** verificar la validación del correo electrónico y el mensaje de confirmación de la vista de recuperación.

**Procedimiento:**

1. Abrir la vista ForgotPassword.
2. Ingresar un correo con formato incorrecto.
3. Verificar la validación correspondiente.
4. Ingresar un correo con formato válido.
5. Enviar la solicitud.
6. Revisar el mensaje mostrado.

**Resultado esperado:**

El sistema debe validar el formato del correo electrónico y mostrar una confirmación cuando la solicitud sea procesada. No debe realizar un envío real de correo ni modificar la contraseña.

**Estado:** aprobado.

---

### Resultado general

Las pruebas realizadas durante la Semana 21 permitieron verificar el funcionamiento de la autenticación local de NetWize, incluyendo el registro de usuarios, validación de credenciales, persistencia de sesión y cierre de sesión.

También se verificaron los controles de visibilidad de contraseñas y el comportamiento de la vista de recuperación de contraseña.

La autenticación funciona mediante almacenamiento local y no representa un sistema de autenticación con servidor o base de datos remota.

---

## Semana 22 — Pruebas de ampliación del simulador y la enciclopedia

### Prueba 1 — Disponibilidad de casos del simulador

**Objetivo:** verificar que el simulador cargue los casos de soporte técnico disponibles.

**Procedimiento:**

1. Ingresar a NetWize con una sesión activa.
2. Acceder al módulo Simulador.
3. Revisar los casos disponibles.
4. Seleccionar diferentes casos para comprobar que se puedan iniciar.

**Resultado esperado:**

El simulador debe mostrar los casos disponibles y permitir iniciar una simulación.

**Resultado obtenido:** correcto. El archivo de datos contiene 19 casos de soporte técnico y se comprobó su disponibilidad durante las pruebas realizadas.

**Estado:** aprobado.

---

### Prueba 2 — Flujo de diagnóstico del simulador

**Objetivo:** verificar que las respuestas seleccionadas permitan avanzar por el flujo de diagnóstico de los casos.

**Procedimiento:**

1. Ingresar al módulo Simulador.
2. Seleccionar un caso de soporte técnico.
3. Responder las preguntas presentadas.
4. Continuar el flujo según las opciones disponibles.
5. Comprobar que se pueda llegar al diagnóstico y a la solución correspondientes.

**Resultado esperado:**

Las respuestas deben permitir avanzar por las rutas de decisión definidas para cada caso y llegar al resultado correspondiente.

**Resultado obtenido:** correcto. Se realizaron pruebas de funcionamiento de los casos del simulador y se comprobó que los flujos probados funcionaran correctamente.

**Estado:** aprobado.

---

### Prueba 3 — Visualización de conceptos de la enciclopedia

**Objetivo:** verificar que la enciclopedia cargue y presente correctamente los conceptos técnicos.

**Procedimiento:**

1. Acceder al módulo Enciclopedia.
2. Revisar los conceptos disponibles.
3. Consultar diferentes tarjetas de información.
4. Comprobar la presencia de la definición, la utilidad y las recomendaciones de revisión N1.

**Resultado esperado:**

La enciclopedia debe presentar los conceptos con su información organizada y permitir su consulta.

**Resultado obtenido:** correcto. Se verificó el funcionamiento de la enciclopedia ampliada, que contiene 82 conceptos técnicos con los campos de información requeridos.

**Estado:** aprobado.

---

### Prueba 4 — Búsqueda por diferentes campos

**Objetivo:** verificar que el buscador permita encontrar conceptos mediante diferentes campos de información.

**Procedimiento:**

1. Acceder al módulo Enciclopedia.
2. Buscar un concepto utilizando su título.
3. Realizar una búsqueda utilizando una categoría.
4. Buscar una palabra presente en la definición o en la utilidad de un concepto.
5. Realizar una búsqueda utilizando una palabra presente en las recomendaciones de revisión N1.

**Resultado esperado:**

El buscador debe mostrar los conceptos que coincidan con el texto ingresado en cualquiera de los campos habilitados para la búsqueda.

**Resultado obtenido:** correcto. Se comprobó que el buscador permite encontrar información mediante el título, la categoría, la definición, la utilidad y las recomendaciones de revisión N1.

**Estado:** aprobado.

---

### Prueba 5 — Búsqueda sin distinguir tildes

**Objetivo:** verificar que el buscador permita encontrar conceptos aunque el usuario omita las tildes.

**Procedimiento:**

1. Acceder al módulo Enciclopedia.
2. Ingresar en el buscador una palabra que contenga una vocal con tilde.
3. Repetir la búsqueda escribiendo la misma palabra sin la tilde.
4. Comparar los resultados obtenidos.

**Resultado esperado:**

El buscador debe encontrar los conceptos correspondientes tanto si la búsqueda incluye las tildes como si las omite.

**Resultado obtenido:** correcto. Se comprobó el funcionamiento de la normalización del texto, que permite realizar búsquedas sin distinguir entre letras con tilde y letras sin tilde.

**Estado:** aprobado.

---

### Prueba 6 — Validación de los datos de la enciclopedia

**Objetivo:** verificar la integridad básica de los datos almacenados en el archivo JSON de la enciclopedia.

**Procedimiento:**

1. Revisar el archivo `src/data/encyclopedia.json`.
2. Contabilizar los conceptos registrados.
3. Comprobar si existen títulos duplicados.
4. Verificar que todos los conceptos incluyan los campos obligatorios: título, categoría, definición, utilidad y recomendaciones de revisión N1.

**Resultado esperado:**

Los datos deben contener los conceptos registrados sin títulos duplicados ni campos obligatorios incompletos.

**Resultado obtenido:** correcto. La validación del archivo identificó 82 conceptos, sin títulos duplicados y sin campos obligatorios incompletos.

**Estado:** aprobado.

---

### Prueba 7 — Acceso contextual a la Enciclopedia desde el Simulador

**Objetivo:** verificar que el usuario pueda acceder a la Enciclopedia N1 desde el Simulador mediante el acceso contextual disponible.

**Procedimiento:**

1. Ingresar al Simulador.
2. Seleccionar un caso de soporte técnico.
3. Ubicar el acceso contextual a la Enciclopedia.
4. Seleccionar la opción.
5. Verificar que se muestre la Enciclopedia N1.

**Resultado esperado:**

El usuario debe poder acceder a la Enciclopedia desde el Simulador sin tener que regresar primero al menú principal.

**Estado:** pendiente de comprobación final.

---

### Resultado general

Las pruebas realizadas durante la Semana 22 permitieron verificar el funcionamiento de las ampliaciones del simulador y de la enciclopedia técnica de NetWize.

Se comprobó la disponibilidad de los casos de soporte técnico, el funcionamiento de los flujos de diagnóstico probados, la consulta de los conceptos de la enciclopedia y las mejoras incorporadas al buscador.

También se validó la integridad básica de los datos de la enciclopedia, confirmando que los 82 conceptos registrados no presentaran títulos duplicados ni campos obligatorios incompletos.
