# API REST - Veterinaria Pichichos 🐾

API REST desarrollada con **Node.js**, **Express** y **MongoDB** para gestionar clientes, mascotas y sus vacunas. Esta API está desplegada en **Vercel** y utiliza **JWT** para la autenticación.

---

## **Tabla de Contenidos**

1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Instalación](#instalación)
4. [Variables de Entorno](#variables-de-entorno)
5. [Endpoints Disponibles](#endpoints-disponibles)
    - [Autenticación](#autenticación)
    - [Clientes](#clientes)
    - [Mascotas](#mascotas)
6. [Pruebas en Thunder Client o Postman](#pruebas-en-thunder-client-o-postman)
7. [Despliegue en Vercel](#despliegue-en-vercel)

---

## **Características**

- CRUD para **Clientes** y **Mascotas**.
- Relación entre clientes y sus mascotas.
- Gestión de vacunas para las mascotas.
- Autenticación y autorización con **JWT**.
- Validaciones de datos en las solicitudes.
- Base de datos en **MongoDB Atlas**.

---

## **Tecnologías Utilizadas**

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **Thunder Client/Postman** para pruebas.

---

## 🚀 **Instalación**

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/tu-repo.git
    cd tu-repo
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

3. **Configura las variables de entorno** (ver sección [Variables de Entorno](#variables-de-entorno)).

4. **Inicia el servidor**:
    ```bash
    npm run dev
    ```

---

## **Variables de Entorno**

Debes crear un archivo `.env` con las siguientes variables:

```env
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base-de-datos>?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=tu-clave-secreta

```

## 📚 **Endpoints**

### **Autenticación**

#### **1. Registro de Usuario**
- **Método**: `POST`
- **URL**: `/auth/register`
- **Descripción**: Registra un nuevo usuario.
- **Body**:
  ```json
  {
    "nombre": "Juan Pérez",
    "email": "juan.perez@gmail.com",
    "password": "123456"
  }

    ```

- **Respuesta**:
  ```json
    {

    "message": "Usuario registrado exitosamente."

    }```


#### **2. Inicio de Sesión**
- **Método**: `POST`
- **URL**: `/auth/login`
- **Descripción**: Permite a un usuario iniciar sesión.
- **Body**:
  ```json
  {
  "email": "juan.perez@gmail.com",
  "password": "123456"
  }

    ```

- **Respuesta**:
  ```json
    {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    } 
    ```
### **🧍‍♀️🧍‍♂️Clientes**
#### **1. Crear Cliente**
- **Método**: `POST`
- **URL**: `/auth/login`
- **Descripción**: Permite a un usuario iniciar sesión.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Body**:
  ```json
  {
    "nombre": "Andrea Cortés",
    "email": "andrea@gmail.com",
    "telefono": "123456789"
  }
  ```
- **Respuesta Exitosa:**:
  ```json
  {
  "message": "Cliente creado exitosamente.",
  "cliente": {
              "_id": "6450d76e2eac1234a56789ab",
              "nombre": "Andrea Cortés",
              "email": "andrea@gmail.com",
              "telefono": "123456789"
            }
  }
  ```
#### **2. Listar Todos los Clientes**
- **Método**: `GET`
- **URL**: `/clientes`
- **Descripción**: Obtiene una lista de todos los clientes.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Respuesta Exitosa:**:
  ```json
  [
    {
      "_id": "6450d76e2eac1234a56789ab",
      "nombre": "Andrea Cortés",
      "email": "andrea@gmail.com",
      "telefono": "123456789"
    }
  ]
  ```
#### **3. Editar Cliente**
- **Método**: `PUT`
- **URL**: `/clientes/:id`
- **Descripción**: Actualiza la información de un cliente.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Body**:
  ```json
  {
  "nombre": "Andrea Actualizada"
  }
  ```
- **Respuesta Exitosa:**:
  ```json
  {
  "message": "Cliente actualizado exitosamente."
  }
  ```

