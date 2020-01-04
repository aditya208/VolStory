import { Component, OnInit } from '@angular/core';
import { EventsService } from '../home/events.service';
import {Event} from '../home/event.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
phone = true;
website = false;
email = false;

showEh = false;
showEv = false;
showskll = false;
showInterst = false;
following = false;


events: Event[] = this.eventService.getAllEvents();
  constructor(private eventService: EventsService) {}

  ngOnInit() {
  }
phoneToggle() {
  this.phone = !this.phone;
}

websiteToggle() {
  this.website = !this.website;
}

emailToggle() {
  this.email = !this.email;
}
// Toggle lists

showEV() {
  this.showEv = !this.showEv;
}

showEH() {
  this.showEh = !this.showEh;
}

showSkill() {
  this.showskll = !this.showskll;
}

showInterest() {
  this.showInterst = !this.showInterst;
}

follow() {
  this.following = !this.following;
}
}
