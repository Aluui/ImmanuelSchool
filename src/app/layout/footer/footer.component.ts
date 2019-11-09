import { Component, OnInit } from '@angular/core';
import { FooterLinksColumn } from 'src/app/shared/models/footer-links-column';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinks: Array<FooterLinksColumn>;
  constructor() {}

  ngOnInit() {
    this.footerLinks = [
      {
        header: 'About us',
        links: [
          {
            title: 'about',
            url: 'about'
          }
        ]
      },

      {
        header: 'our schools',
        links: [
          {
            title: 'pre-school',
            url: 'preschool'
          },
          {
            title: 'junior school',
            url: 'juniorschool'
          },
          {
            title: 'high school',
            url: 'highschool'
          },
          {
            title: 'advanced classes',
            url: 'advancedclasses'
          }
        ]
      },

      {
        header: 'Why ifc',
        links: [
          {
            title: 'our facilities',
            url: ''
          },
          {
            title: 'boarding experience',
            url: ''
          },
          {
            title: 'microsoft pil',
            url: ''
          },
          {
            title: 'parents as partners',
            url: ''
          }
        ]
      },

      {
        header: 'admission procedure',
        links: [
          {
            title: 'admissions',
            url: ''
          },
          {
            title: 'entrance examination',
            url: ''
          }
        ]
      }
    ];
  }
}
