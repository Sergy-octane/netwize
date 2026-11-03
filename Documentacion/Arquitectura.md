# Arquitectura del Proyecto - NetWize

## Descripción general

NetWize es una aplicación web desarrollada como proyecto formativo para el entrenamiento en soporte técnico de primer nivel (N1).

La aplicación permite practicar la resolución de casos de soporte técnico mediante árboles de decisión, consultar conceptos relacionados con redes y conectividad, y revisar estadísticas e historial de simulaciones.

Su estructura está organizada mediante componentes reutilizables, páginas independientes y archivos JSON que contienen la información utilizada por los módulos principales.

## Tecnologías utilizadas

- **React:** biblioteca utilizada para construir la interfaz mediante componentes.
- **JavaScript:** lenguaje utilizado para desarrollar la lógica de la aplicación.
- **Vite:** herramienta utilizada para el entorno de desarrollo y la compilación.
- **Tailwind CSS:** framework utilizado para los estilos y el diseño responsive.
- **JSON:** formato utilizado para almacenar los casos del simulador y los conceptos de la enciclopedia.
- **LocalStorage:** mecanismo del navegador utilizado para conservar el historial, los datos del usuario y la sesión local.
- **Git y GitHub:** herramientas utilizadas para el control de versiones y alojamiento del código fuente.
- **Vercel:** plataforma utilizada para desplegar y publicar la aplicación web.

## Estructura general de la aplicación

NetWize está organizada en los siguientes módulos:

### 1. Módulo de acceso

Gestiona las vistas relacionadas con el ingreso y registro de usuarios.

Incluye:

- Bienvenida.
- Inicio de sesión.
- Registro de usuarios.
- Términos y condiciones.
- Recuperación de contraseña.

La autenticación se realiza localmente mediante LocalStorage y Web Crypto API. No utiliza un servidor de autenticación ni una base de datos remota.

### 2. Dashboard

Es la vista principal de la aplicación después del inicio de sesión.

Permite consultar un resumen de la actividad registrada, incluyendo:

- Cantidad de simulaciones realizadas.
- Historial de casos.
- Estadísticas por categorías.
- Representación visual de la actividad registrada.

La información se obtiene de los registros almacenados localmente en el navegador.

### 3. Simulador de soporte técnico

Permite practicar la resolución de casos de soporte técnico mediante preguntas y respuestas interactivas.

Utiliza árboles de decisión para orientar al usuario durante el diagnóstico y presentar las soluciones correspondientes según las respuestas seleccionadas.

Los casos se encuentran organizados en el archivo `src/data/casos.json`, lo que permite ampliar o modificar su contenido sin reconstruir la estructura principal del simulador.

### 4. Enciclopedia N1

Permite consultar conceptos técnicos relacionados con redes, conectividad y soporte de primer nivel.

Presenta información organizada mediante tarjetas que incluyen:

- ¿Qué es?
- ¿Para qué sirve?
- ¿Qué debo revisar como N1?

Los conceptos se encuentran almacenados en `src/data/encyclopedia.json` y pueden consultarse mediante un buscador que permite filtrar la información por diferentes campos.

## Componentes principales

La aplicación utiliza componentes reutilizables para organizar su estructura y facilitar el mantenimiento.

- **Layout:** organiza la estructura general de las vistas internas.
- **Navbar:** contiene elementos de navegación de la interfaz.
- **Sidebar:** permite desplazarse entre los módulos principales y acceder a las opciones de navegación.
- **HelpButton:** proporciona acceso al canal de ayuda mediante WhatsApp.

## Navegación

La navegación entre las diferentes vistas se gestiona mediante el estado de la aplicación en React.

El sistema permite acceder a las vistas de bienvenida, inicio de sesión, registro, términos y condiciones y recuperación de contraseña, además de los módulos internos.

El acceso a los módulos internos está condicionado por la existencia de una sesión local activa.

La barra lateral permite navegar entre Dashboard, Simulador y Enciclopedia. En dispositivos móviles cuenta con un menú adaptable que puede abrirse y cerrarse mediante controles de navegación.

## Almacenamiento de información

NetWize utiliza LocalStorage para conservar información durante el funcionamiento de la aplicación.

Se utiliza principalmente para:

- Registrar el historial de simulaciones.
- Almacenar la información del usuario registrado.
- Mantener la sesión local del usuario.

Los datos de los casos y conceptos técnicos se mantienen separados de la lógica de los componentes mediante archivos JSON.

La aplicación no utiliza una base de datos remota ni un backend para gestionar esta información.

## Control de versiones y despliegue

El código fuente del proyecto se administra mediante Git y se encuentra alojado en GitHub.

La aplicación está desplegada en Vercel, lo que permite acceder a NetWize mediante una dirección web pública.

**Repositorio:** https://github.com/Sergy-octane/netwize

**Aplicación:** https://netwize.vercel.app/
