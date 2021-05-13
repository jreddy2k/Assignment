import { AlbumService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionManagerService } from 'src/app/services/session-manager.service';
import { Album, AlbumPhotos } from 'src/app/models/albums';
import { TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  isLoading: boolean;
  Message: string;
  albums: Album[] = [];
  albumPhotos:AlbumPhotos[] = [];
  UserID:number;
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private session: SessionManagerService,
    private albumService: AlbumService,
    public dialog: MatDialog
  ) { 
    this.UserID = this.session.getItem("UserID");
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.GetAlbums(id);
  }

  GetAlbums(UserID: any) {
    this.isLoading = true;
    this.albumService.GetAlbums(UserID).subscribe(
      (data) => {
        this.albums = data;
        this.isLoading = false;
      },
      (error) => {
        this.Message = <any>error;
        this.isLoading = false;
      }
    );
  }

  AlbumPhotos(Id, template) {
    if (Id) {
      this.openModal(template);
      this.isLoading = true;
    this.albumService.GetAlbumPhotos(Id).subscribe(
      (data) => {
        this.albumPhotos = data;
        this.isLoading = false;
      },
      (error) => {
        this.Message = <any>error;
        this.isLoading = false;
      }
    );
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  }

}
