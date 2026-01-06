import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FeedComponent } from './components/feed/feed.component';
import { RightbarComponent } from './components/rightbar/rightbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { FormsModule } from '@angular/forms';

// Import ng-icons
import { NgIconsModule } from '@ng-icons/core';
import {
  // Heroicons Outline
  heroHome,
  heroUsers,
  heroBriefcase,
  heroChatBubbleLeftRight,
  heroBell,
  heroMagnifyingGlass,
  heroEllipsisVertical,
  heroPencil,
  heroCamera,
  heroHeart,
  heroChatBubbleOvalLeft,
  heroShare,
  heroPaperAirplane,
  heroStar,
  heroMapPin,
  heroPhoto,
  heroClipboardDocumentList,
  heroCheckBadge,
  heroSparkles,
  heroFire,
  heroLightBulb,
  heroRocketLaunch,
  heroCog6Tooth,
  heroLanguage,
  heroQuestionMarkCircle,
  heroArrowRightOnRectangle,
  heroBars3,
  heroXMark,
  heroChevronDown,
  heroUserCircle,
  heroCalendar,
  heroEye,
  heroHandThumbUp,
  heroBookmark,
  heroArrowTrendingUp,
  heroShieldCheck,
  heroTrophy,
  heroGift,
  heroAcademicCap,
  heroWrench,
  heroPaintBrush,
  heroBeaker,
  heroSquares2x2,
  heroArrowRight,
  heroPlusCircle,
  heroMinusCircle,
  heroDocumentText,
  heroShoppingCart,
  // Heroicons Solid (for filled versions)
  heroHomeSolid,
  heroUsersSolid,
  heroBriefcaseSolid,
  heroChatBubbleLeftRightSolid,
  heroBellSolid,
  heroHeartSolid,
  heroStarSolid,
  heroCheckBadgeSolid,
  heroFireSolid,
  heroTrophySolid,
  heroGiftSolid
} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    FeedComponent,
    RightbarComponent,
    ProfileComponent,
    MyServicesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({
      // Heroicons Outline
      heroHome,
      heroUsers,
      heroBriefcase,
      heroChatBubbleLeftRight,
      heroBell,
      heroMagnifyingGlass,
      heroEllipsisVertical,
      heroPencil,
      heroCamera,
      heroHeart,
      heroChatBubbleOvalLeft,
      heroShare,
      heroPaperAirplane,
      heroStar,
      heroMapPin,
      heroPhoto,
      heroClipboardDocumentList,
      heroCheckBadge,
      heroSparkles,
      heroFire,
      heroLightBulb,
      heroRocketLaunch,
      heroCog6Tooth,
      heroLanguage,
      heroQuestionMarkCircle,
      heroArrowRightOnRectangle,
      heroBars3,
      heroXMark,
      heroChevronDown,
      heroUserCircle,
      heroCalendar,
      heroEye,
      heroHandThumbUp,
      heroBookmark,
      heroArrowTrendingUp,
      heroShieldCheck,
      heroTrophy,
      heroGift,
      heroAcademicCap,
      heroWrench,
      heroPaintBrush,
      heroBeaker,
      heroSquares2x2,
      heroArrowRight,
      heroPlusCircle,
      heroMinusCircle,
      heroDocumentText,
      heroShoppingCart,
      // Heroicons Solid
      heroHomeSolid,
      heroUsersSolid,
      heroBriefcaseSolid,
      heroChatBubbleLeftRightSolid,
      heroBellSolid,
      heroHeartSolid,
      heroStarSolid,
      heroCheckBadgeSolid,
      heroFireSolid,
      heroTrophySolid,
      heroGiftSolid
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
