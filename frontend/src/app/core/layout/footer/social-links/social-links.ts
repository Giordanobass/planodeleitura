import { Component } from '@angular/core';

interface ShareLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  private readonly pageUrl = encodeURIComponent(window.location.origin);
  readonly links: ShareLink[] = [
    {
      label: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${this.pageUrl}`,
    },
    {
      label: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${this.pageUrl}`,
    },
    {
      label: 'WhatsApp',
      url: `https://wa.me/?text=${this.pageUrl}`,
    },
  ];
}
