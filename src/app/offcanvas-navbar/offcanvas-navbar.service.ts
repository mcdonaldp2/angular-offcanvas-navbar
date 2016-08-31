import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class OffCanvasNavService {
    public offcanvas: Observable<boolean>;

    public boolSubject: Subject<boolean>;
    public toggleBool: boolean = false;

    constructor() {
        this.boolSubject = new Subject<boolean>();
        this.boolSubject.next(this.toggleBool);
        this.offcanvas = this.boolSubject.asObservable();
    }

    public toggle(){
        this.toggleBool = !this.toggleBool;
        this.boolSubject.next(this.toggleBool);
        
    }

}