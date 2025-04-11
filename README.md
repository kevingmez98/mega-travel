# Prueba Técnica – Gestión de Clientes

Este proyecto consiste en una aplicación web que permite registrar y visualizar clientes utilizando un backend en Node.js y un frontend en React. Incluye paginación, validación de datos, manejo de errores y una interfaz responsive.

---

## Tecnologías y librerías principales
### Backend (Node.js + Express)
 - Express – Framework para el servidor.

 - Sequelize – ORM para interactuar con bases de datos relacionales como MariaDB.

 - MySQL2 – Cliente para conectarse a la base de datos.

 - Dotenv – Para variables de entorno.

 - Cors – Para permitir comunicación entre frontend y backend.

 - Nodemon – Recarga automática en desarrollo.

### Frontend (React + Vite)
 - React – Librería principal para la interfaz.

 - Vite – Empaquetador rápido y moderno.

 - Axios – Cliente HTTP para consumir el backend.

 - SweetAlert2 – Alertas visuales interactivas.

 - React Router DOM – Manejo de rutas dentro de la SPA.

 - Bootstrap – Librería de estilos para un diseño rápido y responsive.

## Estructura del proyecto

El proyecto está organizado como un **monorepo** con la siguiente estructura:

/frontend  → Código del frontend en React  
/backend   → Código del backend en Node.js


## Configuración inicial

### Archivos `.env`

Tanto el backend como el frontend requieren archivos `.env` para manejar configuraciones sensibles. Para configurarlos:

1. Copie los archivos de ejemplo:
   - `backend/.env.example`
   - `frontend/.env.example`
2. Renómbrelos como:
   - `backend/.env`
   - `frontend/.env`
3. Modifique los valores según la configuración de su entorno local (nombre de base de datos, usuario, puerto, etc.).



## Creación de la base de datos

### Requisitos
Debe tener instalado **MySQL o MariaDB**. En este caso, fue probado con: **MariaDB versión 10.4.32**


### Pasos

1. Cree una nueva base de datos con el nombre especificado en el archivo `.env` del backend:
```sql
CREATE DATABASE nombre_de_la_base_de_datos;
```

2. (Opcional pero recomendado) Cree un usuario con permisos limitados:
```sql
CREATE USER 'usuario_backend'@'localhost' IDENTIFIED BY 'contraseña_segura';
GRANT SELECT, INSERT, UPDATE, DELETE ON nombre_de_la_base_de_datos.* TO 'usuario_backend'@'localhost';
FLUSH PRIVILEGES;
```

3. Importe la estructura de la base de datos. Puede hacerlo de dos formas:

### Opción 1 – Desde archivo:
Ubique el archivo mega-travel.sql en backend/src/conf y ejecute el siguiente comando:

```sql
mysql -u usuario_instalacion -p nombre_de_la_base_de_datos < backend/src/conf/mega-travel.sql
```

### Opción 2 – Manualmente:
También puede copiar y ejecutar la siguiente instrucción directamente desde un cliente como phpMyAdmin o en la consola del gestor de base de datos mientras usa la base de datos creada:

```sql
CREATE TABLE IF NOT EXISTS `clients` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único del cliente',
  `full_name` varchar(100) NOT NULL COMMENT 'Nombre completo del cliente',
  `address` varchar(200) NOT NULL COMMENT 'Dirección de residencia del cliente',
  `email` varchar(100) NOT NULL COMMENT 'Correo electrónico del cliente',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'Fecha creación del registro',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Fecha de última actualización',
  PRIMARY KEY (`id_client`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Contiene a los clientes de la aplicación';
```


## Instalación de dependencias

Instale las dependencias necesarias para el backend y el frontend.
```sh
# Instalar backend
cd backend
npm install

# Instalar frontend
cd ../frontend
npm install
```

## Ejecución en entorno local
Una vez instaladas las dependencias, se puede ejecutar el backend y el
frontend en modo desarrollo.

### Ejecución del backend
Para iniciar el backend, utilice los siguientes comandos:
```sh
cd backend
npm run dev
```
El servidor se ejecutará en el puerto especificado en .env (por defecto: http://localhost:3000)

### Ejecución del frontend
Para iniciar el frontend en modo desarrollo, ejecute:
```sh
cd frontend
npm run dev
```
Se abrirá en el navegador por defecto en http://localhost:5173 (o el puerto que indique Vite)

## Verificación del funcionamiento
Para verificar que el proyecto se está ejecutando correctamente, tenga en cuenta lo siguiente:

### Backend
Verifique que el servidor backend esté corriendo sin errores y escuchando en el puerto definido en la variable PORT del archivo .env.

### Frontend 
Abra en su navegador la dirección http://localhost:5173/ (o el puerto que indique la terminal) y compruebe que la aplicación carga correctamente.

## Prueba de funcionamiento

Abra el navegador y diríjase a http://localhost:5173 (o el puerto indicado en el .env del frontend).

Pruebe registrar un cliente.

Valide que aparece en la tabla.

Pruebe paginación, validación de correos y mensajes de error.

El sistema también incluye una página 404 personalizada para rutas no válidas.

##  Notas finales

La tabla de clientes incluye validaciones tanto en frontend como en backend.

La API aplica una validación adicional a correos electrónicos y asegura que no se repitan (campo único).

El paginador está basado en la base de datos, por lo que solo se cargan los datos necesarios en cada solicitud.

Se usan mensajes modales (SweetAlert2) para informar del estado de las operaciones y un skeleton de carga para mejorar la UX.

