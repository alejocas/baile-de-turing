import { Component, ElementRef,ViewChild,ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from '../login/shared/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  constructor(private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private loginService:LoginService){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  

  @ViewChild('sideNav') sideNav:ElementRef
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  togleMenu(){

  }

  logOut(){
    window.localStorage.removeItem("auth")
    this.router.navigate(["/login"]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
