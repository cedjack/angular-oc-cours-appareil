import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import delayed = promise.delayed;

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any>();

  private appareils = [];
  // private appareils = [
  //   {
  //     id: 1,
  //     name: 'TV',
  //     status: false
  //   },
  //   {
  //     id: 2,
  //     name: 'PS4',
  //     status: true
  //   },
  //   {
  //     id: 3,
  //     name: 'Lampe',
  //     status: false
  //   }
  // ];

  constructor(private httpclient: HttpClient) {
  }

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

  addAppareil(name: string, status: boolean) {
    const appareilObject = {
      id: 0,
      name: '',
      status: false
    };

    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

    this.appareils.push(appareilObject);
    this.saveAppareilsToServerDatabase();
    this.emitAppareilSubject();
  }

  saveAppareilsToServerDatabase() {
    this.httpclient
      .put('https://angular-cours-oc-appareil.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('SUCCESS Enregistremement => DB');
        },
        (error) => {
          console.log('ERREUR Enregistremement => DB');
        }
      );
  }

  getAppareilsFromServerDatabase() {
    this.httpclient
      .get<any[]>('https://angular-cours-oc-appareil.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
          console.log('SUCCESS Récupération des données <= DB');
        },
        (error) => {
          console.log('ERREUR Récupération des données <= DB');
        }
      );
  }

}
