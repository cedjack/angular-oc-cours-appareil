import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any>();

  private appareils = [
    {
      id: 1,
      name: 'TV',
      status: false
    },
    {
      id: 2,
      name: 'PS4',
      status: true
    },
    {
      id: 3,
      name: 'Lampe',
      status: false
    }
  ];

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = true;
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = false;
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = true;
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = false;
    this.emitAppareilSubject();
  }

}
