import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-register-promotion',
  templateUrl: './new-register-promotion.component.html',
  styleUrls: ['./new-register-promotion.component.scss']
})
export class NewRegisterPromotionComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
