import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importamos la clase de la Navbar (ajusta la ruta si es necesario)
import { NavbarComponent } from '../../components/navbar/navbar';
import { ColeccionableService } from '../../services/coleccionable';

@Component({
  selector: 'app-home',
  standalone: true,
  // 2. AGREGAMOS NavbarComponent AQUÍ ABAJO
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  funkos: any[] = [];
  mangas: any[] = [];

  constructor(private _service: ColeccionableService) {}

  ngOnInit() {
  this.pokemons = this._service.obtenerPorCategoria('pokemon');
  this.funkos = this._service.obtenerPorCategoria('funkos');
  this.mangas = this._service.obtenerPorCategoria('mangas');
}
}
