export interface Productos {
    nombre: string;
    imagen: string;
    //disponible: string;
    disponibilidad?: number; // Si deseas incluir disponibilidad, de lo contrario, puedes omitir esto

    //disponibilidad: string; // o boolean si es disponible o no disponible
    quantity?: number; // Agrega esta línea


  }