import { Component } from '@angular/core';
import { TopicsPage } from '../topics/topics.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [TopicsPage],
})

export class HomePage {

  constructor(private topics: TopicsPage) {
  
    

  }
  
  /*
  public sendTopic(){
    let btn: HTMLElement | null;
    btn = document.getElementById('sendButton');
    btn?.onclick?.apply(btn);
  }
*/
  

}
