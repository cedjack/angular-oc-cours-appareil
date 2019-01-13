import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: boolean;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    if (this.appareilStatus) {
      return 'allumé';
    } else {
      return 'éteint';
    }
  }

  getColorStatus() {
    if (this.appareilStatus) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
