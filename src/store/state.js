import newSoundPlayer from '@/lib/metronome/SoundPlayer';

export default {
  bpm: 120,
  metronomeOn: false,
  optionsOpen: false,
  beatsPerMeasure: 4,
  currentBeat: 0,
  volume: 10,
  soundPlayer: newSoundPlayer()
};
