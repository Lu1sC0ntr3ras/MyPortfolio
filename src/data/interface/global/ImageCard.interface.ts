
export interface ITextDescription {
  title: string;
  text: string;
  url?: string;
}

export interface ITextCard {
  [key: string]: ITextDescription;
}

export interface IImageCard {
  url: string;
  width: number;
  height: number;
}

export interface ICard {
  text: ITextCard;
  description: string;
  image: string;
}
