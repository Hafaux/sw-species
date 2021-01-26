import EventEmitter from 'eventemitter3';

const EVENTS = {
  SPECIES_CREATED: 'species_created',
};

export default class Species extends EventEmitter {
  constructor() {
    super();

    this.name = null;
    this.classification = null;
  }

  static get events() {
    return EVENTS;
  }

  async init(url = 'https://swapi.dev/api/species/1/') {
    const response = await fetch(url);
    const data = await response.json();

    this.name = data.name;
    this.classification = data.classification;

    this.emit(Species.events.SPECIES_CREATED);
  }
}
