import * as React from "react";
import { ApplicationContext, ContextValue } from "@infrastructure/contexts";

export const useApplication = (): ContextValue => {
  return React.useContext(ApplicationContext);
};
