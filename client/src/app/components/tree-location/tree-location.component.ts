import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-tree-location',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './tree-location.component.html'
})

export class TreeLocationComponent implements OnInit {
  @Input() treeId: number = 0;
  treeLocation: any;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.fetchTreeLocation(this.treeId);
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  zoom = 4;
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }

  fetchTreeLocation(treeId: number) {
    this.locationService.fetchTreeLocation(treeId).subscribe((result: any) => {
      if (result && result.length > 0) {
        this.treeLocation = result[0];
        console.log(this.treeLocation)
        this.center = {
          lat: parseFloat(this.treeLocation.latitud),
          lng: parseFloat(this.treeLocation.longitud)
        };
      }
    });
  }
}
