import { AbstractControl, ValidationErrors} from '@angular/forms';

export class NewCustomValidators {

    static noSpeaceAllowed(control: AbstractControl): ValidationErrors | null {
            if ( (control.value as string).indexOf(' ') !== -1 ) {
                    return {noSpeaceAllowed: true};
            } else {
                    return null;
            }
    }
    static uniqueEmail(control: AbstractControl): Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                   if ( control.value == 'mohamed.dev1991@gmail.com') {
                       console.log(control.value );
                       resolve({uniqueEmail: true});
                    } else {
                        resolve(null);
                    }
                }, 2000);
        });
    }
}
