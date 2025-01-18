# API REST - Veterinaria Pichichos 🐾

API REST desarrollada con **Node.js**, **Express** y **MongoDB** para gestionar clientes, mascotas y sus vacunas. Esta API está desplegada en **Vercel** y utiliza **JWT** para la autenticación.

---

## **Tabla de Contenidos**

1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Seguridad](#seguridad)
4. [Instalación](#instalación)
5. [Variables de Entorno](#variables-de-entorno)
6. [Endpoints Disponibles](#endpoints-disponibles)
    - [Autenticación](#autenticación)
    - [Clientes](#clientes)
    - [Mascotas](#mascotas)
7. [Despliegue en Vercel](#despliegue-en-vercel)

---

## 🚀 Características <a id="características"></a>

- CRUD para **Clientes** y **Mascotas**.
- Relación entre clientes y sus mascotas.
- Gestión de vacunas para las mascotas.
- Autenticación y autorización con **JWT**.
- Validaciones de datos en las solicitudes.
- Base de datos en **MongoDB Atlas**.

---

## 🛠️ Tecnologías Utilizadas <a id="tecnologías-utilizadas"></a>

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **Thunder Client/Postman** para pruebas.

---

## 🔒 Seguridad <a id="seguridad"></a>
- **Autenticación:** Basada en **JWT**. El token debe enviarse en los **headers** como:
  ```http
  Authorization: Bearer <token>
  ```
---

## 🚀 Instalación <a id="instalación"></a>

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tenok94/Integrador-BackEnd-Pichichos.git
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

## 🔐 Variables de Entorno <a id="variables-de-entorno"></a>

Debes crear un archivo `.env` con las siguientes variables:

```env
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base-de-datos>?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=tu-clave-secreta

```

## 🔗 Endpoints Disponibles <a id="endpoints-disponibles"></a>

## 🔑 Autenticación <a id="autenticación"></a>

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

    }
  ```

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
## 🧑‍🤝‍🧑 Clientes <a id="clientes"></a>
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
#### **4. Eliminar Cliente**
- **Método**: `DELETE`
- **URL**: `/clientes/:id`
- **Descripción**: Elimina un cliente.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Respuesta Exitosa:**:
  ```json
  {
  "message": "Cliente eliminado exitosamente."
  }
  ```
## 🐾 Mascotas <a id="mascotas"></a>
#### **1. Crear Mascota**
- **Método**: `POST`
- **URL**: `/mascotas`
- **Descripción**: Registra una nueva mascota asociada a un cliente.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Body**:
  ```json
  {
  "nombre": "Uma",
  "especie": "Perro",
  "edad": 5,
  "clienteId": "<id-del-cliente>"
  } 

  ```
- **Respuesta Exitosa:**:
  ```json
  {
  "message": "Mascota creada exitosamente.",
  "mascota": {
              "_id": "6450d76e2eac1234a56789cd",
              "nombre": "Uma",
              "especie": "Perro",
              "edad": 5,
              "clienteId": "6450d76e2eac1234a56789ab"
             }
  }
  ```
#### **2. Listar Todas las Mascotas**
- **Método**: `GET`
- **URL**: `/mascotas`
- **Descripción**: Obtiene una lista de todas las mascotas.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Respuesta Exitosa:**:
  ```json
  [
    {
      "_id": "6450d76e2eac1234a56789cd",
      "nombre": "Uma",
      "especie": "Perro",
      "edad": 5
    }
  ]
  ```
#### **3. Listar Mascotas por Cliente**
- **Método**: `GET`
- **URL**: `/mascotas/cliente/:clienteId`
- **Descripción**: Obtiene las mascotas asociadas a un cliente.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Respuesta Exitosa:**:
  ```json
  [
    {
      "_id": "6450d76e2eac1234a56789cd",
      "nombre": "Uma",
      "especie": "Perro",
      "edad": 5,
      "clienteId": "6450d76e2eac1234a56789ab"
    }
  ]
  ```
#### **4. Añadir Vacuna a una Mascota**
- **Método**: `POST`
- **URL**: `/mascotas/:id/vacunas`
- **Descripción**: Registra una nueva vacuna para una mascota específica.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Body**:
  ```json
  {
  "nombre": "Vacuna contra la rabia",
  "fecha": "2025-01-14"
  }
  ```
- **Respuesta Exitosa:**:
  ```json
  {
  "message": "Vacuna añadida exitosamente.",
  "vacuna": {
              "nombre": "Vacuna contra la rabia",
              "fecha": "2025-01-14"
            }
  }
  ```
#### **5. Eliminar Mascota**
- **Método**: `DELETE`
- **URL**: `/mascotas/:id`
- **Descripción**: Elimina una mascota.
- **Headers**:
  ```json
    Authorization: Bearer <token>
  ```
- **Respuesta Exitosa:**:
  ```json
  {
  "message": "Mascota eliminada exitosamente."
  }
  ```
## 🌐 Despliegue en Vercel <a id="despliegue-en-vercel"></a>

La API está desplegada en **Vercel** y puede ser accedida a través del siguiente enlace:

[🌍 Ir a la API en Producción](https://integrador-back-end-pichichos-bbqi36z3n.vercel.app/)

Este despliegue utiliza **MongoDB Atlas** como base de datos en la nube, garantizando escalabilidad y rendimiento.

---

## 🚧 **¡Estamos Trabajando en la Próxima Etapa!**

![Obreros trabajando - Próximamente](https://cdn.pixabay.com/animation/2024/05/16/21/44/21-44-44-5_512.gif)

La base del proyecto ya está lista y actualmente estamos desarrollando una interfaz visual para que puedas interactuar de manera más fácil y cómoda con la plataforma. ¡Muy pronto estará disponible! 🎉

Gracias por tu paciencia y apoyo mientras seguimos construyendo esta experiencia para ti. 💪

