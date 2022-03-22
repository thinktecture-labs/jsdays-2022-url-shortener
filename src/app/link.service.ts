import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CreateLink, Link, LinkWithHits} from "./link";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(private readonly httpClient: HttpClient) { }

  getLinks(): Observable<LinkWithHits[]> {
    return this.httpClient.get<LinkWithHits[]>('/api/l');
  }

  createLink(url: string): Observable<Link> {
    return this.httpClient.post<Link>('/api/l', {
      url
    } as CreateLink);
  }
}
