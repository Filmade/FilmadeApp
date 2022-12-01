import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import Quill from 'quill';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', './project.component.sass']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



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

  focus($event : any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }

  blur($event : any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }
  
}
