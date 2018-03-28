import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-base-sis',
  templateUrl: './upload-base-sis.component.html',
  styleUrls: ['./upload-base-sis.component.scss']
})
export class UploadBaseSisComponent implements OnInit {
  newdata: any = {};

  constructor() {
    this.newdata.type = '0';
  }

  ngOnInit() {
  }

  previewImage(ev){
    console.log(ev.srcElement.files[0]);
    this.newdata.filename = ev.srcElement.files[0].name;
  }

}
