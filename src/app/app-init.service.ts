import { Injectable } from '@angular/core'
import * as WebFont from 'webfontloader'

export function AppInitFactory(appInit: AppInitService) {
  return () => appInit.init()
}

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor() {}

  init() {
    this.initWebFont()
  }

  private initWebFont() {
    WebFont.load({
      google: {
        families: ['Modak', 'M+PLUS+1p:400,900'],
      },
    })
  }
}
