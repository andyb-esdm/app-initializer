import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IConfigModel } from './models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private httpClient: HttpClient) { }

  config: IConfigModel | null = null;

  load(): Promise<IConfigModel> {
    const config$ = this.httpClient.get<IConfigModel>('/assets/config.json')
    .pipe(
      tap(config => this.config = config)
    );
    return lastValueFrom(config$);
  }
}
