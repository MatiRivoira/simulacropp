import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'bienvenido',
        loadComponent: () => import('./components/bienvenido/bienvenido.component').then(m => m.BienvenidoComponent),
    },
    {
        path: 'busqueda',
        loadComponent: () => import('./components/busqueda/busqueda.component').then(m => m.BusquedaComponent),
    },
    {
        path: 'peliculas',
        loadComponent: () => import('./components/pelicula-alta/pelicula-alta.component').then(m => m.PeliculaAltaComponent),
    },
    {
        path: 'actor/alta',
        loadComponent: () => import('./components/actor-alta/actor-alta.component').then(m => m.ActorAltaComponent),
    },
    {
        path: 'actor/listado',
        loadComponent: () => import('./components/actor-listado/actor-listado.component').then(m => m.ActorListadoComponent),
    },
    {
        path: 'peliculas/listado',
        loadComponent: () => import('./components/pelicula-listado/pelicula-listado.component').then(m => m.PeliculaListadoComponent),
    },
    {
        path: '**',
        redirectTo: '/bienvenido',
    },
];
