import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {GeneralService} from '../services/general.service';
import {MatDialog, MatSelect} from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') usernameInput: ElementRef;
  @ViewChild('password') passwordInput: ElementRef;
  user: any = {};
  send = false;
  inputError: any;
  txtError: any;

  matcher = new MyErrorStateMatcher();
  usernamee = new FormControl('', [Validators.required]);
  passwordd = new FormControl('', [Validators.required]);
  usernameTxtError: any = false;
  passwordTxtError: any = false;

  constructor(private gralService: GeneralService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  login(){
    if(this.send){
      return;
    }
    this.send = true;

    this.gralService.login(this.user).then((data) => {
      console.log(data['msg']);
      this.send = false;

      this.inputError= null;
      this.txtError = null;

      if(data['success'] == false) {
        this.inputError =  data['input'];
        this.txtError = data['msg'];

        if(data['input'] == 'username'){
          this.usernameInput.nativeElement.focus();
        }else{
          this.passwordInput.nativeElement.focus();
        }

      }


    }, (err) => {
      console.warn(err);
      this.send = false;
    });
  }

}
