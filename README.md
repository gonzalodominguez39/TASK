# TASK App

TASK es una aplicación desarrollada en **React Native** utilizando **Expo**. Esta aplicación tiene como objetivo gestionar tareas de manera eficiente y sencilla, proporcionando una experiencia de usuario moderna y fluida.

## Características

- Crear, editar y eliminar tareas.
- Marcar tareas como completadas.
- Interfaz de usuario intuitiva y responsive.
- Sincronización en tiempo real (si aplica).

## Tecnologías Utilizadas

- **React Native**: Framework para desarrollar aplicaciones móviles multiplataforma.
- **Expo**: Herramienta para simplificar el desarrollo y despliegue de aplicaciones en React Native.
- **JavaScript**/ **TypeScript**: Lenguaje principal del proyecto.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/gonzalodominguez39/TASK.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd TASK
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el proyecto con Expo:

   ```bash
   npx expo start
   ```

5. Escanea el código QR con la aplicación de Expo Go en tu dispositivo móvil o utiliza un emulador para probar la aplicación.

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Ejecuta la aplicación en un emulador o dispositivo Android.
- `npm run ios`: Ejecuta la aplicación en un emulador o dispositivo iOS (requiere macOS).
- `npm run web`: Ejecuta la aplicación en un navegador web.

## Estructura del Proyecto

```plaintext
TASK/
├── assets/          # Recursos como imágenes, fuentes, etc.
├── components/      # Componentes reutilizables de la UI
├── screens/         # Pantallas principales de la app
├── navigation/      # Configuración de la navegación
├── hooks/           # Hooks personalizados
├── App.js           # Punto de entrada de la aplicación
├── package.json     # Configuración del proyecto y dependencias
└── README.md        # Documentación del proyecto
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas o mejoras, por favor abre un **issue** o envía un **pull request**.

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza los cambios y haz un commit:

   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```

4. Envía los cambios al repositorio remoto:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Abre un **pull request**.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

Desarrollado con ❤️ por [Gonzalo Domínguez](https://github.com/gonzalodominguez39).
