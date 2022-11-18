import { FormGroup } from '@angular/forms';

export class FormErrorMixin {
    public hasError(controlName: string, errorName: string, form: FormGroup): boolean {
        if (form) {
            const control = form.get(controlName);

            return control?.errors ? control?.errors[errorName] : false;
        }

        return false;
    }
}
