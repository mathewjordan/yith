import React from "react";

import { InternationalString } from "@hyperion-framework/types";
import { getLabel } from "hooks/getLabel";
import { styled } from "@stitches/react";

interface LabelProps {
  label: InternationalString;
  el?: any;
}

export const Label: React.FC<LabelProps> = ({ label, el = "span" }) => {
  const value = getLabel(label, "en");
  const LabelElement = styled(el, {});

  if (!value) return null;

  /*
   * Return label value for InternationalString code `en`
   */
  return <LabelElement>{getLabel(label, "en")}</LabelElement>;
};
