import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { OffCanvasNavComponent } from './offcanvas-navbar/offcanvas-navbar';
import { OffCanvasNavService} from './offcanvas-navbar/offcanvas-navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [OffCanvasNavComponent],
  providers: [OffCanvasNavService]
})
export class AppComponent {
  public navToggle: boolean;
  public dropdown: boolean = false;

  constructor(public navService: OffCanvasNavService){
    navService.offcanvas.subscribe((newBool: boolean) => {
      this.navToggle = newBool;
    });
  }

  dropdownToggle(){
    this.dropdown = !this.dropdown;
  }

}
