import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

function NavMobile() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="navMobile">
        <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        {isOpen && (
            <div className="custom-navbar">
                <ul>
                    <li>
                        <a onClick={() => setOpen((prev) => !prev)} href="#">Login</a>
                    </li>

                    <li>
                        <a onClick={() => setOpen((prev) => !prev)} href="#">Sign Up</a>
                    </li>

                    <li>
                        <a onClick={() => setOpen((prev) => !prev)} href="#">API</a>
                    </li> 
                </ul>
          </div>
        )}
        </div>
    );
};

export default NavMobile;