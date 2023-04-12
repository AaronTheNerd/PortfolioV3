import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

const slideDown = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      left: "4.5rem",
      width: "calc(100% - 4.5rem)"
    })
  ]),
  query(":enter", [
    style({ top: "100vh" })
  ]),
  query(":leave", [
    style({ top: "0vh" })
  ]),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ top: "-100vh", opacity: 0 }))
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ top: "0vh" }))
    ])
  ])
];

const slideUp = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      left: "4.5rem",
      width: "calc(100% - 4.5rem)"
    })
  ]),
  query(":enter", [
    style({ top: "-100vh" })
  ]),
  query(":leave", [
    style({ top: "0vh" })
  ]),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ top: "100vh", opacity: 0 }))
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ top: "0vh" }))
    ])
  ])
];

const slideRight = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      top: 0,
      width: "calc(100% - 4.5rem)"
    })
  ]),
  query(":enter", [
    style({ left: "100vw" })
  ]),
  query(":leave", [
    style({ left: "4.5rem" })
  ]),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ left: "-100vw" }))
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ left: "4.5rem" }))
    ])
  ])
];

const slideLeft = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      top: 0,
      width: "calc(100% - 4.5rem)"
    })
  ]),
  query(":enter", [
    style({ left: "-100vw" })
  ]),
  query(":leave", [
    style({ left: "4.5rem" })
  ]),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ left: "100vw"}))
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ left: "4.5rem" }))
    ])
  ])
];

export const routeAnimations = trigger("routeAnimations", [
  transition("list => project", slideRight),
  transition("project => list", slideLeft),
  transition("home => about", slideDown),
  transition("home => list", slideDown),
  transition("home => work", slideDown),
  transition("home => bug", slideDown),
  transition("home => contact", slideDown),
  transition("about => home", slideUp),
  transition("about => list", slideDown),
  transition("about => work", slideDown),
  transition("about => bug", slideDown),
  transition("about => contact", slideDown),
  transition("list => home", slideUp),
  transition("list => about", slideUp),
  transition("list => work", slideDown),
  transition("list => bug", slideDown),
  transition("list => contact", slideDown),
  transition("work => home", slideUp),
  transition("work => about", slideUp),
  transition("work => list", slideUp),
  transition("work => bug", slideDown),
  transition("work => contact", slideDown),
  transition("bug => home", slideUp),
  transition("bug => about", slideUp),
  transition("bug => list", slideUp),
  transition("bug => work", slideUp),
  transition("bug => contact", slideDown),
  transition("contact => home", slideUp),
  transition("contact => about", slideUp),
  transition("contact => list", slideUp),
  transition("contact => work", slideUp),
  transition("contact => bug", slideUp),
  transition("* <=> *", slideUp)
])