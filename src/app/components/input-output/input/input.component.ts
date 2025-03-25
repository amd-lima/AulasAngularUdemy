import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input(
    {
      // alias: 'otherName', in case I want to use in the html file a different name than the one I used in the input decorator

      // required: true, in case I want to make the input required

      //transform: (value: string) => value.toUpperCase(), in case I want to transform the input value
    }
  ) inputName: string = '';


//input com signal
names = signal('');
@Input() set inputNameSignal(val: string){this.names.set(val)}

}
