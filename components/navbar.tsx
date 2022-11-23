/* eslint-disable @next/next/no-img-element */
import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { Checkout } from "./checkout";
import { ProductContext } from "../pages/_app";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const prodContext = useContext(ProductContext);
  return (
    <>
      <Checkout open={open} setOpen={setOpen} products={prodContext.prod} />
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto rounded-full lg:hidden"
                      src="https://static8.depositphotos.com/1472772/963/i/950/depositphotos_9632509-stock-photo-red-candy.jpg"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto rounded-full lg:block"
                      src="https://static8.depositphotos.com/1472772/963/i/950/depositphotos_9632509-stock-photo-red-candy.jpg"
                      alt="Your Company"
                    />
                  </div>
                  <div className="inline-flex items-center pl-4 pt-1 text-xl font-bold text-gray-900">
                    Candy Store
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <button
                      onClick={() => {
                        router.push("/");
                      }}
                      className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      {!router.query.id ? "Home" : "Go Back"}
                    </button>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="w-6 h-6 text-gray-400"
                  >
                    <ShoppingCartIcon />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
