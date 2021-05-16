import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public form: FormGroup;
  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.form.valueChanges.subscribe(val => console.log(val));
  }

  private createForm() {
    this.form = this.fb.group({
      name: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ]),
      verifyPassword: new FormControl('', [ Validators.required ]),
      phones: new FormArray([], [ Validators.required ])
    }, {
      validators: [
        this.validatePasswords
      ]
    });
  }

  private validatePasswords(group: FormGroup) {
    return group.get('password').value === group.get('verifyPassword').value ?
      null : `Both passwords must match.`;
  }

  public get phones() {
    return this.form.get('phones') as FormArray;
  }

  public get name() {
    return this.form.get('name') as FormControl;
  }

  public get email() {
    return this.form.get('email') as FormControl;
  }

  public get password() {
    return this.form.get('password') as FormControl;
  }

  public get verifyPassword() {
    return this.form.get('verifyPassword') as FormControl;
  }

  public addPhone() {
    const phone = this.fb.group({
      phone: new FormControl('', [ Validators.required ]),
      description: new FormControl('', [ Validators.required ])
    });
    this.phones.push(phone);
  }

  public removePhone(idx: number) {
    this.phones.removeAt(idx);
  }

  public onSubmit() {
    console.log(this.form.value);
  }
}
