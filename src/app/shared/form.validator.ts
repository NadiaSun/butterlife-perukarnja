import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidatorName(control: AbstractControl): ValidationErrors | null {
   if (control.value.trim().length < 3) {
    return { invalidNameLength: true }
   } else if (control.value.match(/\d/)) {
    return { invalidNameSymbol: true }
   }
   return null
}

export function ValidatorPhone(control: AbstractControl): ValidationErrors | null {
   if (control.value.e164Number.length < 8) {
      return {invalidLength: true}
   }
   return null
}
