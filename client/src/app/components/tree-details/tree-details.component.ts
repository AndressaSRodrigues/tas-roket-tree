import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TreesInfoService } from '../../services/trees-info.service';
import { Tree } from '../../interfaces/trees.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-tree-details',
  standalone: true,
  imports: [],
  templateUrl: './tree-details.component.html',
})

export class TreeDetailsComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription =new Subscription();
  treeId: number = 0;
  treeName: string = '';
  treeDetails: Tree | null = null;
  treePhotosMap: Map<number, any[]> = new Map<number, any[]>();

  constructor(private route: ActivatedRoute, private treesInfoService: TreesInfoService, private photosService: PhotosService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.treeId = +params['id'];
      this.fetchTreeDetails();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  fetchTreeDetails() {
    this.treesInfoService.fetchTreeDetails(this.treeId).subscribe({
      next: (response: any) => {

        this.treeDetails = response[0];

        if (this.treeDetails) {
          this.treeName = this.treeDetails.nombre_arbol;
          this.fetchPhotosForTrees();
        }

      }
    })
  }

  fetchPhotosForTrees() {
    this.photosService.fetchPhotosForTree(this.treeId).subscribe({
      next: (photos: any) => {
        this.treePhotosMap.set(this.treeId, photos.slice(0, 1));
      },
      error: (error) => {
        console.error(`Error fetching photos for tree ${this.treeName}:`, error);
      }
    });
  }
}
