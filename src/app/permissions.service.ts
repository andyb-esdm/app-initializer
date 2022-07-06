import { Injectable } from '@angular/core';
import { lastValueFrom, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  permissions: string[] = [];

  constructor() { }

  loadPermissions(): Promise<string[]> {
    const permissions$ = of(['administrator', 'cmsi-web-view', 'edit-feature']).pipe(
      tap(permissions => this.permissions = permissions)
    );
    return lastValueFrom(permissions$);
  }
}
