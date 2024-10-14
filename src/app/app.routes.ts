import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { RegisterComponent } from '../pages/auth/register/register.component';
import { ForgetPasswordComponent } from '../pages/auth/forget-password/forget-password.component';
import { LayoutComponent } from '../layouts/layout/layout.component';
import { MarketplaceComponent } from '../pages/marketplace/marketplace.component';
import { MessageComponent } from '../pages/message/message.component';
import { SupportComponent } from '../pages/support/support.component';
import { NotificationComponent } from '../pages/notification/notification.component';
import { TermsComponent } from '../pages/terms/terms.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { AccountComponent } from '../pages/account/account.component';
import { SellingComponent } from '../pages/account/selling/selling.component';
import { BuyingComponent } from '../pages/account/buying/buying.component';
import { SettingComponent } from '../pages/account/setting/setting.component';
import { DetailComponent } from '../pages/account/detail/detail.component';
import { LibraryComponent } from '../pages/account/library/library.component';
import { InfoComponent } from '../pages/profile/info/info.component';
import { PostsComponent } from '../pages/profile/posts/posts.component';
import { FollowersComponent } from '../pages/profile/followers/followers.component';
import { FollowingsComponent } from '../pages/profile/followings/followings.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';
import { ProductFormComponent } from '../pages/account/selling/product-form/product-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'marketplace', component: MarketplaceComponent },
      { path: 'message', component: MessageComponent },
      { path: 'support', component: SupportComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'terms', component: TermsComponent }, // Changed to 'terms'
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'faq', component: FaqComponent },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        children: [
          { path: 'info', component: InfoComponent },
          { path: 'posts', component: PostsComponent },
          { path: 'followers', component: FollowersComponent },
          { path: 'followings', component: FollowingsComponent },
        ],
      },
      {
        path: 'account',
        component: AccountComponent,
        children: [
          { path: 'info', component: DetailComponent },
          { path: 'library', component: LibraryComponent },
          { path: 'selling', component: SellingComponent },
          { path: 'selling/new', component: ProductFormComponent },
          { path: 'buying', component: BuyingComponent },
          { path: 'setting', component: SettingComponent },
        ],
      },
    ],
    // canActivate: [AuthGuard], // Uncommented for protection
  },
  // Authentication routes
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [GuestGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [GuestGuard],
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    // canActivate: [GuestGuard],
  },
  // Wildcard route for 404
  {
    path: '**',
    redirectTo: '', // Redirect to home or a NotFoundComponent
  },
];
