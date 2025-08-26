

Investigación - Preguntas y Respuestas

1. ¿Qué diferencia existe entre extends y implements en TypeScript?

La diferencia principal entre extends y implements radica en su propósito dentro de la herencia y la implementación de contratos. Cuando una clase utiliza extends, está heredando de otra clase, lo que significa que obtiene todas las propiedades y métodos de la clase padre, pudiendo extender o modificar su comportamiento. Esto establece una relación "es-un" entre las clases.

Por otro lado, implements se utiliza cuando una clase se compromete a cumplir con un contrato definido por una interfaz. La clase debe implementar todas las propiedades y métodos que la interfaz define, pero no hereda ninguna implementación. Esto establece una relación "se-comporta-como" donde la clase garantiza que tendrá ciertas características sin importar su herencia.

1. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?

El tipado fuerte en TypeScript proporciona múltiples ventajas significativas. En primer lugar, detecta errores en tiempo de compilación en lugar de en tiempo de ejecución, lo que permite identificar problemas antes de que el código se ejecute. Esto mejora la calidad del código y reduce el tiempo de depuración.

Además, el tipado fuerte sirve como documentación viva del código, haciendo que sea más comprensible para otros desarrolladores y para tu yo futuro. Las herramientas de desarrollo pueden aprovechar la información de tipos para proporcionar mejor autocompletado, refactorización más segura y navegación de código más intuitiva.

Finalmente, el tipado fuerte facilita el mantenimiento a largo plazo, especialmente en proyectos grandes, ya que los cambios en las estructuras de datos se propagan claramente a través del sistema de tipos, haciendo evidentes los lugares que necesitan actualización.

1. ¿Qué significa que una clase sea abstracta?

Una clase abstracta es una clase que no puede ser instanciada directamente, sino que está diseñada específicamente para ser heredada por otras clases. Sirve como plantilla o base para clases más concretas. Las clases abstractas pueden contener métodos abstractos, que son métodos declarados pero sin implementación, forzando a las clases hijas a proporcionar su propia implementación.

Este concepto es útil cuando se quiere definir un comportamiento común para un grupo de clases relacionadas, pero se necesita que ciertos aspectos específicos sean implementados por cada subclase según sus necesidades particulares. Las clases abstractas permiten establecer una estructura base mientras se delegan los detalles específicos a las implementaciones concretas.

1. ¿Por qué conviene usar getters y setters para el encapsulamiento?

Los getters y setters son fundamentales para implementar el principio de encapsulamiento porque permiten controlar el acceso a las propiedades internas de una clase. En lugar de permitir el acceso directo a las variables, los getters y setters proporcionan métodos controlados para leer y modificar los valores.

Esto ofrece varias ventajas importantes: permite validar los datos antes de asignarlos a una propiedad, posibilita cambiar la implementación interna sin afectar el código externo que utiliza la clase, facilita añadir lógica adicional cuando se accede o modifica un valor (como logging o notificaciones), y permite crear propiedades de solo lectura exponiendo solo el getter sin el setter.

1. Ejemplificar cómo tipar:
1. Una función con parámetros obligatorios y opcionales

typescript

// Parámetros obligatorios: nombre y edad

// Parámetro opcional: pais (puede ser undefined)

function registrarUsuario(nombre: string, edad: number, pais?: string): void {

console.log(`Usuario: ${nombre}, Edad: ${edad}`);

if (pais) {

console.log(`País: ${pais}`);

}

}

// Uso:

registrarUsuario("Ana", 30); // País es opcional

registrarUsuario("Carlos", 25, "México"); // Se puede proporcionar país

1. Una función que devuelve una Promise

typescript

// Función que devuelve una Promise que se resuelve en un string

function obtenerDatosAsync(): Promise<string> {

return new Promise((resolve, reject) => {

setTimeout(() => {

// Simulamos una operación asíncrona exitosa

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

