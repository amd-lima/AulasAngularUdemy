import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss'
})
export class FatherComponent {
public inputNameSignal = signal('Other name');

public outputName = signal('Output name');
}
