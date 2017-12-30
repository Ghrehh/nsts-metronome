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
}

export default (store) => {
  const volume = (store.state.volume / 10);

  return new Player(
    new Howl({ src: [getFile(true)], volume }),
    new Howl({ src: [getFile()], volume })
  );
};
