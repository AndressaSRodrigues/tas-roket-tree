import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';

interface Tree {
  arbol_id: number,
  nombre_arbol: string,
  ubicacion_id: number,
  created_at: string,
}

@Component({
  selector: 'app-display-trees',
  standalone: true,
  imports: [],
  templateUrl: './display-trees.component.html',
  styleUrl: './display-trees.component.scss'
})

export class DisplayTreesComponent implements OnInit {
  http = inject(HttpClient);
  trees: Tree[] = [];
  treePhotosMap: Map<number, any[]> = new Map<number, any[]>();

  ngOnInit(): void {
    this.fetchTrees();
  };

  fetchTrees() {
    this.http.get('http://localhost:3000/')
      .subscribe(
        (trees: any) => {
          this.trees = trees;
          this.fetchPhotosForTrees();
        },
        (error) => {
          console.error('Error fetching trees:', error);
        }
      );
  }
  
  fetchPhotosForTrees() {
    this.trees.forEach(tree => {
      this.http.get(`http://localhost:3000/photos/${tree.arbol_id}`)
        .subscribe(
          (photos: any) => {
            this.treePhotosMap.set(tree.arbol_id, photos);
          },
          (error) => {
            console.error(`Error fetching photos for tree ${tree.arbol_id}:`, error);
          }
        );
    });
  }
}
