import { Component, OnInit } from '@angular/core';
import {LinkService} from "../link.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private readonly linkService: LinkService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  createShortUrl(url: string) {
    this.linkService.createLink(url).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
