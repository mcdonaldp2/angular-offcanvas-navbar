import { Component } from '@angular/core';
import { OffCanvasNavService } from './offcanvas-navbar.service';

@Component({
  moduleId: module.id,
  selector: 'offcanvas-navbar',
  templateUrl: 'offcanvas-navbar.html',
  styleUrls: ['offcanvas-navbar.css'],
  providers: []
})
export class OffCanvasNavComponent {
  constructor(public navService:OffCanvasNavService){}

  toggleOffCanvas(){
    this.navService.toggle();
  }
}
