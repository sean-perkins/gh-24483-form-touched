import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  form = new FormGroup({
    name: new FormControl()
  });

  submit() {
    this.form.markAllAsTouched();
  }
}
