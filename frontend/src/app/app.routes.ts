import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { PlanoDetalheComponent } from './features/planos/plano-detalhe';
import { PlanosComponent } from './features/planos/planos';
import {
  ArtigosComponent,
  ContatoComponent,
  PodcastComponent,
  SobreComponent,
} from './features/static-pages/static-pages';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Plano de Leitura' },
  { path: 'artigos', component: ArtigosComponent, title: 'Artigos | Plano de Leitura' },
  { path: 'podcast', component: PodcastComponent, title: 'Podcast | Plano de Leitura' },
  { path: 'planos', component: PlanosComponent, title: 'Planos de leitura | Plano de Leitura' },
  { path: 'planos/:id', component: PlanoDetalheComponent },
  { path: 'sobre', component: SobreComponent, title: 'Sobre | Plano de Leitura' },
  { path: 'contato', component: ContatoComponent, title: 'Contato | Plano de Leitura' },
  { path: '**', redirectTo: '' },
];
