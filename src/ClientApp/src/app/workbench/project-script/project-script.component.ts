import { Component, OnInit } from '@angular/core';
import Quill from 'quill';


@Component({
  selector: 'app-project-script',
  templateUrl: './project-script.component.html',
  styleUrls: ['./project-script.component.css']
})
export class ProjectScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var FontAttributor = Quill.import('attributors/class/font');
    FontAttributor.whitelist = [
      'Courier New', 'Courier'
    ];
    Quill.register(FontAttributor, true);

  }


  quillModules = {
    formula: true,
    theme: "bubble",
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['formula'],
      ['image', 'code-block']
    ]
  };



  blurred = false
  focused = false

  created(event: any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: any) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }
}
