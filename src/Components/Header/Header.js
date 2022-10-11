import React from "react";
import { DesktopView, MobileView, TabletView } from "../../HOC/Reponsive";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import HeaderTablet from "./HeaderTablet";

export default function Header() {
  return (
    <div>
      <DesktopView>
        <HeaderDesktop />
      </DesktopView>
      <TabletView>
        <HeaderTablet />
      </TabletView>
      <MobileView>
        <HeaderMobile />
      </MobileView>
    </div>
  );
}
