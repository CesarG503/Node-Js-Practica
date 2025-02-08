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

## Desplegar Proyectos con Node.js

Para desplegar proyectos de Node.js en servidores, puedes utilizar servicios como [Heroku](https://www.heroku.com/). Heroku es una plataforma como servicio (PaaS) que permite a los desarrolladores construir, ejecutar y operar aplicaciones completamente en la nube.

## JSON Placeholder

[JSON Placeholder](https://jsonplaceholder.typicode.com/) es una API en línea gratuita que puedes utilizar para probar y prototipar tus aplicaciones. Proporciona datos ficticios para diferentes recursos como posts, comentarios, usuarios, etc.

### Pasos para Desplegar en Heroku

1. **Instalar Heroku CLI**: Descarga e instala la herramienta de línea de comandos de Heroku desde [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli).

2. **Iniciar Sesión en Heroku**: Usa el comando `heroku login` para iniciar sesión en tu cuenta de Heroku desde la terminal.

    ```bash
    heroku login
    ```

3. **Crear una Aplicación en Heroku**: Navega al directorio de tu proyecto y crea una nueva aplicación en Heroku.

    ```bash
    heroku create nombre-de-tu-aplicacion
    ```

4. **Desplegar la Aplicación**: Usa Git para desplegar tu aplicación en Heroku.

    ```bash
    git add .
    git commit -m "Despliegue inicial"
    git push heroku main
    ```

5. **Ver la Aplicación en Vivo**: Una vez desplegada, puedes ver tu aplicación en vivo con el siguiente comando:

    ```bash
    heroku open
    ```

Estos pasos te ayudarán a desplegar tu proyecto de Node.js en Heroku y hacerlo accesible desde cualquier lugar.