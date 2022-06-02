import { JsonPipe } from "@angular/common";
import { NullVisitor } from "@angular/compiler/src/render3/r3_ast";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LocalStorageService{
    private storage: Storage;

    constructor(){
        this.storage = window.localStorage;
    }  
    set(key: string, value: string){
            this.storage.setItem(key, JSON.stringify((value)));
            return true;

    }
    get(key: string){
        if (this.storage) {  
            return this.storage.getItem(key);
        }
        return null;
    }
    remove(key: string): boolean{
        if(this.storage){
            this.storage.removeItem(key);
        return true;
        }
        return false;
    }  
}