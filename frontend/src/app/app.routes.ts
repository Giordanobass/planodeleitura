import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ComboDetalheComponent } from './features/galeria/combo-detalhe';
import { GaleriaComponent } from './features/galeria/galeria';
import { PlanoDetalheComponent } from './features/planos/plano-detalhe';
import { PlanosComponent } from './features/planos/planos';
import {
  ArtigosComponent,
  ContatoComponent,
} from './features/static-pages/static-pages';
import { SobreComponent } from './features/sobre/sobre';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Plano de Leitura' },
  { path: 'artigos', component: ArtigosComponent, title: 'Artigos | Plano de Leitura' },
  { path: 'galeria', component: GaleriaComponent, title: 'Galeria | Plano de Leitura' },
  { path: 'combo/:id', component: ComboDetalheComponent },
  { path: 'planos', component: PlanosComponent, title: 'Planos de leitura | Plano de Leitura' },
  { path: 'planos/:id', component: PlanoDetalheComponent },
  { path: 'sobre', component: SobreComponent, title: 'Sobre | Plano de Leitura' },
  { path: 'contato', component: ContatoComponent, title: 'Contato | Plano de Leitura' },
  { path: '**', redirectTo: '' },
];
