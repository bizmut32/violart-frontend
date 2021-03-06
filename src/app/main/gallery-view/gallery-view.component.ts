import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
  
  constructor(private title: Title, private meta: Meta) {

  }

  ngOnInit(): void {
    this.title.setTitle('Galéria | Violart Stúdió');    
    this.meta.updateTag({ name: 'keywords', content: 'Violart, Violart Stúdió, ViolartStudio, Galéria' })
  }

  updateDescription(description: string) {
    this.meta.updateTag({ 
      name: 'description', 
      content: description 
    })
  }

}
