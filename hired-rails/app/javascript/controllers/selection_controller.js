import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.addEventListener("selectionchange", this.select)
  }

  disconnect() {
    document.removeEventListener(this.select)
  }

  select(e) {
    // window.x = this.element
    // console.log("selection change", e);
    // console.log(document.getSelection().deleteFromDocument());
    const sel = document.getSelection()
    console.log(sel.toString());
    if (sel.rangeCount > 0) {
      console.log(sel.getRangeAt(0).getClientRects());
    }
  }
}
