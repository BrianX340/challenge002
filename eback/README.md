# eback



## Holaa!

Para correr el proyecto es necesario contar con mongodb instalado en local o modificar la URI en el .env

Es necesario hacer una peticion POST a /dev/makeDb


```bash
npm i
npm start
```

En este proyecto utilizamos:
* bcryptjs (Para encriptar el password)
* cors (Para aceptar peticiones seguras)
* dotenv (Para usar variables de entorno)
* express (Framework para app web o desarrollo de API)
* express-validator (Para validar algunas peticiones que requieren ciertos tipos de datos)
* jsonwebtoken (Para administrar el acceso)
* mongoose (Para la gestion de la base de datos)
* multer (Para guardar archivos, aqui lo usamos para las imagenes de los productos)

Este backend esta organizado MVC (Modelo, Vista, Controlador), las peticiones entran en 'src/index.js' de ahi segun la ruta consultada la informacion pasa por 'src/routes/RUTA' y por ultimo va al controlador en 'src/controllers/CONTROLADOR'

Los endpoints disponibles son:
- [/dev/makeDb]('')    --> Este endpoint es es encargado de generar la configuracion inicial, la cuenta de administrador y los roles de usuario.
- [/register]('')      --> Este endpoint es el encargado del registro, debe recibir en el body las propiedades {name, email, password}
- [/login]('') --> Este endpoint es el encargado del logeo, debe recibir en el body las propiedades {email, password}
- [/api/products/get]('') --> Este endpoint entrega todos los productos en la base de datos
- [/api/products/get/:id]('') --> Este endpoint entrega el producto que se solicita en con el ID
- [/admin/products/create]('') --> Este endpoint crea un articulo debe recibir {name,barcode,price,file}
- [/admin/products/delete/:id]('') --> Este endpoint elimina el producto con el id recibido
- [/admin/products/modify/:id]('') --> Este endpoint modifica el producto con el id recibido, debe enviarse {name,barcode,price,file}, en caso de no recibir un nuevo 'file' continuara con la imagen anterior de producto