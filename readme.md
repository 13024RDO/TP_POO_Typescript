# TP POO TypeScript

Este repositorio contiene la investigación y desarrollo de conceptos fundamentales de Programación Orientada a Objetos (POO) usando TypeScript.

---

## Investigación: Preguntas y Respuestas

### 1. ¿Cuál es la diferencia entre `extends` e `implements` en TypeScript?

- **`extends`**  
  Se utiliza para la herencia de clases. Una clase que extiende otra hereda sus propiedades y métodos, permitiendo reutilizar y especializar el comportamiento de la clase base.

- **`implements`**  
  Se usa cuando una clase promete cumplir con un contrato definido por una interfaz. La clase debe implementar todas las propiedades y métodos especificados en la interfaz, garantizando una estructura consistente.

**Ejemplo:**
```typescript
interface Animal {
  comer(): void;
}

class Perro implements Animal {
  comer() { console.log("El perro come."); }
}

class Mascota {
  dormir() { console.log("La mascota duerme."); }
}

class Gato extends Mascota implements Animal {
  comer() { console.log("El gato come."); }
}
```

---

### 2. Ventajas del tipado fuerte en funciones y clases

- **Detección temprana de errores:**  
  Los errores se identifican en tiempo de compilación, evitando fallos inesperados al ejecutar el programa.

- **Documentación explícita:**  
  El tipo de datos funciona como documentación viva, mejorando la comprensión del código por parte de cualquier desarrollador.

- **Mejor soporte de herramientas:**  
  Los IDEs ofrecen autocompletado y verificación de tipos, acelerando el desarrollo y reduciendo errores.

- **Mantenibilidad:**  
  En proyectos grandes, los cambios en estructuras se reflejan claramente, facilitando actualizaciones y refactorizaciones seguras.

---

### 3. ¿Qué significa que una clase sea abstracta?

Una **clase abstracta** no puede ser instanciada directamente. Sirve como plantilla para otras clases, definiendo métodos y propiedades comunes, pero dejando la implementación de algunos comportamientos específicos a las subclases.

**Ejemplo:**
```typescript
abstract class Vehiculo {
  abstract arrancar(): void;
  frenar() { console.log("El vehículo frena."); }
}

class Auto extends Vehiculo {
  arrancar() { console.log("El auto arranca."); }
}
```

---

### 4. ¿Por qué conviene usar getters y setters para el encapsulamiento?

Los **getters** y **setters** permiten controlar el acceso y modificación de las propiedades internas de una clase. Así, se pueden:

- Validar datos antes de asignarlos
- Cambiar la implementación interna sin afectar el código externo
- Proteger la integridad de los datos

**Ejemplo:**
```typescript
class Persona {
  private _edad: number = 0;

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor >= 0) {
      this._edad = valor;
    } else {
      throw new Error("La edad debe ser positiva.");
    }
  }
}
```

---

### 5. Ejemplos de tipado en funciones

#### a) Función con parámetros obligatorios y opcionales

```typescript
function registrarUsuario(nombre: string, edad: number, pais?: string): void {
  console.log(`Usuario: ${nombre}, Edad: ${edad}`);
  if (pais) {
    console.log(`País: ${pais}`);
  }
}

registrarUsuario("Ana", 30); // País es opcional
registrarUsuario("Carlos", 25, "México"); // País proporcionado
```

#### b) Función que devuelve una Promise

```typescript
function obtenerDatosAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos obtenidos correctamente");
      // En caso de error usaríamos:
      // reject(new Error("Error al obtener datos"));
    }, 1000);
  });
}

// Uso con async/await
async function usarDatos() {
  try {
    const datos: string = await obtenerDatosAsync();
    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}

// Uso con then/catch
obtenerDatosAsync()
  .then((datos: string) => console.log(datos))
  .catch((error: Error) => console.error(error));
```

---

## Recursos recomendados

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Guía de POO en TypeScript](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Principios SOLID](https://es.wikipedia.org/wiki/SOLID)

---

**Autor:**  
13024RDO
