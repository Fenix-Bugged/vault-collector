export interface Coleccionable {
  nombre: string;
  imagen: string;
  descripcion: string;
  categoria?: string;
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColeccionableService {
  
  private misColeccionables: Coleccionable[] = [
    { nombre: 'Charizard Shiny', imagen: 'https://img.pokemondb.net/sprites/home/normal/charizard.png', descripcion: 'Carta legendaria' },
    { nombre: 'Mewtwo GX', imagen: 'https://img.pokemondb.net/sprites/home/normal/mewtwo.png', descripcion: 'Poder psíquico' }
  ];

  constructor() {}

  // Este método lo usaremos para obtener la lista
  obtenerTodos() {
    return this.misColeccionables;
  }
}
