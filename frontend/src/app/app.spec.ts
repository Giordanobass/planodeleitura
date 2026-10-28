import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the home page heading', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Descubra seu próximo plano de leitura',
    );
  });

  it('should show the book combos in the gallery', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/galeria');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.combo-card')).toHaveLength(4);
    expect(compiled.querySelector('h1')?.textContent).toContain('Galeria');
  });

  it('should show the books and safe purchase links for a combo', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/combo/financas');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const purchaseLink = compiled.querySelector('.buy-button');
    expect(compiled.querySelector('h1')?.textContent).toContain('Finanças');
    expect(compiled.querySelectorAll('.book-item')).toHaveLength(3);
    expect(purchaseLink?.getAttribute('target')).toBe('_blank');
    expect(purchaseLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should show detailed reading plans with steps', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/planos');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.reading-plan-card')).toHaveLength(12);
    expect(compiled.textContent).toContain('30 minutos por dia');
    expect(compiled.querySelectorAll('.reading-plan-card__steps li').length).toBeGreaterThanOrEqual(36);
  });
});
