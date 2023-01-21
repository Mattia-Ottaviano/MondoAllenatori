import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ManagerService {
    allenatoreId!: string;
    allenatoreEmitter: Subject<string> = new Subject();

    schemaId!: string;
    schemaEmitter: Subject<string> = new Subject();

    ruoloId!: string;
    ruoloEmitter: Subject<string> = new Subject();

    esercizioId!: string;
    esercizioEmitter: Subject<string> = new Subject();


    constructor() { }

    setAllenatore(id: string): void {
        this.allenatoreId = id;
        this.allenatoreEmitter.next(id);
    }
    getAllenatoreId(): Observable<string> {
        return this.allenatoreEmitter.asObservable();
    }


    setSchema(id: string): void {
        this.schemaId = id;
        this.schemaEmitter.next(id);
    }
    getSchemaId(): Observable<string> {
        return this.schemaEmitter.asObservable();
    }


    setRuolo(id: string): void {
        this.ruoloId = id;
        this.ruoloEmitter.next(id);
    }
    getRuoloId(): Observable<string> {
        return this.ruoloEmitter.asObservable();
    }


    setEsercizio(id: string): void {
        this.esercizioId = id;
        this.esercizioEmitter.next(id);
    }
    getEsercizioId(): Observable<string> {
        return this.esercizioEmitter.asObservable();
    }
}