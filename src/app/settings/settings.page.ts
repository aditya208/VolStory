import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  Vibrate = false;
  PeopleJoiningEvent =false;
  PeopleSendingEvent =false;
  EventInvite=false;
  UpdateOnEvent=false;
  PeopleInterest=false;
  PeopleComment=false;
  FriendJoining=false;
  SomeoneFollow=false;
  constructor() { }

  ngOnInit() {
  }
onVibrate(){
  this.Vibrate = ! this.Vibrate;
}
onPeopleJoiningEvent() {
  this.PeopleJoiningEvent= !this.PeopleJoiningEvent;
}
onPeopleSendingEvent() {
  this.PeopleSendingEvent= ! this.PeopleSendingEvent;
}
onEventInvite() {
  this.EventInvite =!this.EventInvite;
}
onUpdateOnEvent() {
  this.UpdateOnEvent = !this.UpdateOnEvent;
}
onPeopleInterest() {
  this.PeopleInterest= !this.PeopleInterest;
}
onPeopleComment() {
  this.PeopleComment= !this.PeopleComment;
}
onFriendJoining() {
  this.FriendJoining= ! this.FriendJoining;
}
onSomeoneFollow() {
  this.SomeoneFollow= !this.SomeoneFollow;
}
}
