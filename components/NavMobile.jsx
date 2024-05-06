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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="custom-navbar"
                >
                    <ul>
                        <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1,
                            }}
                        >
                            <a onClick={() => setOpen((prev) => !prev)} href="#">Login</a>
                        </motion.li>

                        <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2,
                            }}
                        >
                            <a onClick={() => setOpen((prev) => !prev)} href="#">Sign Up</a>
                        </motion.li>

                        <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.3,
                            }}
                        >
                            <a onClick={() => setOpen((prev) => !prev)} href="#">API</a>
                        </motion.li> 
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
        
        </div>
    );
};

export default NavMobile;