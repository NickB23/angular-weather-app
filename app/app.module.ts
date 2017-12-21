// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { WeatherComponent} from './weather-widget/component/weather.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, WeatherComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }