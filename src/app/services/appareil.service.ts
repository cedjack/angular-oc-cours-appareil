export class AppareilService {

  appareils = [
    {
      name: 'TV',
      status: false
    },
    {
      name: 'PS4',
      status: true
    },
    {
      name: 'Lampe',
      status: false
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils){
      appareil.status = true;
    }
  }

 switchOffAll() {
    for (let appareil of this.appareils){
      appareil.status = false;
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = true;
  }

  switchOffOne(index: number) {
    this.appareils[index].status = false;
  }

}
