export interface IInformation {
  name: string;
  text: JSX.Element;
  image: JSX.Element;
  description: string;
}

export interface ICertifications {
  information: string;
  certification: IInformation[];
}

export interface ICertificationData {
  [x: string]: ICertifications;
}
