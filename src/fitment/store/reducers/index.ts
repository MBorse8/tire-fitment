import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromVehicle from "./vehicle.reducer";

export interface FitmentState {
  vehicle: fromVehicle.VehicleState;
}

export const reducers: ActionReducerMap<FitmentState, any> = {
  vehicle: fromVehicle.reducer
};

export const vehicleSelector = createFeatureSelector<fromVehicle.VehicleState>(
  "fitment"
);

export const getYears = createSelector(vehicleSelector,(state: any) => {
  return state.vehicle.years;
});

export const getMakes = createSelector(vehicleSelector,(state: any) => {
  return state.vehicle.makes;
});

export const getModels = createSelector(vehicleSelector,(state: any) => {
  return state.vehicle.models;
});

export const getTrims = createSelector(vehicleSelector,(state: any) => {
  return state.vehicle.trims;
});

export const getLoading = createSelector(vehicleSelector, fromVehicle.isShowing);

