import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
    label: string;
    route: string;
}

@Component({
    selector: 'app-nav-menu',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './nav-menu.html',
    styleUrl: './nav-menu.css',
})
export class NavMenu {
    readonly menuItems: MenuItem[] = [
        { label: 'Início', route: '/' },
        { label: 'Artigos', route: '/artigos' },
        { label: 'Podcast', route: '/podcast' },
        { label: 'Planos de Leitura', route: '/planos' },
        { label: 'Sobre', route: '/sobre' },
        { label: 'Contato', route: '/contato' },
    ];
}