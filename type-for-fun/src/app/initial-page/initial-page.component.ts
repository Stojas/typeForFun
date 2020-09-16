import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  
  change = 1;
  currentSlide: Slide;

  slides = [
    {
      title: "Po prostu typuj!",
      desc: "Typuj wyniki spotkań sportowych z różnych dyscyplin i zdobywaj punkty oraz aprobatę innych użytkowników!",
      img: "../../assets/imgs/ball.png",
      index: 0
    },{
      title: "Ponawiaj poprawne przewidywania",
      desc: "Próbuj poprawnie przewidywać poprawne rezultaty spotkań sportowych i zbieraj punkty",
      img: "../../assets/imgs/arrow2.png",
      index: 1
    },
    ,{
      title: "Punktow moc!",
      desc: " Po uzbieraniu odpowiedniej ilości punktów przeznaczaj je na wybrane nagrody!",
      img: "../../assets/imgs/done2.png",
      index: 2
    },
    ,{
      title: "Zarabiaj!",
      desc: "Oglądaj typy innych użytkowników, analizuj i obstawiaj u swojego bukmachera!",
      img: "../../assets/imgs/money.png",
      index: 3
    }
  ]

  constructor() {}

  ngOnInit() {
    this.currentSlide = this.slides[0];
  }

  changeSlide(){
    if(this.change == 0){
      this.change = 1;
    }else if(this.change == 1){
      this.change = 2;
    }else if(this.change == 2){
      this.change = 3;
    }else if(this.change == 3){
      this.change = 4;
    }else{
      this.change = 0;
    }
  }
}

export interface Slide{
  title: string,
  desc: string,
  img: string,
  index: number
}
