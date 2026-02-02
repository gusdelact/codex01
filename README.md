# Ejemplo de microfrontends con Module Federation y React

Este repositorio contiene un ejemplo mínimo con **Webpack 5 + Module Federation** usando React:

- **apps/remote** expone un componente (`Button`).
- **apps/host** consume el componente remoto y lo renderiza.

## Requisitos

- Node.js 18+ (o compatible con Webpack 5)
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo

Levanta los dos proyectos en paralelo (remote en :3001 y host en :3000):

```bash
npm run start
```

Luego abre:

- Host: http://localhost:3000
- Remote (standalone): http://localhost:3001

## Estructura

```
apps/
  host/
  remote/
```

## ¿Cómo funciona?

- El **remote** publica `remoteEntry.js` en `http://localhost:3001/remoteEntry.js`.
- El **host** consume `remote/Button` vía Module Federation.
- React y ReactDOM se comparten como **singleton** para evitar duplicados.
