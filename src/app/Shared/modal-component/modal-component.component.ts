import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
})
export class ModalComponentComponent implements OnInit {
  @Input() title: string;
  @Input() isOpen = false;

  @Output() editModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close(data = null) {
    if (data) {
      this.editModal.emit(data);

      return;
    }
    this.editModal.emit();
  }
}
