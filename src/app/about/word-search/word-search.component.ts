import { Component } from "@angular/core";

interface IPosition {
  x: number;
  y: number;
}

interface IAnswer {
  answer: string;
  found: boolean;
  start: IPosition;
  end: IPosition;
}

@Component({
  selector: "app-word-search",
  templateUrl: "./word-search.component.html",
  styleUrls: ["./word-search.component.css"],
})
export class WordSearchComponent {
  puzzle: string[][] = [
    ["R", "D", "Z", "J", "O", "B", "T", "C", "C", "M", "W", "E", "Y", "N", "R"],
    ["N", "E", "W", "D", "I", "P", "D", "N", "T", "E", "V", "Q", "G", "R", "E"],
    ["T", "T", "K", "H", "E", "N", "E", "N", "E", "I", "N", "I", "G", "F", "V"],
    ["E", "N", "G", "N", "Q", "N", "E", "N", "T", "G", "Y", "X", "A", "W", "L"],
    ["L", "E", "U", "O", "I", "I", "I", "C", "M", "R", "I", "S", "B", "O", "O"],
    ["B", "I", "R", "H", "T", "H", "U", "M", "E", "I", "T", "L", "R", "N", "S"],
    ["A", "R", "D", "A", "A", "D", "T", "L", "R", "L", "N", "G", "I", "C", "M"],
    ["T", "O", "P", "E", "O", "R", "I", "L", "E", "E", "A", "D", "V", "D", "E"],
    ["N", "L", "E", "R", "T", "A", "D", "A", "A", "N", "T", "G", "E", "I", "L"],
    ["U", "I", "P", "M", "B", "A", "R", "W", "I", "C", "N", "E", "J", "D", "B"],
    ["O", "A", "K", "L", "E", "N", "C", "Z", "O", "Y", "I", "H", "D", "R", "O"],
    ["C", "T", "E", "X", "E", "R", "E", "I", "Y", "R", "Z", "T", "E", "C", "R"],
    ["C", "E", "Q", "R", "U", "D", "I", "L", "D", "H", "K", "M", "I", "R", "P"],
    ["A", "D", "A", "P", "S", "D", "W", "H", "K", "E", "Q", "E", "R", "R", "Y"],
    ["D", "E", "T", "A", "V", "I", "T", "O", "M", "D", "D", "O", "R", "X", "C"],
  ];

  answers: IAnswer[] = [
    {
      answer: "CRITICALTHINKER",
      found: false,
      start: {
        x: 14,
        y: 14,
      },
      end: {
        x: 0,
        y: 0,
      },
    },
    {
      answer: "DETAILORIENTED",
      found: false,
      start: {
        x: 1,
        y: 13,
      },
      end: {
        x: 1,
        y: 0,
      },
    },
    {
      answer: "PROBLEMSOLVER",
      found: false,
      start: {
        x: 14,
        y: 12,
      },
      end: {
        x: 14,
        y: 0,
      },
    },
    {
      answer: "ACCOUNTABLE",
      found: false,
      start: {
        x: 0,
        y: 13,
      },
      end: {
        x: 0,
        y: 3,
      },
    },
    {
      answer: "FASTLEARNER",
      found: false,
      start: {
        x: 13,
        y: 2,
      },
      end: {
        x: 3,
        y: 12,
      },
    },
    {
      answer: "DETERMINED",
      found: false,
      start: {
        x: 12,
        y: 10,
      },
      end: {
        x: 3,
        y: 1,
      },
    },
    {
      answer: "HARDWORKER",
      found: false,
      start: {
        x: 3,
        y: 5,
      },
      end: {
        x: 12,
        y: 14,
      },
    },
    {
      answer: "OPENMINDED",
      found: false,
      start: {
        x: 4,
        y: 0,
      },
      end: {
        x: 13,
        y: 9,
      },
    },
    {
      answer: "PRODUCTIVE",
      found: false,
      start: {
        x: 2,
        y: 9,
      },
      end: {
        x: 11,
        y: 0,
      },
    },
    {
      answer: "DEDICATED",
      found: false,
      start: {
        x: 10,
        y: 14,
      },
      end: {
        x: 2,
        y: 6,
      },
    },
    {
      answer: "MOTIVATED",
      found: false,
      start: {
        x: 8,
        y: 14,
      },
      end: {
        x: 0,
        y: 14,
      },
    },
    {
      answer: "ORGANIZED",
      found: false,
      start: {
        x: 13,
        y: 4,
      },
      end: {
        x: 5,
        y: 12,
      },
    },
    {
      answer: "DILIGENT",
      found: false,
      start: {
        x: 13,
        y: 7,
      },
      end: {
        x: 6,
        y: 0,
      },
    },
    {
      answer: "RELIABLE",
      found: false,
      start: {
        x: 9,
        y: 4,
      },
      end: {
        x: 2,
        y: 11,
      },
    },
    {
      answer: "PATIENT",
      found: false,
      start: {
        x: 2,
        y: 7,
      },
      end: {
        x: 8,
        y: 1,
      },
    },
    {
      answer: "HIREME",
      found: false,
      start: {
        x: 7,
        y: 13,
      },
      end: {
        x: 2,
        y: 8,
      },
    },
  ];

  start: IPosition = {
    x: 0,
    y: 0,
  };

  end: IPosition = {
    x: 0,
    y: 0,
  };

  lineHeight = 24;
  highlightHeight = 18;
  dragging = false;

  getOffset(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width || el.offsetWidth,
      height: rect.height || el.offsetHeight,
    };
  }

  getStyle(el: HTMLElement) {
    const offset = this.getOffset(el);
    return {
      left: offset.left + "px",
      top: offset.top + "px",
      width: offset.width + "px",
      height: offset.height + "px",
    };
  }

  getEl(pos: IPosition): HTMLElement | null {
    return document.getElementById("char-" + pos.x + "-" + pos.y);
  }

  showLine() {
    if (
      document.getElementById("current-highlight")?.classList.contains("d-none")
    ) {
      document.getElementById("current-highlight")?.classList.remove("d-none");
    }
  }

  hideLine() {
    document.getElementById("current-highlight")?.classList.add("d-none");
  }

  drawLine(): any {
    const spanStart = this.getEl(this.start);
    const spanEnd = this.getEl(this.end);

    if (spanStart === null || spanEnd === null) return;

    const offset1 = this.getOffset(spanStart);
    const offset2 = this.getOffset(spanEnd);

    let x1 = offset1.left;
    let y1 = offset1.top;

    let x2 = offset2.left;
    let y2 = offset2.top;

    if (x1 === x2) {
      x1 += offset1.width / 2;
      x2 += offset2.width / 2;
    } else {
      x1 += offset1.width * (x1 < x2 ? 0.25 : 0.75);
      x2 += offset2.width * (x1 < x2 ? 0.75 : 0.25);
    }
    if (y1 === y2) {
      y1 += offset1.height / 2;
      y2 += offset2.height / 2;
    } else {
      y1 += offset1.height * (y1 < y2 ? 0.25 : 0.75);
      y2 += offset2.height * (y1 < y2 ? 0.75 : 0.25);
    }

    const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    const cx = (x1 + x2) / 2 - length / 2;
    const cy = (y1 + y2) / 2 - this.highlightHeight / 2;

    const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

    return {
      padding: "0px",
      margin: "0px",
      height: this.highlightHeight + "px",
      "background-color": "#FFFF0080",
      "line-height": "1px",
      position: "absolute",
      left: cx + "px",
      top: cy + "px",
      width: length + "px",
      "-moz-transform": "rotate(" + angle + "deg)",
      "-webkit-transform": "rotate(" + angle + "deg)",
      "-o-transform": "rotate(" + angle + "deg)",
      "-ms-transform": "rotate(" + angle + "deg)",
      transform: "rotate(" + angle + "deg)",
    };
  }

  checkEqual(a: IPosition, b: IPosition): boolean {
    return a.x == b.x && a.y == b.y;
  }

  checkSelection(start: IPosition, end: IPosition): IAnswer | undefined {
    for (const answer of this.answers) {
      if (
        !answer.found &&
        ((this.checkEqual(answer.start, start) &&
          this.checkEqual(answer.end, end)) ||
          (this.checkEqual(answer.start, end) &&
            this.checkEqual(answer.end, start)))
      ) {
        answer.found = true;
        return answer;
      }
    }
    return undefined;
  }

  startDrag(x: number, y: number) {
    if (this.dragging) return;
    this.dragging = true;
    this.hideLine();
    console.log("Start");
    this.start = {
      x: x,
      y: y,
    };
  }

  endDrag(x: number, y: number) {
    this.dragging = false;
    console.log("End");
    this.end = {
      x: x,
      y: y,
    };
    const answer = this.checkSelection(this.start, this.end);
    if (answer === undefined) {
      this.hideLine();
      return;
    }
    console.log("Found " + answer.answer);
    const highlights = document.getElementById("highlights")!;
    const curr = document.getElementById("current-highlight")!;
    curr.removeAttribute("id");
    const permanentHighlight = curr.cloneNode(true);
    curr.setAttribute("id", "current-highlight");
    this.hideLine();
    highlights.appendChild(permanentHighlight);
  }

  enterDrag(x: number, y: number) {
    if (!this.dragging) return;
    console.log("Enter");
    this.end = {
      x: x,
      y: y,
    };
    this.showLine();
  }
}
