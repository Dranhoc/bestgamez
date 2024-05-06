import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
// import { AnimatePresence, motion } from "framer-motion";

function NavMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navMobile">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
    </div>
  );
};

export default NavMobile;