export interface FileNode {
  name: string;
  type: 'folder' | 'file';
  children?: FileNode[];
}

export const FILE_STRUCTURE: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'app',
        type: 'folder',
        children: [
          { name: 'app.component.html', type: 'file' },
          { name: 'app.component.ts', type: 'file' },
          { name: 'app.module.ts', type: 'file' },
          { name: 'app-routing.module.ts', type: 'file' },
          {
            name: 'components',
            type: 'folder',
            children: [
              {
                name: 'header',
                type: 'folder',
                children: [
                  { name: 'header.component.html', type: 'file' },
                  { name: 'header.component.ts', type: 'file' },
                  { name: 'header.component.css', type: 'file' },
                ],
              },
              {
                name: 'footer',
                type: 'folder',
                children: [
                  { name: 'footer.component.html', type: 'file' },
                  { name: 'footer.component.ts', type: 'file' },
                  { name: 'footer.component.css', type: 'file' },
                ],
              },
            ],
          },
          {
            name: 'services',
            type: 'folder',
            children: [{ name: 'data.service.ts', type: 'file' }],
          },
          {
            name: 'models',
            type: 'folder',
            children: [{ name: 'user.model.ts', type: 'file' }],
          },
        ],
      },
      { name: 'index.html', type: 'file' },
      { name: 'main.ts', type: 'file' },
      { name: 'polyfills.ts', type: 'file' },
      { name: 'styles.css', type: 'file' },
    ],
  },
];
