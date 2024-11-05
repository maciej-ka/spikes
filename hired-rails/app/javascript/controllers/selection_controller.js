import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.addEventListener("selectionchange", this.select)
  }

  disconnect() {
    document.removeEventListener(this.select)
  }

  connecte() {
    console.log("connected");
  }

  select(e) {
    // window.x = this.element
    // console.log("selection change", e);
    // console.log(document.getSelection().deleteFromDocument());
    console.log(document.getSelection().toString());
  }
}
