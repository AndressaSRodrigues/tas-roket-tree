import { Component, OnInit, inject } from '@angular/core';
import { TreesInfoService } from '../../services/trees-info.service';
import { PhotosService } from '../../services/photos.service';
import { Tree } from '../../interfaces/trees.interface';

@Component({
  selector: 'app-display-trees',
  standalone: true,
  imports: [],
  templateUrl: './display-trees.component.html',
})

export class DisplayTreesComponent implements OnInit {
  trees: Tree[] = [];
  treePhotosMap: Map<number, any[]> = new Map<number, any[]>();

  constructor(private treesInfoService: TreesInfoService, private photosService: PhotosService) { }

  ngOnInit(): void {
    this.fetchTrees();
  };

  fetchTrees() {
    this.treesInfoService.fetchTrees().subscribe({
      next: (response: Tree[]) => {
        this.trees = response;
        this.fetchPhotosForTrees();
      },
      error: (error) => {
        console.error('Error fetching trees:', error);
      }
    });
  }

  fetchPhotosForTrees() {
    this.trees.forEach(tree => {
      this.photosService.fetchPhotosForTree(tree.arbol_id).subscribe({
        next: (photos: any) => {
          this.treePhotosMap.set(tree.arbol_id, photos.slice(0, 1));
        },
        error: (error) => {
          console.error(`Error fetching photos for tree ${tree.arbol_id}:`, error);
        }
      });
    });
  }
}
