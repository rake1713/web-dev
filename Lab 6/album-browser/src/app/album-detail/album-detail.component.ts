import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Album } from '../models/album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  tempTitle: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.tempTitle = data.title; 
    });
  }
  saveTitle(): void {
    this.album.title = this.tempTitle;
    this.albumService.updateAlbum(this.album).subscribe((updatedAlbum) => {
      alert('Title updated successfully!');
      this.album = updatedAlbum;
    });
  }
  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
