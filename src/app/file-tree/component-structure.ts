export interface ComponentNode {
  name: string;
  children?: ComponentNode[];
}

export const COMPONENT_STRUCTURE: ComponentNode[] = [
  {
    name: 'AppComponent',
    children: [
      {
        name: 'HeaderComponent',
        children: [],
      },
      {
        name: 'FooterComponent',
        children: [],
      },
      {
        name: 'MainComponent',
        children: [
          {
            name: 'SidebarComponent',
            children: [],
          },
          {
            name: 'ContentComponent',
            children: [],
          },
        ],
      },
    ],
  },
];
