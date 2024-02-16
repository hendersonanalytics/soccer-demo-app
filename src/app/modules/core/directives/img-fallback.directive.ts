import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {
    @Input('appImgFallback') fallback: string;

    constructor(private element: ElementRef) {}

    @HostListener('error', ['$event'])
    handleImageError(): void {
      this.element.nativeElement.src = 'assets/images/soccer-ball.png';
      this.element.nativeElement.alt = 'image by Freepik';
    }
}