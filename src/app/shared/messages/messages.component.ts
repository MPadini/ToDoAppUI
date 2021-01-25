import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

interface MessageData {
  title: string;
  body: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: MessageData) { }

  ngOnInit() {
  }

}
