# Welcome Typescript
En este proyecto vamos a encontrar los Hooks mas utilizados de React con una transcripción a Typescript para erradicar la anarquia de Javascript

## Unos datos de Ts
Para utilizar Typescript es necesario hacer una transpilacion a Javascript para que sea entendido por los navegadores
![image](https://user-images.githubusercontent.com/33574582/164721449-e3c4af45-7a8e-413d-b190-5efe6184fc0a.png)

| Característica | JavaScript | TypeScript |
| -- | -- | -- |
| Tipado estático |	No existe: las variables se pueden cambiar de tipo al vuelo, en cualquier momento | Es un lenguaje fuertemente tipado por lo que debemos indicar en todos los casos el tipo de dato a manejar y se producen errores si lo cambiamos. También soporta inferencia de tipos en las declaraciones, fijándolos a partir de ahí |
| Tipos genéricos | No existe | Permite crear código reutilizable basado en tipos genéricos (no confundir con la ausencia de tipado fuerte o estático en JavaScript) |
| Tipado estructural | No existe | Permite crear estructuras en base a interfaces de modo que podamos trabajar con una estructura de datos predefinida que no se salga de ciertos parámetros |
| Tipos enumerados | Se pueden simular con clases sencillas, pero no dan, ni de lejos, la misma robustez | Permite definir enumeraciones y mantener la robustez al utilizarlas de modo que no nos podamos salir de ellas |
| Tuplas | No hay soporte	| Soporta Tuplas como tipo básico de datos |
| Modularización | Soporta módulos a partir de ECMAScript 6, pero el soporte de módulos en los navegadores es todavía reciente | Ofrece soporte para módulos directamente en el lenguaje |
| Programación orientada a Objetos | Basada en prototipos, con sintaxis compleja en ES5, y sintaxis simplificada en ES6+ | Ofrece una sintaxis muy similar a la de otros lenguajes como C# o Java, y además añade capacidades inéditas en ECMAScript, como las clases abstractas, modificadores de acceso, tipos enumerados, entre otras |
| Interfaces | No hay soporte | En TypeScript las interfaces son esenciales y permiten crear multitud de escenarios avanzados |
| Espacios de nombres | Se pueden simular de manera básica | Soporte total integrado en el lenguaje, nos ayuda a organizar mejor el código y evitar conflictos |
| Decoradores	| No hay soporte | Ofrece un soporte integrado para esta característica lo que facilita enormemente la escritura de código basada en aspectos y la inyección de dependencias |

## Por ultimo la vieja confiablo
[Documentacion Typescript](https://www.typescriptlang.org/docs/)
