import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-area',
  templateUrl: './checkout-area.component.html',
  styleUrls: ['./checkout-area.component.scss']
})
export class CheckoutAreaComponent implements OnInit {

  showCbox : boolean = false;
  showShipBox : boolean = false;

  handleCbox () {
    this.showCbox = !this.showCbox;
  }

  handleShipBox () {
    this.showShipBox = !this.showShipBox;
  }
  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

    send() {
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'your message has been sent', life: 3000});
      this.router.navigate(['/home'])
    }
}
