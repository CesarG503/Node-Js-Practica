## Módulos Vistos

- File System (fs)
- Path
- Os
- Global
- module export 
- Http
- npm
- promise 
- fs/promise
- event
- stream

## Uso General de Node.js

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Permite ejecutar JavaScript en el lado del servidor para construir aplicaciones escalables y de alto rendimiento.

### Instalación

Para instalar Node.js, descarga el instalador desde [nodejs.org](https://nodejs.org) y sigue las instrucciones para tu sistema operativo.

### Ejecución de un Script

Para ejecutar un script de Node.js, usa el comando `node` seguido del nombre del archivo:

```bash
node nombre-del-archivo.js
```

## comando npm 
### Comandos npm más usados

- `npm init`: Inicializa un nuevo proyecto de Node.js y crea un archivo `package.json`.
- `npm init -y`: configuracion predeterminada 
- `npm install <paquete>`: Instala un paquete y lo añade a las dependencias del proyecto.
- `npm install`: Instala todas las dependencias listadas en el archivo `package.json`.
- `npm update`: Actualiza los paquetes instalados a sus versiones más recientes.
- `npm uninstall <paquete>`: Desinstala un paquete y lo elimina de las dependencias del proyecto.
- `npm list`: Lista todos los paquetes instalados en el proyecto.
- `npm run <script>`: Ejecuta un script definido en el archivo `package.json`.
- `npm start`: Ejecuta el script de inicio definido en el archivo `package.json`.
- `npm test`: Ejecuta los tests definidos en el archivo `package.json`.
- `npx <comando>`: Ejecuta un comando de un paquete sin necesidad de instalarlo globalmente.

## Ejemplo de uso de npx con serve

```bash
npx serve
```

Esto iniciará un servidor en el puerto 5000 por defecto y servirá los archivos estáticos en el directorio actual. Si deseas especificar un directorio diferente o un puerto diferente, puedes hacerlo con las opciones `-s` y `-l` respectivamente:

```bash
npx serve -s build -l 3000
```

En este ejemplo, `serve` servirá los archivos en el directorio `build` en el puerto 3000.


## usar import y Export en javaScript 

editamos el package.json : "type": "module", <- Agregamos esta propiedad
