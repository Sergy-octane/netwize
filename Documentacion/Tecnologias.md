# Tecnologías utilizadas

## React

Biblioteca utilizada para construir la interfaz de usuario de NetWize.

Se utiliza para crear componentes y controlar el estado de la aplicación.

---

## Vite

Herramienta utilizada para crear y ejecutar el proyecto durante el desarrollo.

Permite iniciar rápidamente el entorno de desarrollo y realizar actualizaciones durante la programación.

---

## JavaScript

Lenguaje principal utilizado para desarrollar la lógica de la aplicación.

Se utiliza para manejar:

- Estados.
- Eventos.
- Navegación.
- Procesamiento de datos.
- Lógica de los árboles de decisión.

---

## Tailwind CSS

Framework utilizado para diseñar la interfaz visual de la aplicación.

Permite aplicar estilos directamente mediante clases dentro de los componentes.

---

## JSON

Se utiliza para almacenar la información de los casos de soporte técnico.

Cada caso contiene información como:

- ID.
- Título.
- Categoría.
- Nivel.
- Descripción.
- Nodos.
- Opciones.
- Diagnósticos.
- Soluciones.

---

## LocalStorage

Tecnología del navegador utilizada para almacenar localmente el historial de simulaciones.

NetWize almacena el historial utilizando JSON.

---

## Git

Sistema de control de versiones utilizado para registrar los cambios realizados durante el desarrollo.

---

## GitHub

Plataforma utilizada para almacenar el repositorio remoto del proyecto y mantener un respaldo del código fuente.

Repositorio:

Sergy-octane/netwize

---

## Estructura principal

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── data/
│   └── casos.json
│
└── pages/
    ├── Dashboard.jsx
    └── Simulator.jsx
