export interface CardWidget {
  text: string;
  btnText: string;
  isLoading: boolean;
  reload: () => void;
}

export interface Logger {
  logData: () => void;
}
