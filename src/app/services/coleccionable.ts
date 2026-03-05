import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColeccionableService {
  private lista = [
    { nombre: 'Charizard', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', descripcion: 'Fuego' },
    { nombre: 'Mewtwo', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', descripcion: 'Psíquico' },
    { nombre: 'Batman Pop', categoria: 'funkos', imagen: 'URL_DE_TU_FUNKO', descripcion: 'DC Heroes' },
    { nombre: 'One Piece Vol. 1', categoria: 'mangas', imagen: 'URL_DE_TU_MANGA', descripcion: 'Eiichiro Oda' },
  ];

  obtenerPorCategoria(cat: string) {
    return this.lista.filter(item => item.categoria === cat);
  }
}
