import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class VehicleService {
  readonly BASE_URL = `https://6080be3273292b0017cdbf2a.mockapi.io`;

  getUrl = (type: string) => `${this.BASE_URL}/${type}`;

  constructor(private http: HttpClient) {}

  getYears(): Observable<any> {
    return this.http.get(this.getUrl("years"));
  }

  getMakes(year: string): Observable<any> {
    return this.http.get(this.getUrl("makes"), {
    });
  }

  getModels(year: string, make: string): Observable<any> {
    return this.http.get(this.getUrl("models"), {
    });
  }

  getTrims(year: string, make: string, model: string): Observable<any> {
    return this.http.get(this.getUrl("trim"), {
    });
  }

}
