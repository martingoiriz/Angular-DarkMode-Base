import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "dark-mode-base";

  theme: boolean = false;

  changeMode() {
    this.theme = !this.theme;
  }
}
