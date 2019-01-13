export class AppareilService {

  appareils = [
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
