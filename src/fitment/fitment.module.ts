import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";
import { VehicleEffects } from "./store/effects/vehicle.effects";
import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { VehicleService } from "./store/vehicle.service";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("fitment", reducers),
    EffectsModule.forFeature([VehicleEffects]),
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent],
  providers: [VehicleService]
})
export class FitmentModule {}
