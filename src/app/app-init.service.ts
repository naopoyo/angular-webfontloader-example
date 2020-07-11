import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

export function AppInitFactory(appInit: AppInitService) {
  return () => appInit.init()
}

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  init() {
    this.initWebFont()
  }

  private initWebFont() {
    if (isPlatformServer(this.platformId)) {
      return
    }
    import('webfontloader').then((WebFont) => {
      WebFont.load({
        google: {
          families: ['Modak', 'M+PLUS+1p:400,900'],
        },
      })
    })
  }
}
