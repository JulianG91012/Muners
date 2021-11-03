# Muners

## ¿Que es?
Muners es una pagina web enfocada en la comunicacion y promocion de los diferentes modelos de naciones unidas que se encuentran en la ciudad, que busca conectar de forma sencilla todos los esfuerzos empleados para la educacion de las personas en el ambito politico, y generar mayor interes en el desarrollo de las relaciones internacionales

## Modo de implementacion
1. Se debe clonar el repositorio de git usando el comando: *git clone https://github.com/LeonStyven/Muners.git*
2. Abrir la carpeta del repositorio
3. Abrir una consola con permisos de administrador en esa carpeta
  * Se puede hacer dando clic derecho y en la opcion de abrir esta carpeta en terminal
  * Tambien abriendo la consola normalmente y navegar hasta la ruta de la carpeta
4. Usar el comando *docker build .*
5. Una vez finalizado el proceso de construccion de la imagen, se usa el comando *docker ps -a* y se busca la ultima imagen que se creo
6. Usamos el comando *docker -D -P 80:80 [ID del contenedor] apachectl -D FOREGROUND*
7. Y ya con esto estaría listo, simplemente debemos abrir el navegador y navegar a la ip de nuestra computadora o directamente al localhost
(Si se esta en un SO unix, se debe usar *sudo* antes de cada comando)
