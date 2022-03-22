import { Component, OnInit } from '@angular/core';
import {LinkService} from "../link.service";
import {map} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  links$ = this.linkService.getLinks().pipe(
    map(links => links.map(link => ({
      targetUrl: `/api/l/${link.short}`,
      originalUrl: link.url,
      hits: link.hits
    })))
  );

  constructor(private readonly linkService: LinkService) { }

  ngOnInit(): void {
  }

}
