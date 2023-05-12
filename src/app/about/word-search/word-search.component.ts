import { Component } from "@angular/core";

interface IPosition {
  x: number;
  y: number;
}

interface IAnswer {
  answer: string;
  found: boolean;
  egg?: boolean;
  start: IPosition;
  end: IPosition;
}

@Component({
  selector: "app-word-search",
  templateUrl: "./word-search.component.html",
  styleUrls: ["./word-search.component.scss"],
})
export class WordSearchComponent {
  puzzle: string[][] = [
    ["M", "O", "P", "H", "A", "C", "C", "O", "U", "N", "T", "A", "B", "L", "E"],
    ["D", "D", "P", "R", "O", "F", "E", "S", "S", "I", "O", "N", "A", "L", "M"],
    ["I", "E", "E", "E", "O", "N", "H", "P", "M", "C", "O", "O", "L", "P", "O"],
    ["N", "V", "D", "T", "N", "B", "E", "I", "A", "E", "N", "A", "D", "R", "T"],
    ["N", "E", "A", "I", "A", "M", "L", "S", "R", "T", "T", "Q", "F", "O", "I"],
    ["O", "L", "N", "L", "C", "I", "I", "E", "T", "E", "I", "H", "U", "D", "V"],
    ["V", "O", "T", "E", "G", "A", "L", "N", "M", "R", "M", "E", "N", "U", "A"],
    ["A", "P", "I", "C", "R", "A", "T", "O", "D", "S", "O", "E", "N", "C", "T"],
    ["T", "E", "C", "B", "H", "D", "M", "E", "R", "E", "O", "N", "Y", "T", "E"],
    ["O", "R", "G", "A", "N", "I", "Z", "E", "D", "I", "D", "L", "G", "I", "D"],
    ["R", "E", "L", "I", "A", "B", "L", "E", "R", "V", "E", "L", "V", "V", "K"],
    ["C", "R", "I", "T", "I", "C", "A", "L", "T", "H", "I", "N", "K", "E", "R"],
    ["O", "B", "E", "S", "T", "C", "A", "N", "D", "I", "D", "A", "T", "E", "R"],
    ["O", "J", "F", "A", "S", "T", "L", "E", "A", "R", "N", "E", "R", "E", "S"],
    ["K", "B", "E", "A", "R", "D", "E", "T", "E", "R", "M", "I", "N", "E", "D"],
  ];

  answers: IAnswer[] = [
    {
      answer: "CRITICALTHINKER",
      found: false,
      start: {
        x: 0,
        y: 11,
      },
      end: {
        x: 14,
        y: 11,
      },
    },
    {
      answer: "DETAILORIENTED",
      found: false,
      start: {
        x: 1,
        y: 1,
      },
      end: {
        x: 14,
        y: 14,
      },
    },
    {
      answer: "PROBLEMSOLVER",
      found: false,
      start: {
        x: 2,
        y: 0,
      },
      end: {
        x: 14,
        y: 12,
      },
    },
    {
      answer: "BESTCANDIDATE",
      found: false,
      egg: true,
      start: {
        x: 1,
        y: 12,
      },
      end: {
        x: 13,
        y: 12,
      },
    },
    {
      answer: "PROFESSIONAL",
      found: false,
      start: {
        x: 2,
        y: 1,
      },
      end: {
        x: 13,
        y: 1,
      },
    },
    {
      answer: "ACCOUNTABLE",
      found: false,
      start: {
        x: 4,
        y: 0,
      },
      end: {
        x: 14,
        y: 0,
      },
    },
    {
      answer: "FASTLEARNER",
      found: false,
      start: {
        x: 2,
        y: 13,
      },
      end: {
        x: 12,
        y: 13,
      },
    },
    {
      answer: "PRODUCTIVE",
      found: false,
      start: {
        x: 13,
        y: 2,
      },
      end: {
        x: 13,
        y: 11,
      },
    },
    {
      answer: "OPENMINDED",
      found: false,
      start: {
        x: 1,
        y: 0,
      },
      end: {
        x: 10,
        y: 9,
      },
    },
    {
      answer: "DETERMINED",
      found: false,
      start: {
        x: 5,
        y: 14,
      },
      end: {
        x: 14,
        y: 14,
      },
    },
    {
      answer: "DEVELOPER",
      found: false,
      egg: true,
      start: {
        x: 1,
        y: 1,
      },
      end: {
        x: 1,
        y: 9,
      },
    },
    {
      answer: "ORGANIZED",
      found: false,
      start: {
        x: 0,
        y: 9,
      },
      end: {
        x: 8,
        y: 9,
      },
    },
    {
      answer: "MOTIVATED",
      found: false,
      start: {
        x: 14,
        y: 1,
      },
      end: {
        x: 14,
        y: 9,
      },
    },
    {
      answer: "INNOVATOR",
      found: false,
      start: {
        x: 0,
        y: 2,
      },
      end: {
        x: 0,
        y: 10,
      },
    },
    {
      answer: "DEDICATED",
      found: false,
      start: {
        x: 0,
        y: 1,
      },
      end: {
        x: 8,
        y: 9,
      },
    },
    {
      answer: "RELIABLE",
      found: false,
      start: {
        x: 0,
        y: 10,
      },
      end: {
        x: 7,
        y: 10,
      },
    },
    {
      answer: "PEDANTIC",
      found: false,
      start: {
        x: 2,
        y: 1,
      },
      end: {
        x: 2,
        y: 8,
      },
    },
    {
      answer: "PATIENT",
      found: false,
      start: {
        x: 7,
        y: 2,
      },
      end: {
        x: 13,
        y: 8,
      },
    },
    {
      answer: "HIREME",
      found: false,
      egg: true,
      start: {
        x: 6,
        y: 2,
      },
      end: {
        x: 11,
        y: 7,
      },
    },
    {
      answer: "HONEST",
      found: false,
      start: {
        x: 3,
        y: 0,
      },
      end: {
        x: 8,
        y: 5,
      },
    },
    {
      answer: "STRONG",
      found: false,
      egg: true,
      start: {
        x: 7,
        y: 4,
      },
      end: {
        x: 12,
        y: 9,
      },
    },
    {
      answer: "GAMER",
      found: false,
      egg: true,
      start: {
        x: 4,
        y: 6,
      },
      end: {
        x: 8,
        y: 10,
      },
    },
    {
      answer: "FUNNY",
      found: false,
      egg: true,
      start: {
        x: 12,
        y: 4,
      },
      end: {
        x: 12,
        y: 8,
      },
    },
    {
      answer: "SMART",
      found: false,
      egg: true,
      start: {
        x: 8,
        y: 1,
      },
      end: {
        x: 8,
        y: 5,
      },
    },
    {
      answer: "CHILL",
      found: false,
      egg: true,
      start: {
        x: 3,
        y: 7,
      },
      end: {
        x: 7,
        y: 11,
      },
    },
    {
      answer: "BEARD",
      found: false,
      egg: true,
      start: {
        x: 1,
        y: 14,
      },
      end: {
        x: 5,
        y: 14,
      },
    },
    {
      answer: "TALL",
      found: false,
      egg: true,
      start: {
        x: 10,
        y: 4,
      },
      end: {
        x: 13,
        y: 1,
      },
    },
    {
      answer: "NICE",
      found: false,
      egg: true,
      start: {
        x: 9,
        y: 0,
      },
      end: {
        x: 9,
        y: 3,
      },
    },
    {
      answer: "NERD",
      found: false,
      egg: true,
      start: {
        x: 2,
        y: 5,
      },
      end: {
        x: 5,
        y: 8,
      },
    },
    {
      answer: "COOL",
      found: false,
      egg: true,
      start: {
        x: 9,
        y: 2,
      },
      end: {
        x: 12,
        y: 2,
      },
    },
    {
      answer: "COOK",
      found: false,
      egg: true,
      start: {
        x: 0,
        y: 11,
      },
      end: {
        x: 0,
        y: 14,
      },
    },
    {
      answer: "BALD",
      found: false,
      egg: true,
      start: {
        x: 12,
        y: 0,
      },
      end: {
        x: 12,
        y: 3,
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

  lineHeight = 32;
  highlightHeight = 15;
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

  drawLine(start: IPosition, end: IPosition): any {
    const spanStart = this.getEl(start);
    const spanEnd = this.getEl(end);

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
    this.hideLine();
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
