import { FileUploader } from "@aws-amplify/ui-react";

import React from "react";

function Upload() {
  return (
    <FileUploader
      acceptedFileTypes={["image/*"]}
      accessLevel="public"
      variation="drop"
      isPreviewerVisible={true}
      shouldAutoProceed={true}
      //   onSuccess={onSuccess}
    />
  );
}

export default Upload;
