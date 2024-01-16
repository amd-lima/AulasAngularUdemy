import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public loadingData$: Observable<String[]> = of([
    'data1', 'data2', 'data3'
  ]).pipe(delay(2000));

  public trackByFn(index: number){
    return index;
  }


  public itens = [{name: 'Amanda Lima'}]
  public itensEmpty: Array<{name: string}> = []
  public switchCondition: string = 'A'


  addNewName(value: string){
    this.itens.push({name:value});
  }

}
