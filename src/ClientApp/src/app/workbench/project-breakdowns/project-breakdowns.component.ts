import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-breakdowns',
  templateUrl: './project-breakdowns.component.html',
  styleUrls: ['./project-breakdowns.component.scss']
})
export class ProjectBreakdownsComponent implements OnInit {
  text: string = "Главный герой - молодой фотожурналист Джек. Он прибывает в небольшой городок на границе с Россией, чтобы снять серию фотографий для журнала. Но в городе происходит странное - люди исчезают без следа. Джек начинает расследование и обнаруживает, что в городе происходят таинственные эксперименты над людьми со стороны неизвестной организации. Джек встречает местную журналистку Марию, которая пытается раскрыть тайну исчезновения людей. Вместе они начинают искать доказательства и обнаруживают, что организация использует новейшую технологию для создания невидимых людей и использует их для своих злонамеренных целей.";

  textAsArray = this.text.split(' ');

  barLeft = 200;
  barTop = 200;

  barIsVisible = false;

  activeIndex = 0;
  activeWord = this.textAsArray[this.activeIndex];
  selectedType = "actors";
  breakDowns: Array<string> = [];

  breakDownTypes = [
    "Актер",
    "Сцена",
    "Оборудование",
    "Реквизит",
    "Другое"
  ]

  constructor() { }

  ngOnInit(): void {

  }
  openBar(event: MouseEvent, i: number): void {
    this.activeIndex = i;

    this.activeWord = this.textAsArray[this.activeIndex];
    this.barIsVisible = true;
    this.barLeft = event.x - 280;
    this.barTop = event.y + 10;
    this.selectedType = undefined;

    if(this.breakDowns[i]) {
      this.selectedType = this.breakDowns[i];
    }
  }
  handleChange(event: any) {
    this.breakDowns[this.activeIndex] = event.value;
  }
}


