import player from './player';

export class Metronome {
  constructor(store, player) {
    this.player = player;
    this.state = store.state;
    this.store = store;

    this.on = false;
  }

  start() {
    this.on = true;
    this._play();
  }

  stop() {
    this.on = false;
  }

  _playSound() {
    this.state.currentBeat === 0 ? this.player.playAccent() : this.player.play();
  }

  _getNewBeat() {
    if (this.state.currentBeat >= this.state.beatsPerMeasure - 1) {
      return 0
    }

    return this.state.currentBeat + 1;
  }

  _changeBeat() {
    if (!this.on) return;

    this.store.commit({
      type: 'changeCurrentBeat',
      currentBeat: this._getNewBeat()
    })
  }

  _waitTime() {
    const minute = 60000;

    return ( minute / this.state.bpm)
  }

  _play() {
    if (this.on) this._playSound();

    if (this.on) {
      setTimeout(() => {
        this._changeBeat()
        this._play();
      }, this._waitTime());
    }
  }
}

export const newMetronome = (store) => {
  return new Metronome(store, new player);
};
