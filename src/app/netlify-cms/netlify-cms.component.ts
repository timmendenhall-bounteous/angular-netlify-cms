import { Component, OnInit } from '@angular/core';
import CMS from 'netlify-cms';

@Component({
  selector: 'app-netlify-cms',
  templateUrl: './netlify-cms.component.html',
  styleUrls: ['./netlify-cms.component.sass']
})
export class NetlifyCmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Now the registry is available via the CMS object.
    // CMS.registerPreviewTemplate('my-template', MyTemplate);

  }

}
