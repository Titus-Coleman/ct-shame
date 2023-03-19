import {
  View,
  Menu,
  MenuItem,
  useAuthenticator,
  Button,
  Flex,
  FileUploader,
  AccountSettings,
  Divider,
} from "@aws-amplify/ui-react";

import React, { useState } from "react";
import Upload from "./Upload";

function Navbar() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);

  return (
    <View
      as="nav"
      ariaLabel="navigation bar"
      width="100%"
      height="auto"
      backgroundColor="pink"
    >
      <Flex justifyContent={"space-between"}>
        <Menu>
          <MenuItem>
            <Flex direction={"column"}>Upload</Flex>
          </MenuItem>
          <MenuItem>
            <Flex direction={"column"} gap={"1rem"}>
              Change Password
            </Flex>
          </MenuItem>
          <Divider />
          <MenuItem marginTop={"1rem"}>
            <Button onClick={signOut}>Sign Out</Button>
          </MenuItem>
        </Menu>
      </Flex>
    </View>
  );
}

export default Navbar;
