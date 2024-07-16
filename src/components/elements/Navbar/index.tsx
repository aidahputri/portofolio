'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as Logo from '../../../../public/logo-aidah.svg';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from './constant';
import { NavItem } from './NavItem';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { width } = useWindowSize();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`sticky inset-0 z-50 w-full flex flex-col md:items-center font-bold justify-center transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
    >
      <div className="flex items-center py-6 px-8 md:px-14 lg:px-16 xl:px-28 justify-between w-full">
        <Link href={'/'} className="relative aspect-square w-12">
          <Image
            src={Logo}
            alt={'aidah-novallia'}
            fill
            sizes="none"
            quality={100}
            priority
          />
        </Link>

        {isClient && width >= 768 && (
          <div className="items-center gap-7 hidden md:flex">
            {NAV_ITEMS.map(({ label, url, Icon }) => (
              <NavItem
                key={label}
                label={label}
                url={url}
                currentLoc={pathname}
                Icon={Icon}
              />
            ))}
          </div>
        )}

        <button
          className="flex md:hidden"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <HiOutlineBars3BottomRight size={30} className="text-white" />
        </button>
      </div>

      <AnimatePresence>
        {isClient && width < 768 && isNavbarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-y-0 w-full bg-[#100E0E] z-50 p-5 flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsNavbarOpen(false)}>
                <IoClose size={20} className="text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {NAV_ITEMS.map(({ label, url, Icon }) => (
                <NavItem
                  key={label}
                  label={label}
                  url={url}
                  currentLoc={pathname}
                  Icon={Icon}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
