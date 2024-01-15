import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TreesInfoService } from '../../services/trees-info.service';
import { Tree } from '../../interfaces/trees.interface';

@Component({
  selector: 'app-tree-details',
  standalone: true,
  imports: [],
  templateUrl: './tree-details.component.html',
})

export class TreeDetailsComponent implements OnInit {
  http = inject(HttpClient);
  treeId: number = 0;
  treeName: string = '';
  treeDetails: Tree | null = null;

  constructor(private route: ActivatedRoute, private treesInfoService: TreesInfoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.treeId = +params['id'];
      this.fetchTreeDetails();
    });
  }

  fetchTreeDetails() {
    this.treesInfoService.fetchTreeDetails(this.treeId).subscribe({
      next: (response: any) => {

        this.treeDetails = response[0];

        if (this.treeDetails) {
          this.treeName = this.treeDetails.nombre_arbol;
        }
        
      }
    })
  }
}
