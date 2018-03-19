import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../services/general.service';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-new-register-solo',
  templateUrl: './new-register-solo.component.html',
  styleUrls: ['./new-register-solo.component.scss']
})
export class NewRegisterSoloComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  user: any = {};
  send = false;

  constructor(private gralService: GeneralService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  save() {
    console.log(this.user);
    if(this.send){
      return;
    }
    this.send = true;

    this.gralService.registerSolo(this.user).then((data) => {
      console.log(data['msg']);
      this.send = false;

      if(data['success'] == false) {
        const dialogRef = this.dialog.open(ModalConfirmComponent, {
          minWidth: '50%',
          /*position: {
            top: '6%'
          },*/
          data: { type: 'warning', content: data['msg'] }
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result){
            console.log('The dialog was closed', result);
          }
        });
      }


    }, (err) => {
      console.warn(err);
      this.send = false;
    });
  }
}
