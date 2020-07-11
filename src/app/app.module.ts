import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'

import { AppComponent } from './app.component'
import { AppInitService, AppInitFactory } from './app-init.service'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitFactory,
      multi: true,
      deps: [AppInitService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
