import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DraftsComponent } from './drafts/drafts.component';

const routes: Routes = [

  { path: 'inbox', component: InboxComponent},
  { path: 'sent', component: SentComponent},
  { path: 'drafts', component: DraftsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
