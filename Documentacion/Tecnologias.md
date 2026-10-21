# Tecnologías utilizadas

## React

Biblioteca utilizada para construir la interfaz de usuario de NetWize.

Se utiliza para crear componentes reutilizables, controlar el estado de la aplicación y gestionar la interacción entre las diferentes vistas.

Entre sus usos se encuentran:

- Control de estados mediante Hooks.
- Navegación entre las vistas.
- Actualización dinámica de la interfaz.
- Manejo de preguntas y respuestas en el simulador.
- Filtrado de conceptos en la enciclopedia.

## Vite

Herramienta utilizada para crear y ejecutar el proyecto durante el desarrollo.

Permite iniciar rápidamente el entorno de desarrollo, actualizar la aplicación durante la programación y generar la versión de producción mediante el proceso de compilación.

## JavaScript

Lenguaje principal utilizado para desarrollar la lógica de la aplicación.

Se utiliza para manejar:

- Estados y eventos.
- Navegación entre vistas.
- Procesamiento y filtrado de datos.
- Lógica de los árboles de decisión.
- Validación de formularios.
- Gestión del historial.
- Registro e inicio de sesión mediante almacenamiento local.
- Normalización del texto para las búsquedas.

## Tailwind CSS

Framework utilizado para diseñar la interfaz visual de la aplicación.

Permite aplicar estilos mediante clases directamente en los componentes, facilitando la creación de una interfaz coherente, adaptable y responsive.

Se utiliza para definir colores, distribución de elementos, espaciados, tamaños, efectos visuales y adaptación a diferentes tamaños de pantalla.

## JSON

Formato utilizado para organizar y almacenar los datos de los casos de soporte técnico y los conceptos de la enciclopedia.

NetWize utiliza principalmente los siguientes archivos:

### `src/data/casos.json`

Contiene los 19 casos de soporte técnico disponibles en el simulador.

Cada caso puede incluir información como:

- ID.
- Título.
- Categoría.
- Nivel.
- Descripción.
- Nodos de decisión.
- Opciones de respuesta.
- Diagnósticos.
- Soluciones.

La separación de estos datos permite ampliar o modificar los casos sin reconstruir la estructura principal del simulador.

### `src/data/encyclopedia.json`

Contiene los 82 conceptos técnicos disponibles en la Enciclopedia N1.

Cada concepto incluye:

- Título.
- Categoría.
- Definición.
- Utilidad.
- Recomendaciones de revisión para soporte N1.

La información se carga dinámicamente en el componente de la enciclopedia y se utiliza para mostrar las tarjetas y realizar búsquedas.

## LocalStorage

Tecnología del navegador utilizada para conservar información localmente.

NetWize la utiliza para almacenar:

- Historial de simulaciones.
- Información de los usuarios registrados.
- Sesión local del usuario autenticado.

La información estructurada se almacena en formato JSON cuando corresponde.

Este mecanismo permite conservar los datos en el navegador después de recargar la aplicación. Sin embargo, la información no se sincroniza con un servidor ni con una base de datos remota.

## Web Crypto API

API nativa del navegador utilizada para generar un hash SHA-256 de la contraseña durante el registro y la validación de credenciales.

Se accede mediante `crypto.subtle`, sin instalar una biblioteca adicional.

Esta implementación forma parte de la autenticación local con fines académicos. No sustituye un sistema de autenticación seguro para producción.

## HTML y CSS

Tecnologías web utilizadas para estructurar y presentar la interfaz de la aplicación.

HTML proporciona la estructura de los elementos visuales y CSS define su presentación. Tailwind CSS facilita la aplicación de estilos mediante clases.

## Git

Sistema de control de versiones utilizado para registrar los cambios realizados durante el desarrollo.

Permite mantener un historial de modificaciones y administrar las versiones del código fuente.

## GitHub

Plataforma utilizada para alojar el repositorio remoto del proyecto y mantener una copia del código fuente.

Repositorio:

https://github.com/Sergy-octane/netwize

## Herramientas de desarrollo

### Visual Studio Code

Editor de código utilizado para modificar los archivos del proyecto, desarrollar los componentes y ejecutar comandos durante el proceso de desarrollo.

### npm

Herramienta utilizada para administrar los paquetes definidos en el proyecto y ejecutar los scripts disponibles, como el entorno de desarrollo y la compilación de producción.

### Navegador web

Se utiliza para ejecutar la aplicación, comprobar la interfaz y realizar pruebas funcionales de navegación, autenticación local, simulación y consulta de la enciclopedia.

## Estructura principal

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── HelpButton.jsx
│
├── data/
│   ├── casos.json
│   └── encyclopedia.json
│
└── pages/
    ├── Welcome.jsx
    ├── Login.jsx
    ├── Register.jsx
    ├── Terms.jsx
    ├── ForgotPassword.jsx
    ├── Dashboard.jsx
    ├── Simulator.jsx
    └── Encyclopedia.jsx
```

La estructura anterior presenta los principales componentes, archivos de datos y vistas de la aplicación. Pueden existir archivos adicionales en el proyecto que no se muestran en este esquema.
