import { Injectable } from '@angular/core';
import { lastValueFrom, of, delay } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayerConfigurationService {

  layerConfiguration: string[] = [];

  constructor() { }

  loadConfiguration(): Promise<string[]> {
    const layerConfiguration$ = of(['layer-1', 'layer-2', 'layer-3', 'layer-4']).pipe(
      tap(layerConfiguration => this.layerConfiguration = layerConfiguration),
      delay(2000)
    );
    return lastValueFrom(layerConfiguration$);
  }
}
