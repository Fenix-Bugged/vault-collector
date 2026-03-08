import { Injectable } from '@angular/core';
import { Coleccionable } from '../models/coleccionable.model';

@Injectable({
  providedIn: 'root'
})
export class ColeccionableService {
  private lista: Coleccionable[] = [
    // --- POKÉMON (10) ---
    { nombre: 'Charizard', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', descripcion: 'Llamarada destructiva' },
    { nombre: 'Mewtwo', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', descripcion: 'Poder psíquico legendario' },
    { nombre: 'Blastoise', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', descripcion: 'Cañones de agua a presión' },
    { nombre: 'Venusaur', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', descripcion: 'Energía solar pura' },
    { nombre: 'Pikachu', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', descripcion: 'Impactrueno clásico' },
    { nombre: 'Gengar', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png', descripcion: 'Amo de las sombras' },
    { nombre: 'Lucario', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png', descripcion: 'Controlador del aura' },
    { nombre: 'Rayquaza', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png', descripcion: 'Dominante de los cielos' },
    { nombre: 'Greninja', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png', descripcion: 'Maestro del Shuriken' },
    { nombre: 'Lugia', categoria: 'pokemon', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png', descripcion: 'Guardián de los mares' },

    // --- FUNKOS (10) ---
    { nombre: 'Batman Pop', categoria: 'funkos', imagen: 'https://cdnx.jumpseller.com/nighty-night/image/73195158/thumb/719/719?1770832181', descripcion: 'The Dark Knight' },
    { nombre: 'Spider-Man', categoria: 'funkos', imagen: 'https://cdnx.jumpseller.com/nighty-night/image/29666712/thumb/1079/1079?1673477255', descripcion: 'No Way Home Edition' },
    { nombre: 'Iron Man', categoria: 'funkos', imagen: 'https://cdnx.jumpseller.com/nighty-night/image/25102580/thumb/719/719?1655054951', descripcion: 'Avengers Endgame' },
    { nombre: 'Darth Vader', categoria: 'funkos', imagen: 'https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dwbab534d7/images/funko/upload/84530_POP_Star-Wars_EP3_Darth-Vader(REBUILD)_GLAM-WEB.png', descripcion: 'Star Wars Classics' },
    { nombre: 'Goku UI', categoria: 'funkos', imagen: 'https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dwfb576677/images/funko/31633-1.png', descripcion: 'Dragon Ball Super' },
    { nombre: 'Naruto Hokage', categoria: 'funkos', imagen: 'https://popochos.co/wp-content/uploads/2025/03/POP-Animation_-Boruto-Naruto-Hokagew_ChaseGW-hi-res-2.png', descripcion: 'Boruto Series' },
    { nombre: 'Luffy Gear 4', categoria: 'funkos', imagen: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw075213a8/images/funko/61368-1.png?sw=800&sh=800', descripcion: 'One Piece' },
    { nombre: 'Tanjiro', categoria: 'funkos', imagen: 'https://i5.walmartimages.com/seo/Funko-Vinyl-3-58-inches-Animation-Demon-Slayer-Tanjiro-Kamado_6b0e67d6-0cb7-4a6a-8a1a-08f059617312.5e942dc9304f9740459104ecc4c7cd9f.png', descripcion: 'Demon Slayer' },
    { nombre: 'Master Chief', categoria: 'funkos', imagen: 'https://pops.today/images/FUNKO_SODA/Master_Chief_500x500.webp', descripcion: 'Halo Infinite' },
    { nombre: 'The Mandalorian', categoria: 'funkos', imagen: 'https://cdnx.jumpseller.com/nighty-night/image/60532910/Funko_Pop_The_Mandalorian_585_1.png?1740436545', descripcion: 'Star Wars Disney+' },

    // --- MANGAS (10) ---
    { nombre: 'One Piece Vol. 100', categoria: 'mangas', imagen: 'https://m.media-amazon.com/images/I/81rEhhwbubL.jpg', descripcion: 'Eiichiro Oda' },
    { nombre: 'Berserk Vol. 1', categoria: 'mangas', imagen: 'https://cdn.kobo.com/book-images/b7ccda5d-c44e-4041-a1d4-382e69c641a1/1200/1200/False/berserk-volume-1.jpg', descripcion: 'Kentaro Miura' },
    { nombre: 'Akira Vol. 1', categoria: 'mangas', imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/1e/ea/1eeabce468b0395a3bd388dc491618cc.jpg', descripcion: 'Katsuhiro Otomo' },
    { nombre: 'Spy x Family', categoria: 'mangas', imagen: 'https://casacolombianadelcomic.com/gestion/uploads/product/974/spyxfamily05.jpg', descripcion: 'Tatsuya Endo' },
    { nombre: 'Chainsaw Man', categoria: 'mangas', imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/0b/cc/0bcc6f5b0943f60f56888436fd2ec774.jpg', descripcion: 'Tatsuki Fujimoto' },
    { nombre: 'Jujutsu Kaisen', categoria: 'mangas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIb4UwY-5JHbpLzA6iSU2RQlEjqdpMFzO8A&s', descripcion: 'Gege Akutami' },
    { nombre: 'Haikyuu!!', categoria: 'mangas', imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/3f/0e/3f0e5bb92bbb820dc99e71de92c8df79.jpg', descripcion: 'Haruichi Furudate' },
    { nombre: 'Death Note', categoria: 'mangas', imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b1/b8/b1b8751173eb53d303d8a7aeb5983edc.jpg', descripcion: 'Tsugumi Ohba' },
    { nombre: 'Vagabond', categoria: 'mangas', imagen: 'https://imgv2-1-f.scribdassets.com/img/document/437957483/original/6097908f5d/1?v=1', descripcion: 'Takehiko Inoue' },
    { nombre: 'Monster', categoria: 'mangas', imagen: 'https://preview.redd.it/thoughts-on-naoki-urasawas-monster-manga-anime-v0-uvlskkc5y8jc1.png?width=640&crop=smart&auto=webp&s=fd7f6a61e8084e32b6f4cfbb7b9c0dabcb209882', descripcion: 'Naoki Urasawa' }
  ];

  constructor() {}

  obtenerPorCategoria(cat: string) {
    return this.lista.filter(item => item.categoria === cat);
  }
}