import { Validator } from "@hyperion-framework/validator";
const validator = new Validator();

const { validateManifest } = require("./Manifest");

test("Returns a manifest json object.", () => {
  const boolean = validateManifest(
    "https://iiif.stack.rdc.library.northwestern.edu/public/87/9d/c5/5a/-3/14/e-/4a/08/-9/1b/2-/78/c9/98/ef/c6/5c-manifest.json?manifest=https://iiif.stack.rdc.library.northwestern.edu/public/87/9d/c5/5a/-3/14/e-/4a/08/-9/1b/2-/78/c9/98/ef/c6/5c-manifest.json",
  );
  // expect(boolean).toBe(true);
});
