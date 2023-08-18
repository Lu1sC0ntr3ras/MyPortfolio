interface IProject {
  name: string;
  image: string;
  text: JSX.Element; // Tipo de un fragmento o elemento JSX
  year: number[];
  technologies: string[];
}

export interface IProjects {
  lenguajes: string[];
  frontend: string[];
  backend: string[];
  projects: IProject[];
}

export const projects: IProjects = {
  lenguajes: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'],
  frontend: ['React', 'React Native', 'NextJs', 'Sass'],
  backend: ['Nest Js', 'Express Js', 'Node Js'],
  projects: [
    {
      name: 'Tekneo',
      image: 'tekneo_image',
      text: (
        <>
        </>
      ),
      year: [2022],
      technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Next Js', 'Sass', 'Node Js']
    },
    {
      name: 'Node Maker',
      image: 'node_maker_image',
      text: (
        <>
        </>
      ),
      year: [2022],
      technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Next Js', 'Sass', 'Node Js']
    },
    {
      name: 'Node Maker (Backend)',
      image: 'node_maker_image',
      text: (
        <>
        </>
      ),
      year: [2023],
      technologies: ['Nest Js', 'TypeScript', 'SQL', 'Node Js']
    },
    {
      name: 'Device manager',
      image: 'device_manager_image',
      text: (
        <>
        </>
      ),
      year: [2022],
      technologies: ['TypeScript', 'React Native', 'Node Js']
    }
  ]
};
