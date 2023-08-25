interface ICertification {
  name: string;
  text: JSX.Element;
}

interface ICertifications {
  [x: string] : ICertification[];
}

export const certification: ICertifications = {
  uninorte: [
    {
      name: 'System enginer',
      text: <></>
    }
  ],
  english: [],
  udemy: []
};
