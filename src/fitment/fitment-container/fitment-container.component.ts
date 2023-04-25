import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoadYears, LoadMakes, LoadModels, LoadTrims } from "../store/actions";
import * as fromReducers from "../store/reducers";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$!: Observable<any>;
  makes$!: Observable<any>;
  models$!: Observable<any>;
  selectedYear!: string;
  trims$!: Observable<any>;
  selectedMake!: string;
  selectedModel!: string;
  // tyres$!: Observable<any>;
  loading$!: Observable<boolean>;

  constructor(private store: Store<fromReducers.FitmentState>) {}

  ngOnInit() {

    this.getYears();

    this.years$ = this.store.select(fromReducers.getYears);

    this.makes$ = this.store.select(fromReducers.getMakes);

    this.models$ = this.store.select(fromReducers.getModels);

    this.trims$ = this.store.select(fromReducers.getTrims);
    
    this.loading$ = this.store.select(fromReducers.getLoading);
  }

  getYears() {
    this.store.dispatch(new LoadYears());
  }

  getVehicleMake(year: any) {
    this.selectedYear = year;
    this.store.dispatch(new LoadMakes(this.selectedYear));
  }

  getVehicleModel(year: any, make: any) {
    this.selectedMake = make;
    this.store.dispatch(new LoadModels({year, make}));
  }

  getVehicleTrim(year: any, make: any, model: any) {
    this.selectedModel = model;
    this.store.dispatch(new LoadTrims({year, make, model}));
  }

}
