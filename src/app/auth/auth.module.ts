import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'

import {RegisterComponent} from './components/register/register.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import {PersistenceService} from '../shared/services/persistence.service'
import {LoginEffect} from './store/effects/login.effect'
import {LoginComponent} from './components/login/login.component'
import {GetCurrentUserEffectEffect} from './store/effects/getCurrentUser.effect'
import {UpdateCurrentUserEffect} from './store/effects/updateCurrentUser.effect'
import {LogoutEffect} from './store/effects/logout.effect'

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffectEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
