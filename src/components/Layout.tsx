import { Grid } from "@aws-amplify/ui-react";

import React, { ReactNode } from "react";

function Layout({ children }: { children?: ReactNode }) {
  return (
    <Grid
      gap={"1rem"}
      templateRows={"auto 1fr"}
      height={"100%"}
      justifyContent={"center"}
    >
      {children}
    </Grid>
  );
}

export default Layout;
