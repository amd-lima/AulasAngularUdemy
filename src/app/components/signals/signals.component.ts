import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('John')
  public lastName = signal('Doe')

  public fullName = computed(() => {
    return this.firstName() +' '+ this.lastName()
  })

  public array = signal([1])

  public updateName(){
    return this.firstName.set('Jane')
  }
  public updateArray(){
    return this.array.update((arr: Array<number>) => {
      arr.push(this.array().length + 1)
      //outra maneira de fazer: return [...arr, arr.length + 1]
      return arr
    })
  }
  // Efect
  constructor(){
    effect(() => {
      console.log('First name changed to: ', this.firstName())
      console.log('Array changed to: ', this.array())
    })
  }
}
