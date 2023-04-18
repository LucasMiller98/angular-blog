import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  
  @Input()
  public photo: string = ''
  
  @Input()
  public cardTitle: string = ''

  @Input()
  public cardDescription: string = ''

  public today: Date = new Date()
  
  @Input()
  public Id: string = '0'
}
