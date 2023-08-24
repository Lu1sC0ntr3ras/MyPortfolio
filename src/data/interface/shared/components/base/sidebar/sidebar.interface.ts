export interface ISidebarRightOption {
  text: string;
  route?: string;
}

export interface ISidebarLeftOption {
  text: string;
  route?: string;
  leftOptions?: string;
}

export interface ISidebarLeft {
  [x: string]: ISidebarLeftOption[];
}

export interface ISidebar {
  title: string;
  subtitle: string;
  leftOptions: ISidebarLeftOption[];
}

