# Requerimientos del Sistema - NetWize

## Requerimientos Funcionales

### RF-01

El sistema debe permitir acceder al Dashboard principal y consultar un resumen de la actividad registrada en la aplicación.

### RF-02

El sistema debe permitir acceder al módulo Simulador de soporte técnico.

### RF-03

El sistema debe mostrar preguntas y respuestas interactivas para la resolución de casos de soporte técnico.

### RF-04

El sistema debe mostrar un diagnóstico o solución al finalizar una simulación, de acuerdo con las respuestas seleccionadas.

### RF-05

El sistema debe permitir acceder a la Enciclopedia N1 para consultar conceptos relacionados con redes y soporte técnico.

### RF-06

El sistema debe permitir consultar información sobre IP, DNS, DHCP, Ping, Tracert y otros conceptos relacionados con redes y conectividad.

### RF-07

El sistema debe mostrar una vista de inicio de sesión como punto de acceso inicial a la aplicación cuando no exista una sesión activa.

### RF-08

El sistema debe permitir registrar un usuario mediante nombre, correo electrónico, contraseña y confirmación de contraseña.

### RF-09

El sistema debe permitir consultar los términos y condiciones desde el proceso de registro.

### RF-10

El sistema debe requerir la aceptación de los términos y condiciones antes de permitir la creación de una cuenta.

### RF-11

El sistema debe validar las credenciales ingresadas durante el inicio de sesión y permitir el acceso a los módulos internos únicamente cuando sean correctas.

### RF-12

El sistema debe mantener una sesión local del usuario y permitir cerrarla mediante la opción de cierre de sesión.

### RF-13

El sistema debe impedir el acceso a las vistas internas mediante la navegación normal de la interfaz cuando no exista una sesión activa.

### RF-14

El sistema debe permitir acceder a una vista para la recuperación de contraseña mediante correo electrónico como parte de la estructura de acceso. Esta vista no implica el envío real de instrucciones de recuperación.

### RF-15

El sistema debe proporcionar un acceso general a un canal de ayuda mediante WhatsApp.

### RF-16

El sistema debe permitir registrar localmente el historial de las simulaciones realizadas y consultar los registros disponibles desde el Dashboard.

### RF-17

El sistema debe permitir ampliar y modificar los casos de soporte técnico mediante el archivo de datos `src/data/casos.json`, sin tener que reconstruir la estructura principal del simulador.

### RF-18

El sistema debe permitir almacenar y consultar conceptos técnicos desde el archivo `src/data/encyclopedia.json`.

### RF-19

El sistema debe permitir buscar conceptos de la enciclopedia por título, categoría, definición, utilidad y recomendaciones de revisión para soporte N1.

### RF-20

El sistema debe permitir realizar búsquedas en la enciclopedia sin distinguir entre letras con tilde y letras sin tilde.

### RF-21

El sistema debe presentar información estadística e historial de actividad en el Dashboard a partir de los datos disponibles localmente.

### RF-22

El sistema debe permitir navegar entre las vistas de bienvenida, inicio de sesión, registro, términos y condiciones, recuperación de contraseña y los módulos internos de la aplicación, según corresponda al estado de acceso del usuario.

## Requerimientos No Funcionales

### RNF-01

La aplicación debe ser responsive para dispositivos móviles y computadores.

### RNF-02

La interfaz debe ser intuitiva y fácil de usar, facilitando la consulta de información y la navegación entre los módulos.

### RNF-03

La aplicación debe ejecutarse en navegadores modernos compatibles con las tecnologías utilizadas.

### RNF-04

El sistema debe mantener tiempos de carga inferiores a 3 segundos en condiciones normales de funcionamiento.

### RNF-05

El código fuente debe mantenerse bajo control de versiones mediante Git y GitHub.

### RNF-06

La información de los casos de soporte técnico y los conceptos de la enciclopedia debe mantenerse organizada en archivos JSON independientes de la lógica principal de los componentes.

### RNF-07

La aplicación debe utilizar almacenamiento local del navegador para conservar la información de usuario, sesión e historial que requiera persistencia durante su funcionamiento.

### RNF-08

La estructura del código debe facilitar el mantenimiento y la ampliación de los casos de soporte técnico y los conceptos de la enciclopedia sin requerir modificaciones innecesarias en los componentes principales.

### RNF-09

La aplicación debe mantener una presentación visual coherente entre sus diferentes vistas y ofrecer una experiencia de navegación clara.
