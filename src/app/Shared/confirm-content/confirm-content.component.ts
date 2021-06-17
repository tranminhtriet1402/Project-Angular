import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-content',
  templateUrl: './confirm-content.component.html',
  styleUrls: ['./confirm-content.component.scss'],
})
export class ConfirmContentComponent implements OnInit {
  @Input() title: string;
  @Output() confirm = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
