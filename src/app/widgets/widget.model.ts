export interface Widget {
  text: string;
  btnText: string;
}

export interface Logger {
  logData: () => void;
}

export interface Toggler {
  isPlay: boolean;
  videoAction: string;
  toggleVideo: () => void;
}

export interface Reloadable extends Logger {
  reload: () => void;
}
