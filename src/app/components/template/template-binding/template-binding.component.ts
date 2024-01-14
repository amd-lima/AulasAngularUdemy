import cli from '@angular/cli';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Amanda Lima';
  public age: number = 30;
  public buttonDisabled: boolean = true;
  public imagePath: string = 'https://picsum.photos/200/300';
  public textDecoration = this.age < 30 ? 'underline' : 'none';

  constructor() {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 3000);
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  public sumAge(){
    console.log('sumAge', this.age);
    return this.age++;
  }

  public subAge(){
    return this.age--;
  }

  public onKeyDown(event: Event){
    console.log('onKeyDown ', event);

  }

  public onMouseEvent(event: MouseEvent){
    console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}


