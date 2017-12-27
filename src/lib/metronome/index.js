import player from './player';

export class Metronome {
  constructor(state, player) {
    this.player = player;
    this.state = state;

    this.on = false;
    this.currentBeat = 0;
  }

  start() {
    this.on = true;
    this._play();
  }

  stop() {
    this.on = false;
  }

  _playSound() {
    this.currentBeat === 0 ? this.player.playAccent() : this.player.play();
    this._changeBeat()
  }

  _changeBeat() {
    this.currentBeat += 1;

    if (this.currentBeat >= this.state.beatsPerMeasure) {
      this.currentBeat = 0;
    }
  }

  _waitTime() {
    const minute = 60000;

    return ( minute / this.state.bpm)
  }

  _play() {
    if (this.on) this._playSound();

    if (this.on) {
      setTimeout(() => {
        this._play();
      }, this._waitTime());
    }
  }
}

export const newMetronome = (state) => {
  return new Metronome(state, new player);
};
