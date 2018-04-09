import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit {
  location: Location;
  constructor(location: Location) {
    this.location = location;
  }
  ngOnInit() {

    var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      var $main_panel = $('.main-panel');
      $main_panel.perfectScrollbar();
    }
    
  }
  public isMap() {
    // console.log(this.location.prepareExternalUrl(this.location.path()));
    if (this.location.prepareExternalUrl(this.location.path()) == '/maps/fullscreen') {
      return true;
    }
    else {
      return false;
    }
  }
}
