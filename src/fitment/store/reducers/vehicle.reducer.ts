import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  makes: string[];
  models: string[];
  trims: string[];
  tyres: string[]
  loaded: boolean;
  loading: boolean;
  show: boolean;
}

export const initialState: VehicleState = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  tyres: [],
  loaded: false,
  loading: false,
  show: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  switch (action.type) {

    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromVehicle.SET_YEARS: {
      return {
        ...state,
        years: action.payload
      };
    }

    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: true,
        loading: true
      };
    }

    case fromVehicle.LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: true
      };
    }

    case fromVehicle.LOAD_MAKES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromVehicle.LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: true,
        loading: true
      };
    }

    case fromVehicle.LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        makes: action.payload
      };
    }

    case fromVehicle.LOAD_MODELS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromVehicle.LOAD_MODELS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case fromVehicle.LOAD_MODELS_SUCCESS: {
      return {
        ...state,
        models: action.payload
      };
    }

    case fromVehicle.LOAD_TRIMS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromVehicle.LOAD_TRIMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case fromVehicle.LOAD_TRIMS_SUCCESS: {
      return {
        ...state,
        trims: action.payload
      };
    }

    default:
      return state;
  }
}

export const isShowing = (state: VehicleState) => state.show;
