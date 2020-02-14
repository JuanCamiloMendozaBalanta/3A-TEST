/*
1-C

2 - Ruby es un lenguaje de programación interpretado, 
   y dinamicamente tipado, java es lenguaje de programación 
   compilado y esteticamente tipado.
  
3 - Los microservicios son un tipo de arquitectura que sirve para diseñar 
    aplicaciones cuyos elementos funcionan de forma independiente, 
    pero coordinada. (RED HAT)

4 - Porque permite diseñar e implementar funciones llamadas microservicios de forma independiente. 
    Esto permite que funcionen separados y también fallen por separado sin afectar a los demás.

5 - Porque aumenta la mano de obra para la gestions de la aplicación.
    Cuantos más microservicios existan en una solución, más difícil 
    será gestionarlos e integrarlos y requerira más mano de obra

6 - SOA(Service Oriented Architecture) La Arquitectura Orientada a Servicios 
    En un conjunto de microservicios, cada servicio presenta una única funcionalidad. 
    SOA incluye más funcionalidades y es capaz de desarrollar sistemas completos.
    Muchos ven a los microservicios como versiones pequeñas de SOA

7 - Porque require establecer contratos por cada microservicio que se comunique entre si, 
    Entre más microservicios más contratos y más dificil se hace la gestión de los mismos. Además 
    las pruebas de integración son más extensan y complicadas.

8 - microservices.png

9 - Docker es una tecnología de creación de contenedores que permite la gestión de los mismos como 
    máquinas virtuales extremadamente livianas y modulares. Además, obtiene flexibilidad con estos 
    contenedores: puede crearlos, implementarlos, copiarlos y moverlos de un entorno a otro, 
    lo cual le permite optimizar sus aplicaciones para la nube (RED HAT).

    Docker usa el kernel de Linux y las funciones de este, como Cgroups y namespaces, para segregar 
    los procesos, de modo que puedan ejecutarse de manera independiente. 
    El propósito de los contenedores es esta independencia: la capacidad de ejecutar 
    varios procesos y aplicaciones por separado para hacer un mejor uso de su infraestructura y, 
    al mismo tiempo, conservar la seguridad que tendría con sistemas separados. (RED HAT).

10 - Es una plataforma que automatiza las operaciones de los contenedores de Linux. 
     Elimina muchos de los procesos manuales involucrados en la implementación y 
     escalabilidad de las aplicaciones en contenedores. Puede crear un clúster de grupos de hosts que ejecutan contenedores de Linux, 
     y Kubernetes lo ayuda a administrar con facilidad y eficacia esos clústeres.

     A grandes rasgos, le permite implementar una infraestructura basada en contenedores en 
     los entornos de producción, y depender completamente de ella. Y dado que Kubernetes abarca 
     todo lo referido a la automatización de tareas operativas, puede hacer muchas de las cosas que 
     también otras plataformas de aplicaciones o sistemas de gestión le permiten hacer, 
     pero para sus contenedores.

     EMJ: 
     - Orquestar contenedores en múltiples hosts.
     - Hacer un mejor uso del hardware para maximizar los recursos necesarios para ejecutar 
     sus aplicaciones empresariales.
     - Controlar y automatizar las implementaciones y actualizaciones de las aplicaciones.
     - Montar y añadir almacenamiento para ejecutar aplicaciones con estado.
     - Escalar las aplicaciones en contenedores y sus recursos sobre la marcha.
     - Comprobaciones de estado y autorregeneración de sus aplicaciones con ubicación, 
       reinicio, replicación y escalamiento automáticos
     

*/
