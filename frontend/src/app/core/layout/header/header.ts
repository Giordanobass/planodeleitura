import { Component } from '@angular/core';
import { Logo } from './logo/logo';
import { NavMenu } from './nav-menu/nav-menu';

@Component({
  selector: 'app-header',
  imports: [Logo, NavMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
