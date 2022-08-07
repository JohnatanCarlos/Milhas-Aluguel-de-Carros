import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  private slider: HTMLDivElement;
  private button: HTMLDivElement;
  private slides: any;

  @ViewChild('items') items: ElementRef;
  @ViewChild('buttons') buttons: ElementRef;

  current = 0;
  prev = 4;
  next = 1;

  constructor() { }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.slider = this.items.nativeElement;
    this.button = this.buttons.nativeElement;
    this.slides = this.slider.children;

    console.log(this.button.children);

    for (let i = 0; i < this.button.children.length; i++) {
      this.button.children[i].addEventListener('click', () =>
        i == 0 ? this.gotoPrev() : this.gotoNext()
      );
    }
  }

  // gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
  gotoPrev() {
    this.current > 0
      ? this.gotoNum(this.current - 1)
      : this.gotoNum(this.slides.length - 2);
  }

  // gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
  gotoNext() {
    this.current < 4 ? this.gotoNum(this.current + 1) : this.gotoNum(0);
  }

  // const gotoNum = number => {
  //   current = number;
  //   prev = current - 1;
  //   next = current + 1;

  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].classList.remove("active");
  //     slides[i].classList.remove("prev");
  //     slides[i].classList.remove("next");
  //   }
  //   if (next == 5) {
  //     next = 0;
  //   }

  //   if (prev == -1) {
  //     prev = 4;
  //   }

  //   slides[current].classList.add("active");
  //   slides[prev].classList.add("prev");
  //   slides[next].classList.add("next");
  // }

  gotoNum(number: number) {
    this.current = number;
    this.prev = this.current - 1;
    this.next = this.current + 1;

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove('active');
      this.slides[i].classList.remove('prev');
      this.slides[i].classList.remove('next');
    }

    if (this.next == 5) {
      this.next = 0;
    }

    if (this.prev == -1) {
      this.prev = 4;
    }

    this.slides[this.current].classList.add('active');
    this.slides[this.prev].classList.add('prev');
    this.slides[this.next].classList.add('next');
  }
}
