import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { patternValidator } from '../shared/pattern-validator';

@Component({
  selector: 'app-formreactivecomponent',
  templateUrl: './formreactivecomponent.component.html',
  styleUrls: ['./formreactivecomponent.component.scss']
})
export class FormreactiveComponent {
    name = new FormControl('');
    updateName() {
      this.name.setValue('Tushar');
}

}
