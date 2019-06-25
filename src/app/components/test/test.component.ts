import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { NewCustomValidators } from '../../validators/new-custom-validators';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  courses = [
    { id: 1, course: 'PHP' },
    { id: 2, course: 'PHP 2' },
    { id: 3, course: 'PHP 3' },
    { id: 4, course: 'PHP 4' },
  ];
  active = true;
  login: any;
  ngOnInit(): void {
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', CustomValidators.equalTo(password));
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        CustomValidators.email,
        NewCustomValidators.noSpeaceAllowed
      ], NewCustomValidators.uniqueEmail),
      password,
      certainPassword
    });
  }
  get email() { return this.login.get('email'); }

  get password() { return this.login.get('password'); }

  get certainPassword() { return this.login.get('certainPassword'); }


  trackBycourses(index, item) {
    return item ? item.id : undefined;
  }
  add() {
    const random = Math.random().toString(36).substring(7);
    this.active = !this.active;
    this.courses.push({ id: 5, course: random });
  }
  remove(item) {
    const index = this.courses.indexOf(item);
    this.courses.splice(index, 1);
  }
  somethingChanged(object) {
    console.log(object);
  }
  checklogin(formData) {
    if (formData.invalid) {
      formData.email.markAsTouched();
      formData.password.markAsTouched();
    }
  }
  rlogin() {
    this.login.markAsTouched();
    this.login.setErrors({ invalid_login: true });
  }

}
