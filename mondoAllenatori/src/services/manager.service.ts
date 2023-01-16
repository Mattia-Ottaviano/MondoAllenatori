import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ManagerService {
    allenatoreId!: string;
    allenatoreEmitter: EventEmitter<string> = new EventEmitter();

    schemaId!: string;
    schemaEmitter: EventEmitter<string> = new EventEmitter();


    constructor() { }

    setAllenatore(id: string): void {
        this.allenatoreId = id;
        this.allenatoreEmitter.emit(id);
    }
    getAllenatoreId(): EventEmitter<string> {
        return this.allenatoreEmitter;
    }


    setSchema(id: string): void {
        this.schemaId = id;
        this.schemaEmitter.emit(id);
    }
    getSchemaId(): EventEmitter<string> {
        return this.schemaEmitter;
    }
}