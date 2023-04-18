import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = ''
  contentTitle: string = ''
  contentDescription: string = ''
  private id: string | null = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { paramMap } = this.route
    
    paramMap.subscribe(value => {
      this.id = value.get('id')
    })

    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    const { 
      id: idResult, 
      title, 
      description, 
      photoCover 
    } = result
    
    if(!idResult) {
      return this.contentTitle = 'Notícia não encontrada!'
    }

    this.contentTitle = title
    this.contentDescription = description
    this.photoCover = photoCover
    
    return result
  }
}
