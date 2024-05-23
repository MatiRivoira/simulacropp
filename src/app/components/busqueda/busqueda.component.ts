import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TablaPeliculaComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.scss'
})
export class BusquedaComponent {
  peliculas : Pelicula[] = [];
}
