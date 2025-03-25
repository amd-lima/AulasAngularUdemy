import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
@Output() public outputName = new EventEmitter<string>();

public sendOutput(){
  return this.outputName.emit('Output change');
}

}
