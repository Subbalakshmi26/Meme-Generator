import { Component, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meme-generator';
  topText = '';
  bottomText = '';
  selectedImage = 'https://i.imgflip.com/9s7vya.jpg';

  memeImages = [
    'https://i.imgflip.com/26am.jpg'
  ];
  showModal = false;
  generateMeme() {
    this.showModal = true;
  }
  @ViewChild('meme') memeElement!: ElementRef;
  downloadMeme() {
    html2canvas(this.memeElement.nativeElement).then((canvas: HTMLCanvasElement) => {
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL();
      link.click();
    
    });
  }
}
