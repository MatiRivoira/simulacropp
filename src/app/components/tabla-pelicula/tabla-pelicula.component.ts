import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.scss'
})
export class TablaPeliculaComponent {
  @Input() peliculas: Pelicula[] = [];
}
