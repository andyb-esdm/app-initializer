import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ConfigurationService } from './configuration.service';
import { AuthenticationService } from './authentication.service';
import { PermissionsService } from './permissions.service';
import { LayerConfigurationService } from './layer-configuration.service';

export function initializeApp(
  configurationService: ConfigurationService,
  authenticationService: AuthenticationService,
  permissionsService: PermissionsService,
  layerConfigurationService: LayerConfigurationService
): () => Promise<void> {
  return () => configurationService.load()
    .then(config => authenticationService.login(config.username, config.password))
    .then(() => {
      return new Promise((resolve, reject) => {
        const promises: Promise<any>[] = [];
        promises.push(permissionsService.loadPermissions());
        promises.push(layerConfigurationService.loadConfiguration());
        return Promise.all(promises)
          .then(() => resolve())
          .catch(() => reject());
      });
    });
}
@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigurationService, AuthenticationService, PermissionsService, LayerConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
