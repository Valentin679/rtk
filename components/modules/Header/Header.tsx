import Logo from "@/components/elements/Logo";
import React from "react";
import Menu from "@/components/modules/Header/Menu";
import Navbar from "@/components/modules/Header/Navbar";

const Header = () => {
  return (
    <header>
      <div className={'container'}>
        <div>
          <Menu/>
        </div>
        <div className={'logo'}>
          <Logo/>
        </div>
        <div>
          <Navbar/>
        </div>

      </div>
    </header>
  )
}

export default Header;

// const Header = () => {
//   return(
//     <div>
//
//     </div>
//   )
// }
// export default Header;
