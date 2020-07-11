import { Component, OnInit } from '@angular/core'
import * as WebFont from 'webfontloader'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    WebFont.load({
      google: {
        families: ['Modak', 'M+PLUS+1p:400,900'],
      },
    })
  }
}
