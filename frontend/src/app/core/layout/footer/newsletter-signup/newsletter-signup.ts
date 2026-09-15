// newsletter-signup.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-newsletter-signup',
    imports: [CommonModule, FormsModule],
    templateUrl: './newsletter-signup.html',
    styleUrls: ['./newsletter-signup.css']
})
export class NewsletterSignup {
    email: string = '';

    onSubmit() {
        if (this.email) {
            console.log('E-mail para inscrição:', this.email);
            // Aqui você fará a chamada para sua API backend
            alert('Inscrição realizada com sucesso! (Funcionalidade em breve)');
            this.email = '';
        }
    }
}