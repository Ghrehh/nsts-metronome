import { Howl } from 'howler';

const getFile = (accent) => {
  return accent ? '/static/sounds/accent-hit.mp3' : '/static/sounds/hit.mp3';
};

class Player {
  constructor(accentPlayer, player) {
    this.accentPlayer = accentPlayer;
    this.player = player;
  }

  playAccent() {
    this.accentPlayer.play();
  }

  play() {
    this.player.play();
  }

  changeVolume(volume) {
    const parsedVolume = (volume / 10);
    this.accentPlayer.volume(parsedVolume);
    this.player.volume(parsedVolume);
  }
}

export default (volume = 10) => {
  const parsedVolume = (volume / 10);

  return new Player(
    new Howl({ src: [getFile(true)], volume: parsedVolume }),
    new Howl({ src: [getFile()], volume: parsedVolume })
  );
};
