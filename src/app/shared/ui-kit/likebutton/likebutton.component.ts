import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.scss']
})
export class LikebuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(".icon-wrapper-2").on("click", function () {;
    // var $iconWrapper2 = $(".icon-wrapper-2");
    // $iconWrapper2.on("click", function () {
    //   var _this = $iconWrapper2;
    //   if (_this.hasClass("anim")) _this.removeClass("anim");
    //   else {
    //     _this.addClass("anim");
    //     _this.css("pointer-events", "none");
    //     setTimeout(function () {
    //       _this.css("pointer-events", "");
    //     }, 1200);
    //   }
    // });
  }

}
