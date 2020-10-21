import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {PersonalComponent} from './personal/personal.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PersonalService} from '../services/personal-service';

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientModule
            ],
            declarations: [
                AppComponent,
                PersonalComponent,
            ],
            providers: [PersonalService]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
