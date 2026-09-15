// footer.component.ts
import { Component } from '@angular/core';
import { FooterLinks } from './footer-links/footer-links';
import { NewsletterSignup } from './newsletter-signup/newsletter-signup';
import { SocialLinks } from './social-links/social-links';

@Component({
    selector: 'app-footer',
    imports: [FooterLinks, NewsletterSignup, SocialLinks],
    templateUrl: './footer.html',
    styleUrls: ['./footer.css']
})
export class Footer {
    currentYear: number = new Date().getFullYear();
}