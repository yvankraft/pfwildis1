"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const getStyle = (href: string) => {
    const isActive = pathname === href;
    const baseStyle =
      "flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300";
    return isActive
      ? `${baseStyle} bg-slate-500 text-white`
      : `${baseStyle} hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:hover:text-slate-200 dark:text-slate-400`;
  };

  return (
    <nav>
      <motion.nav
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className=" nav fixed left-1/2 -translate-x-1/2 w-[96%] flex z-50 justify-evenly p-2 text-slate-800 dark:bg-zinc-900 dark:text-white rounded-2xl bg-white shadow-lg gap-4 max-w-400 my-4 border border-slate-200  dark:border-slate-700 dark:shadow-slate-700"
      >
        <div>
          <motion.div id="fisrt" className=" flex items-center h-full">
            <p className="text-2xl font-bold">PortFolio</p>
          </motion.div>
        </div>
        <div className="flex ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/" className={getStyle("/")}>
              home
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/About" className={getStyle("/About")}>
              About
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/Project" className={getStyle("/Project")}>
              Project
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/contact" className={getStyle("/contact")}>
              Contact
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="drawer lg:drawer-open grow"
          >
            <Link href="/drawer" className="">
              {" "}
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </nav>
  );
};

export default Navbar;
