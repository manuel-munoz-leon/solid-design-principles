export interface Widget {
  id: number;
  logData: () => void;
}

export interface Toggler {
  isPlay: boolean;
  toggleVideo: () => void;
}
