declare module "*.svg?component" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;

  export default ReactComponent;
}

// interface ImportMetaEnv {
//   [key: string]: string;
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }

// declare const __BUILD_DATE__: string;
