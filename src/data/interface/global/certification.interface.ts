export interface ICertification {
  name: string;
  text: JSX.Element;
  image: JSX.Element;
  description: string;
}

export interface ICertifications {
  [x: string]: ICertification[];
}
