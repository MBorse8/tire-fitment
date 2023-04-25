import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { VehicleService } from "../vehicle.service";
import { LOAD_MAKES, LOAD_MAKES_FAIL, LOAD_MAKES_SUCCESS, LOAD_YEARS, SET_YEARS, LOAD_MODELS, LOAD_MODELS_FAIL, LOAD_MODELS_SUCCESS, LOAD_TRIMS, LOAD_TRIMS_FAIL, LOAD_TRIMS_SUCCESS, LOAD_TYRES, LOAD_TYRES_SUCCESS, LOAD_YEARS_FAIL, LOAD_TYRES_FAIL } from "../actions";

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private vehicleService: VehicleService
  ) {}
    
  loadYears$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_YEARS),
      switchMap(() =>
        this.vehicleService.getYears().pipe(
          map(response => response?.year ?? []),
          map(years => ({
            type: SET_YEARS,
            payload: years
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadMakes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_MAKES),
      switchMap((year) =>
      this.vehicleService.getMakes(year).pipe(
        map(response => response?.make ?? []),
        map(makes => ({
          type: LOAD_MAKES_SUCCESS,
          payload: makes
        })),
        catchError(() => of({type: LOAD_MAKES_FAIL}))
       )
      )
    )
  );


  loadModels$ = createEffect(() => 
    this.actions$.pipe(
      ofType(LOAD_MODELS),
      switchMap(({year, make}) => 
        this.vehicleService.getModels(year, make).pipe(
          map(response => response?.model ?? []),
          map(models => ({
            type: LOAD_MODELS_SUCCESS,
            payload: models
          })),
          catchError(() => of({type: LOAD_MODELS_FAIL}))
        )
      )
    )
  );

  loadTrims$ = createEffect(() => 
    this.actions$.pipe(
      ofType(LOAD_TRIMS),
      switchMap(({year, make, model}) => 
        this.vehicleService.getTrims(year, make, model).pipe(
          map(response => response?.trim ?? []),
          map(trims => ({
            type: LOAD_TRIMS_SUCCESS,
            payload: trims
          })),
          catchError(() => of({type: LOAD_TRIMS_FAIL}))
        )
      )
    )
  );

}
