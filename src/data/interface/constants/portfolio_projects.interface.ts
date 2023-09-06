interface IProject {
  name: string;
  image: string;
  text: JSX.Element; // Tipo de un fragmento o elemento JSX
  year: number;
  technologies: string[];
}

export interface IProjects {
  lenguajes: string[];
  frontend: string[];
  backend: string[];
  projects: IProject[];
}
