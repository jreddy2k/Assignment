import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { Album, AlbumPhotos } from '../models/albums';

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  public fileSelectedSubject$ = new Subject<string>();
  
  baseUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
    rejectUnauthorized: false,
  };

  constructor(private http: HttpClient) {
    this.baseUrl = environment.serverUrl;
  }

  GetAlbums(UserID:any): Observable<Album[]> {
    return this.http.get<Album[]>(
      `${this.baseUrl}albums?userId=${UserID}`
    );
  }


  GetAlbumByID(Id: string): Observable<Album> {
    return this.http.get<Album>( 
      `${this.baseUrl}albums/${Id}`);
  }

  GetAlbumPhotos(AlbumId: any): Observable<AlbumPhotos[]> {
    return this.http.get<AlbumPhotos[]>(  
      `${this.baseUrl}photos?albumId=${AlbumId}`)
  }

  
}
