import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Image from "next/image";

const navigation = [
    { name: "HOME", href: "#", current: false },
    { name: "MANIFESTO", href: "#", current: false },
    { name: "FACILITIES", href: "#", current: false },
    { name: "UNIT MATRIX", href: "#", current: false },
    { name: "PROJECT DETAIL", href: "#", current: false },
    { name: "CONTACT US", href: "#", current: false },
    { name: "GALLERY", href: "#", current: false },

];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Nav = () => {
    return (
        <>
            <Disclosure
                as="nav"
                className="sticky top-0 p-5 overflow-hidden z-40 w-[-webkit-fill-available] bg-[#010F2A]"
            >
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#676F7F]  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#676F7F]">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-20 w-auto"
                                            src="/logo-topper.png"
                                            alt="logo"
                                        />
                                        <img
                                            className="hidden lg:block h-20 w-auto"
                                            src="/logo-topper.png"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="hidden md:flex sm:ml-6 items-center justify-center ">
                                        <div className="flex space-x-4 items-center text-center">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-[#836040]"
                                                            : "text-[#676F7F]  hover:text-white",
                                                        "px-3 py-2 rounded-md text-sm font-medium"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden h-screen my-5">
                            <div className="px-2 pt-2 pb-3 space-y-1 ">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-white text-[#836040]"
                                                : "text-[#676F7F] hover:bg-white hover:text-white",
                                            "block px-3 py-2  text-base font-medium text-center bg-white bg-opacity-10"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Nav;
