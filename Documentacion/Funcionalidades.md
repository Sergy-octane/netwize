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
