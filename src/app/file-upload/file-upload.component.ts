import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {



  uploadProgress: number = 0;
  uploadSuccess: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onFileSelected(event: { target: { files: any; }; }) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];

      // Upload the file to the server
      // ...
    }
  }

  uploadFile() {
    // Upload the file to the server
    // ...
  }
}
