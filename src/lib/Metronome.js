import { Howl } from 'howler';

const getFile = (accent) => {
 return accent ? '/static/sounds/accent-hit.mp3' : '/static/sounds/hit.mp3';
};

export default class Metronome {
  constructor({ bpm, timeSignatures }) {
    this.player = new Howl({ src: [getFile()] });
    this.timeSignatures = timeSignatures;
    this.bpm = bpm;

    this.on = false;

    this.currentTimeSignatureIndex = 0;
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
    this.player.play();
  }

  currentTimeSignature() {
    return this.timesignatures[this.currentTimeSignatureIndex];
  }

  _changeBeat() {
    if (this.currentBeat >= this.currentTimeSignature().denominator) {
      this.currentBeat = 0;
    }

    this.currentBeat += 1;
  }

  _waitTime() {
    const minute = 60000;
    return ( minute / this.bpm)
  }

  _play() {
    if (this.on) this._playSound();

    const wait = time => new Promise((resolve) => setTimeout(resolve, time));

    if (this.on) {
      const promise = wait(this._waitTime());
      promise.then(() => { if (this.on) this._play() });
    }
  }
}
