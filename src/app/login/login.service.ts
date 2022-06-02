import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { LocalStorageService } from "../localStorage/localStorage.service";

@Injectable({ providedIn: 'root' })
export class LoginService {
    isAuthenticated = false;
    isAuthenticatedSubscribe = new Subject<boolean>();

    constructor(private router: Router,private localStorageService: LocalStorageService){}
        
    verificarLogin(){
        //this.isAuthenticated = !this.localStorageService.get('login') ? false : true;
        this.isAuthenticated = !!this.localStorageService.get('login');
        console.log(this.isAuthenticated);
        return this.isAuthenticated; 
    }
    login(data: any){
        this.localStorageService.set('login', data);
        this.isAuthenticatedSubscribe.next(true); 
    }  
    logOut(){
        this.isAuthenticatedSubscribe.next(false); 
        this.localStorageService.remove('login');
        this.router.navigate(['/login']);   
    }
}