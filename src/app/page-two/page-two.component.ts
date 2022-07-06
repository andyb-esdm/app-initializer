import { Component, OnInit } from '@angular/core';
import { LayerConfigurationService } from '../layer-configuration.service';
import { PermissionsService } from '../permissions.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  permissions = this.permissionsService.permissions;
  layerConfiguration = this.layerConfigService.layerConfiguration;

  constructor(private permissionsService: PermissionsService, private layerConfigService: LayerConfigurationService) { }

  ngOnInit(): void {
  }

}
