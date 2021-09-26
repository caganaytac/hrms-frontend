import React from "react";
import { Button, Input } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button onClick={signIn} circular color="yellow">
        <Input type="text" color="black">
          <b>Sign In</b>
        </Input>
      </Button>
    </div>
  );
}
