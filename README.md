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
7. [Pruebas en Thunder Client o Postman](#pruebas-en-thunder-client-o-postman)
8. [Despliegue en Vercel](#despliegue-en-vercel)

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

## 🛡️ Seguridad
- **Autenticación:** Basada en **JWT**. El token debe enviarse en los **headers** como:
  ```http
  Authorization: Bearer <token>
  ```
---

## 🚀 **Instalación**

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
### **🐾Mascotas**
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