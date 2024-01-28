import { ExtraOptions, InMemoryScrollingFeature, Routes, withInMemoryScrolling } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', title: 'Home | Brand Name', component: HomeComponent }
];

const scrollConfig: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};

export const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);
