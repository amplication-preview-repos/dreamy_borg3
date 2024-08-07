import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContentTitle } from "../content/ContentTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput source="content.id" reference="Content" label="content">
          <SelectInput optionText={ContentTitle} />
        </ReferenceInput>
        <TextInput label="parentComment" source="parentComment" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
