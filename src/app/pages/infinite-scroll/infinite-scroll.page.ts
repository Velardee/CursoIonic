import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    console.log('Cargando siguiente');

    setTimeout(() => {

      if(this.data.length > 50){
        event.target.complete();
        this.infitniteScroll.disabled = true;
        return;
      }

      const nuevoarr = Array(20);
      this.data.push(...nuevoarr );
      event.target.complete();
    }, 1000 );
  }
}
