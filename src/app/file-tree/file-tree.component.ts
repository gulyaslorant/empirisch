import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { FILE_STRUCTURE, FileNode } from './file-structure';

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  type: 'folder' | 'file';
}

@Component({
  selector: 'app-file-tree',
  standalone: true,
  imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss'],
})
export class FileTreeComponent {
  private _transformer = (node: FileNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      type: node.type,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    // Nur den 'src'-Ordner und seine Unterordner anzeigen
    const srcFolder = FILE_STRUCTURE.find((folder) => folder.name === 'src');
    if (srcFolder) {
      this.dataSource.data = srcFolder.children || [];
    }
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
  isFile = (_: number, node: FlatNode) => node.type === 'file';
}
