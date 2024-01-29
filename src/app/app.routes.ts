import { ExtraOptions, InMemoryScrollingFeature, Routes, withInMemoryScrolling } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', title: 'Home | Brand Name', component: HomeComponent },
    { path: 'privacy-policy', title: 'Privacy Policy | Brand Name', component: PrivacyPolicyComponent },
    { path: '**', title: 'Page Not Found | Brand Name', component: PageNotFoundComponent }
];

const scrollConfig: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};

export const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);
