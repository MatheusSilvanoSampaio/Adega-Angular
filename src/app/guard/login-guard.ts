import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageService } from "../localStorage/localStorage.service";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivateChild {
    constructor(private localStorageService: LocalStorageService, private router: Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const login = !!this.localStorageService.get('login');
        if(login){
            return true;
        }
        return this.router.createUrlTree(['/login'])
    }
}