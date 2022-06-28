import {AbstractControl} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CustomValidators {

  senhasIguais(control: AbstractControl): { [s: string]: boolean } | null{
    const pass = control.get('novaSenha')?.value;
    const confirmPass = control.get('confirmarSenha')?.value
    return pass === confirmPass ? null : {notSame: true}
  }
}
