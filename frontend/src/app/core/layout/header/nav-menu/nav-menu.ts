import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

interface MenuItem {
    label: string;
    route: string;
}

@Component({
    selector: 'app-nav-menu',
    standalone: true,                        // ← necessário
    imports: [RouterLink, RouterLinkActive, NgFor], // ← importa as diretivas
    templateUrl: './nav-menu.html',
    styleUrls: ['./nav-menu.css']            // ou styleUrl (singular)
})
export class NavMenu {
    menuItems: MenuItem[] = [
        { label: 'Início', route: '/' },
        { label: 'Artigos', route: '/artigos' },
        { label: 'Podcast', route: '/podcast' },
        { label: 'Planos de Leitura', route: '/planos' },
        { label: 'Sobre', route: '/sobre' },
    ];
}