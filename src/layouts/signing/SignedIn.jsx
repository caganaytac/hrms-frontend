import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spraced="right"
          src="https://yt3.ggpht.com/yti/APfAmoFozVKULQ-H-B6jY_02IMLD3u_d6G0s3pwBMMAd=s108-c-k-c0x00ffffff-no-rj"
        />
        <Dropdown text="Cagan">
          <Dropdown.Menu>
            <Dropdown.Item text="Infos" icon="info" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}