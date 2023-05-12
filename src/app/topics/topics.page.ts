import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
//import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.page.html',
  styleUrls: ['topics.page.scss'],
})


export class TopicsPage {

  topics: string[];
  
  constructor(public alertController: AlertController, public route: Router) {
    
    this.topics = [
      'Lorenzo says: "What do you think about asymmetric competitive games?"',
      'Paulo says: "What are the best games to play with my wife and children?"',
      'Felipe says: "Im looking for quick and simple games to play at house parties."'
    ];
    
    this.presentAlert();

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      //subHeader: 'Subtitle',
      message: "Sending topics and individual topic pages aren't available yet!",
      buttons: ['OK']
    });

    await alert.present();
  }

  public getTopic(newTopic: string) {
    this.route.navigate(['/topics']);
  }

}
