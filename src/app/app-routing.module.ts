import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tab', pathMatch: 'full' },
  { path: 'tab', loadChildren: './tab/tab.module#TabPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'mystory', loadChildren: './mystory/mystory.module#MystoryPageModule' },
  // { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'events/:EventId', loadChildren: './home/event-detail/event-detail.module#EventDetailPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'createEvent', loadChildren: './home/create-event/create-event.module#CreateEventPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  // it must be set as child to edit in porfile page
  { path: 'edit', loadChildren: './profile/edit-profile/edit-profile.module#EditProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
