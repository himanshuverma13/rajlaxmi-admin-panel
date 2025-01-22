// // /*
// // Template Name: Admin Template
// // Author: Wrappixel

// // File: js
// // */
// // // ==============================================================
// // // Auto select left navbar
// // // ==============================================================
// // $(function () {
// //     "use strict";
// //     var url = window.location + "";
// //     var path = url.replace(
// //       window.location.protocol + "//" + window.location.host + "/",
// //       ""
// //     );
// //     var element = $("ul#sidebarnav a").filter(function () {
// //       return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
// //     });
// //     element.parentsUntil(".sidebar-nav").each(function (index) {
// //       if ($(this).is("li") && $(this).children("a").length !== 0) {
// //         $(this).children("a").addClass("active");
// //         $(this).parent("ul#sidebarnav").length === 0
// //           ? $(this).addClass("active")
// //           : $(this).addClass("selected");
// //       } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
// //         $(this).addClass("selected");
// //       } else if ($(this).is("ul")) {
// //         $(this).addClass("in");
// //       }
// //     });
  
// //     element.addClass("active");
// //     $("#sidebarnav a").on("click", function (e) {
// //       if (!$(this).hasClass("active")) {
// //         // hide any open menus and remove all other classes
// //         $("ul", $(this).parents("ul:first")).removeClass("in");
// //         $("a", $(this).parents("ul:first")).removeClass("active");
  
// //         // open our new menu and add the open class
// //         $(this).next("ul").addClass("in");
// //         $(this).addClass("active");
// //       } else if ($(this).hasClass("active")) {
// //         $(this).removeClass("active");
// //         $(this).parents("ul:first").removeClass("active");
// //         $(this).next("ul").removeClass("in");
// //       }
// //     });
// //     $("#sidebarnav >li >a.has-arrow").on("click", function (e) {
// //       e.preventDefault();
// //     });
// //   });

// export class Utils {
//   constructor(selector) {
//       this.elements = Utils.getSelector(selector);
//       this.element = this.get(0);
//       return this;
//   }

//   is(el) {
//       if (typeof el === 'string') {
//           return (
//               this.element.matches ||
//               this.element.matchesSelector ||
//               this.element.msMatchesSelector ||
//               this.element.mozMatchesSelector ||
//               this.element.webkitMatchesSelector ||
//               this.element.oMatchesSelector
//           ).call(this.element, el);
//       }
//       return this.element === (el.element || el);
//   }
//   children() {
//       return new Utils(this.element.children);
//   }
//   addClass(classNames = '') {
//       this.each((el) => {
//           // IE doesn't support multiple arguments
//           classNames.split(' ').forEach((className) => {
//               el.classList.add(className);
//           });
//       });
//       return this;
//   }
//   parent() {
//       return new Utils(this.element.parentElement);
//   }
//   on(events, listener) {
//       events.split(' ').forEach((eventName) => {
//           this.each((el) => {
//               const tNEventName = Utils.setEventName(el, eventName);
//               if (!Array.isArray(Utils.eventListeners[tNEventName])) {
//                   Utils.eventListeners[tNEventName] = [];
//               }
//               Utils.eventListeners[tNEventName].push(listener);

//               // https://github.com/microsoft/TypeScript/issues/28357
//               if (el) {
//                   el.addEventListener(eventName.split('.')[0], listener);
//               }
//           });
//       });

//       return this;
//   }
//   hasClass(className) {
//       if (!this.element) {
//           return false;
//       }
//       return this.element.classList.contains(className);
//   }
//   removeClass(classNames) {
//       this.each((el) => {
//           // IE doesn't support multiple arguments
//           classNames.split(' ').forEach((className) => {
//               el.classList.remove(className);
//           });
//       });
//       return this;
//   }
//   next() {
//       if (!this.element) {
//           return this;
//       }
//       return new Utils(this.element.nextElementSibling);
//   }
//   static getSelector(selector, context) {
//       if (selector && typeof selector !== 'string') {
//           if (selector.length !== undefined) {
//               return selector;
//           }
//           return [selector];
//       }
//       context = context || document;

//       // For performance reasons, use getElementById
//       // eslint-disable-next-line no-control-regex
//       const idRegex = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/;
//       if (idRegex.test(selector)) {
//           const el = document.getElementById(selector.substring(1));
//           return el ? [el] : [];
//       }
//       return [].slice.call(context.querySelectorAll(selector) || []);
//   }
//   get(index) {
//       if (index !== undefined) {
//           return this.elements[index];
//       }
//       return this.elements;
//   }
//   each(func) {
//       if (!this.elements.length) {
//           return this;
//       }
//       this.elements.forEach((el, index) => {
//           func.call(el, el, index);
//       });
//       return this;
//   }
//   static setEventName(el, eventName) {
//       // Need to verify https://stackoverflow.com/questions/1915341/whats-wrong-with-adding-properties-to-dom-element-objects
//       const elementUUId = el.eventEmitterUUID;
//       const uuid = elementUUId || Utils.generateUUID();
//       // eslint-disable-next-line no-param-reassign
//       el.eventEmitterUUID = uuid;
//       return Utils.getEventName(eventName, uuid);
//   }
//   static generateUUID() {
//       return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//           // eslint-disable-next-line no-bitwise
//           const r = (Math.random() * 16) | 0;
//           // eslint-disable-next-line no-bitwise
//           const v = c === 'x' ? r : (r & 0x3) | 0x8;
//           return v.toString(16);
//       });
//   }
//   static getEventName(eventName, uuid) {
//       return eventName + '__EVENT_EMITTER__' + uuid;
//   }
// }

// Utils.eventListeners = {};

// export default function $utils(selector) {
//   return new Utils(selector);
// }

// ==============================================================
// Auto select left navbar
// ==============================================================

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var url = window.location.href;
  var path = url.replace(window.location.protocol + "//" + window.location.host + "/", "");
  var sideNavLinks = document.querySelectorAll("ul#sidebarnav a");
  var element = null;

  sideNavLinks.forEach(function (link) {
      if (link.href === url || link.href === path) {
          element = link;
      }
  });

  if (element) {
      var parentElements = [];
      var currentElement = element.parentElement;

      while (currentElement && currentElement !== document) {
          parentElements.push(currentElement);
          currentElement = currentElement.parentElement;
      }

      parentElements.forEach(function (el) {
          if (el.tagName.toLowerCase() === "li" && el.querySelector("a")) {
              var link = el.querySelector("a");
              link.classList.add("active");

              if (!el.closest("ul#sidebarnav")) {
                  el.classList.add("active");
              } else {
                  el.classList.add("selected");
              }
          } else if (el.tagName.toLowerCase() !== "ul" && !el.querySelector("a")) {
              el.classList.add("selected");
          } else if (el.tagName.toLowerCase() === "ul") {
              el.classList.add("in");
          }
      });

      element.classList.add("active");
  }

  var sideNavLinks = document.querySelectorAll("#sidebarnav a");

  sideNavLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
          if (!link.classList.contains("active")) {
              // Hide any open menus and remove all other classes
              var parentList = link.closest("ul");

              parentList.querySelectorAll("ul").forEach(function (subMenu) {
                  subMenu.classList.remove("in");
              });

              parentList.querySelectorAll("a").forEach(function (subLink) {
                  subLink.classList.remove("active");
              });

              // Open our new menu and add the open class
              var nextUl = link.nextElementSibling;
              if (nextUl && nextUl.tagName.toLowerCase() === "ul") {
                  nextUl.classList.add("in");
              }

              link.classList.add("active");
          } else if (link.classList.contains("active")) {
              link.classList.remove("active");

              var parentUl = link.closest("ul");
              if (parentUl) {
                  parentUl.classList.remove("active");
              }

              var nextUl = link.nextElementSibling;
              if (nextUl && nextUl.tagName.toLowerCase() === "ul") {
                  nextUl.classList.remove("in");
              }
          }
      });
  });

  var hasArrowLinks = document.querySelectorAll("#sidebarnav > li > a.has-arrow");

  hasArrowLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.preventDefault();
      });
  });
});
