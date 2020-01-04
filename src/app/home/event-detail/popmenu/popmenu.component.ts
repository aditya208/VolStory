import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss'],
})
export class PopmenuComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(public popoverController: PopoverController, public alertController: AlertController, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {}
  async leave() {
    const leave = await this.alertController.create({
      header: 'Are you sure',
      message: 'Want to leave this event?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.router.navigateByUrl('/tab/home');
          }
        }, {
          text: 'No',
          role: 'cancel'
        }
      ]
    });

    await leave.present();
    this.popoverController.dismiss();
  }

async report() {
  const report = await this.alertController.create({
    header: 'Are you sure',
    message: 'Want to leave this event?',
    buttons: [
      {
        text: 'Yes',
        handler: () => {
          this.router.navigateByUrl('/tab/home');
        }
      }, {
        text: 'No',
        role: 'cancel'
      }
    ]
  });

  await report.present();
  this.popoverController.dismiss();
}
}
