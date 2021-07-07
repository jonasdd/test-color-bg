function getAppliedCssData(el) {
  let allRules = [...document.styleSheets]
    .map((s) => {
      let rules = [];
      try {
        rules.push(...s.cssRules);
      } catch (e) {} // we ignore cross-domain stylesheets with restrictive CORs headers
      return rules;
    })
    .flat();

  let styleRules = allRules.filter(
    (rule) => rule.type === CSSRule.STYLE_RULE
  );

  let matchingDefaultRules = styleRules.filter((rule) =>
    el.matches(rule.selectorText)
  );
  let nonMatchingRules = styleRules.filter(
    (rule) => !el.matches(rule.selectorText)
  );

  let matchingDefaultStyles =
    matchingDefaultRules
      .map((rule) => rule.cssText)
      .map((r) => r.split(/[{}]/g)[1].trim())
      .join(" ") + (el.getAttribute("style") || ""); // important to add these last because inline styles are meant to override stylesheet styles (unless !important is used)

  return matchingDefaultStyles;
}

const all = document.body.querySelectorAll("*:not(script)");
const test = (element) => window.getComputedStyle(element);

all.forEach((element) => {
  if (getAppliedCssData(element).includes("color")) {
    if (
      !test(element).backgroundColor ||
      test(element).backgroundColor === "rgba(0, 0, 0, 0)"
    ) {
      console.log("bg not set", element, test(element).backgroundColor);
      element.style.border = "2px solid yellow";
    }
  }
  if (
    getAppliedCssData(element).includes("background") ||
    getAppliedCssData(element).includes("background-color")
  ) {
    if (
      !test(element).color ||
      test(element).color === "rgba(0, 0, 0, 0)"
    ) {
      console.log("color not set", element, test(element).color);
      element.style.boxShadow = "0 0 0 4px  green inset";
    }
  }
});
