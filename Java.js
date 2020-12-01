 <script>
      // Button delay js
      const button = document.getElementById("landing-button");
      setTimeout(() => {
        addAndRemoveClass(button, "opac-1", "opac-0");
      }, 800);
    </script>
    <script>
      // nav state
      var showMobileNav = false;
      var navToggleBtn = document.getElementById("nav-toggle");
      // Get the navigation div
      var nav = document.getElementById("nav-items");
      // get an array of the navigation divs children
      var navItems = nav.children;

      drawNavIcon(); // This changes the nav icon depending on the state of the nav

      navToggleBtn.addEventListener("click", (ev) => {
        // this is called a tenary operator. you can google the meaning and usage
        showMobileNav ? addAndRemoveClass(nav, "hide", "show") : addAndRemoveClass(nav, "show", "hide");

        // this changes the state of the nav
        showMobileNav = !showMobileNav;
        drawNavIcon();
      });

      // loop through children of navigation div
      for (let i = 0; i < navItems.length; i++) {
        let el = navItems[i];
        // the mouseenter event is triggered when the mouse hovers on an element
        el.addEventListener("mouseenter", (e) => {
          addClassToSpan(e, ["hover"], []);
        });

        // the mouseleave event fires when the mouse leaves an element
        el.addEventListener("mouseleave", (e) => {
          addClassToSpan(e, [], ["hover"]);
        });
      }

      // add and remove an array of css classes to an event target
      function addClassToSpan(ev, addStr, remStr) {
        // element is the event target in this case the <a> HOME <span class="underline"></span> </a>
        const element = ev.target;

        // get the first child of the event target in this case is <span class="underline"></span>
        const span = element.children[0];
        if (span) {
          // remove the provided css class
          span.classList.remove(...remStr);
          // add the provided css class
          span.classList.add(...addStr);
        }
      }

      function addAndRemoveClass(el, addCl, removecl) {
        el.classList.remove(removecl);
        el.classList.add(addCl);
      }

      function drawNavIcon() {
        // this is another tenary operator
        navToggleBtn.innerHTML = showMobileNav
          ? `<svg height="30px" viewBox="0 0 400 400" width="30px"><path fill="white" d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>`
          : `<svg height="30px" viewBox="0 -53 384 384" width="30px"><path fill="white" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path fill="white" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path fill="white" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>`;
      }
    </script>