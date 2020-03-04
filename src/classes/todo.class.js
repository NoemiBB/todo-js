export class Todo {
    static fromJson({ id, tarea, completado, creado }) { // Desestructuramos el objeto
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirTodo() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}