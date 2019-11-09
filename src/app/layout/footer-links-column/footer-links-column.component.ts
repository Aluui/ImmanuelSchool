import { Component, OnInit, Input } from '@angular/core';
import { FooterLinksColumn } from 'src/app/shared/models/footer-links-column';

@Component({
  selector: 'app-footer-links-column',
  templateUrl: './footer-links-column.component.html',
  styleUrls: ['./footer-links-column.component.scss']
})
export class FooterLinksColumnComponent implements OnInit {
  @Input() model: FooterLinksColumn;
  constructor() {}

  ngOnInit() {}
}
