import { IProjects } from '../interface/constants/portfolio_projects.interface';

export const projects: IProjects = {
  lenguajes: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'],
  frontend: ['React', 'React Native', 'NextJs', 'Sass'],
  backend: ['Nest Js', 'Express Js', 'Node Js'],
  projects: [
    {
      name: 'Tekneo',
      image: 'tekneo_image',
      text: (
        <p className="fs-16">
          {`
            Home automation project, to manage the control and access of people to a work 
            environment, with levels, floors, and doors, access can be controlled with QR 
            codes, and face reader.
            `}
        </p>
      ),
      year: 2022,
      technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Next Js', 'Sass', 'Node Js']
    },
    {
      name: 'Node Maker (Frontend)',
      image: 'node_maker_image',
      text: (
        <>
          <p className="fs-16">
            {`
              An application to create connections between KNX and MQTT sources, we can 
              connect them with routing and data filters, save data in InfluxDb databases, 
              monitoring the data that passes between each of the sources.
            `}
          </p>
        </>
      ),
      year: 2022,
      technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Next Js', 'Sass', 'Node Js']
    },
    {
      name: 'Node Maker (Backend)',
      image: 'node_maker_image',
      text: (
        <>
          <p className="fs-16">
            {`
            Application in charge of handling the data and making the connections and movement 
            of data between the KNX and MQTT sources, it is in charge of saving the data that 
            we want in the non-relational InfluxDB database, and sends this data to the Frontend 
            applications.
            `}
          </p>
        </>
      ),
      year: 2023,
      technologies: ['Nest Js', 'TypeScript', 'SQL', 'Node Js']
    },
    {
      name: 'Device manager',
      image: 'device_manager_image',
      text: (
        <>
          <p className="fs-16">
            {`
            Mobile application for managing home automation equipment, access control through 
            doors with RFID cards, temperature control, air conditioning management and 
            temperature and presence sensors with different types of frequencies.
            `}
          </p>
        </>
      ),
      year: 2022,
      technologies: ['TypeScript', 'React Native', 'Node Js']
    }
  ]
};
