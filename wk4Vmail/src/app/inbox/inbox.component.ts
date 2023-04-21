import { Component } from '@angular/core';
import { Inbox } from '../interfaces/inbox.interface';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent {

  emails:Inbox[] = [

    {
      from: 'apple@icloud.com',
      subject: 'Verify your account',
      message: 'Hello, You have recently logged in to your account. Please verify',
      datetime: '14-Apr-2023 10:00:00 AM PST',
      starred: false,
      checked: false
    },
    {
      from: 'amazon@prime.com',
      subject: 'Renew your subscription',
      message: 'Hi, your subscription is ending soon. Please renew',
      datetime: '12-Jan-2023 11:00:00 PM PST',
      starred: false,
      checked: false
    },
    {
      from: 'sales@tesla.com',
      subject: 'Your car is ready for pickup',
      message: 'Congratulation. Your Tesla has arrived!',
      datetime: '01-Mar-2023 09:00:00 AM PST',
      starred: false,
      checked: true
    },
    {
      from:'new@vanarts.com',
      subject: 'test',
      message: 'test',
      datetime: '04-04-2023 10:00:00 AM PST',
      starred: true,
      checked: true
    },
    {
      from: 'amazon@prime.com',
      subject: 'Renew your subscription',
      message: 'Hi, your subscription is ending soon. Please renew',
      datetime: '12-Jan-2023 11:00:00 PM PST',
      starred: true,
      checked: true
    },



  ];

}
