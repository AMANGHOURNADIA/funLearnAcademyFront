import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-area',
  templateUrl: './contact-area.component.html',
  styleUrls: ['./contact-area.component.scss']
})
export class ContactAreaComponent implements OnInit {

  constructor(private messageService: MessageService ,private router: Router) { }

  ngOnInit(): void {
  }

    send() {
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'your message has been sent', life: 3000});
      this.router.navigate(['/home'])
    }
}
