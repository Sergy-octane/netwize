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

NetWize permite navegar entre las diferentes vistas de la aplicación mediante la barra lateral, los botones internos y los enlaces disponibles en cada pantalla.

Las principales vistas de la aplicación son:

- Bienvenida.
- Inicio de sesión.
- Registro.
- Términos y condiciones.
- Recuperación de contraseña.
- Dashboard.
- Simulador.
- Enciclopedia N1.

La navegación se controla mediante el estado `currentPage` de React y las funciones encargadas de cambiar de vista.

El componente `Sidebar` permite desplazarse entre los módulos principales sin necesidad de recargar la aplicación.

El componente `Layout` centraliza la estructura general de la aplicación y controla el acceso a las vistas internas según el estado de la sesión del usuario.

---

## Simulador de soporte técnico

NetWize incorpora un simulador interactivo orientado al aprendizaje de procedimientos básicos de diagnóstico y solución de problemas de conectividad.

Actualmente dispone de 19 casos de soporte técnico relacionados con diferentes situaciones que puede encontrar un agente de nivel 1 (N1).

El simulador permite:

- Seleccionar un caso de soporte técnico.
- Responder preguntas durante el proceso de diagnóstico.
- Seguir diferentes rutas de decisión según las respuestas seleccionadas.
- Identificar posibles causas del problema.
- Consultar el diagnóstico y la solución correspondiente al caso.
- Finalizar una simulación después de completar el flujo de diagnóstico.
- Registrar las simulaciones realizadas en el historial.

Los casos se almacenan en el archivo `src/data/casos.json` y se cargan dinámicamente desde el componente del simulador.

La información se encuentra separada de la lógica principal del componente, lo que permite agregar o modificar casos mediante el archivo JSON sin tener que reconstruir desde cero la estructura del simulador.

### Historial de simulaciones

NetWize almacena localmente el historial de las simulaciones realizadas mediante `LocalStorage`.

Los registros permiten conservar información de los casos completados y consultar la actividad desde el Dashboard.

El historial permanece disponible en el navegador mientras se conserve la información almacenada localmente.

---

## Dashboard

El Dashboard presenta un resumen de la actividad del usuario dentro de NetWize.

Entre sus elementos se encuentran:

- Indicadores relacionados con los casos resueltos y las simulaciones.
- Información sobre la actividad registrada.
- Estadísticas por categoría.
- Historial de simulaciones.
- Acceso para iniciar una nueva simulación.
- Estado visual del historial cuando todavía no existen simulaciones registradas.

La información del Dashboard utiliza los datos disponibles en el almacenamiento local de la aplicación para presentar los resultados de la actividad del usuario.

---

## Enciclopedia N1

NetWize incorpora una Enciclopedia N1 orientada a la consulta y aprendizaje de conceptos básicos e intermedios relacionados con redes, conectividad y soporte técnico.

La información se almacena en:

`src/data/encyclopedia.json`

Actualmente contiene 82 conceptos técnicos relacionados con diferentes áreas, entre ellas:

- Redes básicas.
- Direccionamiento IP y servicios de red.
- Cableado y conectividad.
- Wi-Fi.
- Tecnologías de acceso a Internet.
- Redes móviles.
- Hardware y dispositivos de red.
- Herramientas y procedimientos de diagnóstico.

Cada concepto incluye los siguientes campos:

- **Título:** nombre del concepto.
- **Categoría:** clasificación temática.
- **¿Qué es?:** definición del concepto.
- **¿Para qué sirve?:** explicación de su utilidad.
- **¿Qué debo revisar como N1?:** recomendaciones para la revisión inicial del problema.

La información se carga dinámicamente desde el archivo JSON, lo que permite agregar nuevos conceptos sin modificar la estructura principal del componente.

Las tarjetas de la enciclopedia utilizan un diseño responsive para adaptarse a diferentes tamaños de pantalla.

### Buscador de la enciclopedia

La enciclopedia incorpora un buscador que permite localizar información mediante diferentes campos del contenido.

La búsqueda se realiza sobre:

- Título del concepto.
- Categoría.
- Definición.
- Utilidad.
- Recomendaciones de revisión N1.

También se implementó una normalización del texto que permite realizar búsquedas sin distinguir entre letras con tilde y letras sin tilde.

Esta funcionalidad facilita la consulta de conceptos incluso cuando el usuario no conoce su nombre exacto o recuerda únicamente una palabra relacionada con su definición o utilidad.

---

## Mejoras visuales e interacciones

NetWize incorpora mejoras visuales orientadas a proporcionar una experiencia de usuario más dinámica y clara.

Se implementaron:

- Animaciones suaves en las tarjetas del Dashboard mediante transiciones y efectos hover.
- Microinteracciones en las opciones del Sidebar.
- Indicador visual de la sección actualmente seleccionada en el Sidebar.
- Transiciones en las barras de estadísticas.
- Estado visual para el historial cuando no existen simulaciones registradas.
- Diseño adaptable a diferentes tamaños de pantalla en los módulos principales.

Estas mejoras buscan facilitar la interacción con la interfaz y mantener una presentación visual coherente entre las diferentes vistas de la aplicación.

---

## Optimización y limpieza

Durante el desarrollo se realizaron revisiones generales del código y del funcionamiento de NetWize.

Entre las actividades realizadas se encuentran:

- Eliminación de registros `console.log` utilizados durante la depuración.
- Eliminación de propiedades que no estaban siendo utilizadas.
- Revisión de los componentes principales.
- Verificación de la navegación.
- Verificación del funcionamiento del Dashboard, Simulador y Enciclopedia.
- Revisión del historial y almacenamiento mediante `LocalStorage`.
- Revisión del comportamiento responsive.
- Validación de los datos almacenados en los archivos JSON.

En el archivo de la enciclopedia se verificó que los 82 conceptos no presentaran títulos duplicados ni campos obligatorios incompletos.

Estas actividades contribuyen a mantener una estructura de código más organizada y a reducir errores en el funcionamiento de la aplicación.

---

## Flujo de acceso

NetWize incorpora un conjunto de vistas relacionadas con el acceso y la navegación inicial de los usuarios.

Actualmente se encuentran disponibles:

- Bienvenida.
- Inicio de sesión.
- Registro.
- Términos y condiciones.
- Recuperación de contraseña.

La navegación entre estas vistas se controla mediante el estado `currentPage` de React.

### Bienvenida

La vista de bienvenida presenta el propósito de NetWize y sus principales funcionalidades.

Desde esta pantalla, el usuario puede comenzar el flujo de acceso a la aplicación.

### Inicio de sesión

La vista de inicio de sesión permite ingresar un correo electrónico y una contraseña previamente registrados.

También proporciona accesos para:

- Recuperar contraseña.
- Crear una cuenta.

La validación de credenciales se realiza mediante la información almacenada localmente en el navegador.

### Registro

La vista de registro permite ingresar:

- Nombre.
- Correo electrónico.
- Contraseña.
- Confirmación de contraseña.

También incorpora la aceptación de términos y condiciones.

Antes de crear una cuenta, se comprueba que los campos requeridos estén completos, que las contraseñas coincidan y que el usuario haya aceptado los términos.

El botón de creación de cuenta permanece deshabilitado mientras no se cumpla la aceptación de los términos.

El sistema también verifica que el correo electrónico no haya sido registrado previamente.

### Términos y condiciones

NetWize incorpora una vista independiente para consultar información relacionada con el uso educativo de la aplicación y sus condiciones generales.

La vista puede consultarse desde el proceso de registro.

### Recuperación de contraseña

NetWize incorpora una vista para solicitar la recuperación de una cuenta mediante correo electrónico.

Actualmente esta función corresponde a una interfaz visual. No envía instrucciones de recuperación ni modifica contraseñas, ya que el proyecto no cuenta con un servidor de autenticación ni con un servicio de recuperación por correo electrónico.

### Ayuda mediante WhatsApp

NetWize incorpora un botón de ayuda reutilizable mediante WhatsApp.

El componente `HelpButton` se integra desde `Layout.jsx`, permitiendo disponer del acceso a ayuda en las diferentes vistas sin duplicar el código.

El botón abre el canal de contacto configurado en WhatsApp.

---

## Acceso y autenticación local

### Inicio de sesión

NetWize permite iniciar sesión mediante el correo electrónico y la contraseña registrados previamente.

El sistema consulta las credenciales almacenadas localmente y, cuando son correctas, crea una sesión para el usuario y permite acceder al Dashboard.

Si los datos ingresados son incorrectos, se muestra un mensaje informando que las credenciales no son válidas.

### Registro de usuario

La aplicación permite crear una cuenta proporcionando nombre, correo electrónico, contraseña, confirmación de contraseña y aceptación de términos y condiciones.

Antes de crear la cuenta se validan los campos requeridos y la coincidencia entre las contraseñas.

El sistema también verifica que el correo electrónico no haya sido registrado anteriormente.

La información del usuario se almacena localmente mediante `LocalStorage`.

Para evitar almacenar la contraseña directamente, se genera un hash SHA-256 mediante la API nativa `crypto.subtle` del navegador.

### Sesión de usuario

Después de iniciar sesión correctamente, NetWize almacena una sesión local mediante `netwizeSession`.

La sesión permite mantener el acceso a las vistas internas después de recargar la aplicación.

Cuando no existe una sesión activa, la aplicación dirige al usuario al inicio de sesión e impide el acceso a las vistas internas mediante la navegación normal de la interfaz.

### Cerrar sesión

La opción **Cerrar sesión**, disponible desde el Sidebar, elimina la sesión almacenada localmente y devuelve al usuario a la vista de inicio de sesión.

Después de cerrar sesión, al recargar la aplicación se solicita nuevamente el acceso.

### Alcance de la autenticación

La autenticación implementada está orientada al funcionamiento académico y local de NetWize.

Los usuarios y las sesiones se almacenan en el navegador. La aplicación no cuenta con un backend de autenticación ni con una base de datos remota.

El hash SHA-256 implementado evita almacenar la contraseña directamente, pero no convierte este mecanismo en un sistema de autenticación seguro para producción.

Por lo tanto, la autenticación local se considera una funcionalidad demostrativa adecuada para el alcance actual del proyecto, no un sistema destinado a administrar cuentas reales en un entorno de producción.
