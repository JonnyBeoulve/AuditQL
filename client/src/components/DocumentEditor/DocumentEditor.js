import React from "react";
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { options, menu } from "@aeaton/react-prosemirror-config-default";

import { ProseMirror } from "../../theme/base.js";

/* This stateless function component will present a document editor to the user where they can
write-in audit details and append them to an audit. This implementation uses ProseMirror. */
const DocumentEditor = ({ value, onChange }) => (
  <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
    render={({ editor, view }) => (
      <ProseMirror>
        <MenuBar menu={menu} view={view} />
        {editor}
      </ProseMirror>
    )}
  />
);

export default DocumentEditor;
