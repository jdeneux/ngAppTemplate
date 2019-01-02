/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppSideBarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import {AppSidebartabcontentComponent} from './app.sidebartabcontent.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';
import { ScrollPanelModule } from 'primeng/primeng';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule, ScrollPanelModule ],
        declarations: [ AppComponent,
                AppTopbarComponent,
                AppSideBarComponent,
                AppSidebartabcontentComponent,
                AppMenuComponent,
                AppSubMenuComponent,
                AppFooterComponent
            ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
