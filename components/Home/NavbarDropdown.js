/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useRef, useState } from "react";
import Modal from "react-modal";
import LoginFormDistributor from "../FormWithCompany/LoginFormDistributor";
import LoginFormAdmin from "../FormWithCompany/LoginFormAdmin";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Example({
  distrubutorModal,
  setDistributorModal,
  adminModal,
  setAdminModal,
  // contributorModal,
  // setContributorModal,
}) {
  return (
    <>
      <div className="z-40">
        <Modal
          isOpen={distrubutorModal}
          style={customStyles}
          onRequestClose={() => setDistributorModal(false)}
        >
          <LoginFormDistributor />
          <button
            className="border-transparent text-red-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            onClick={() => setDistributorModal(false)}
          >
            Close
          </button>
        </Modal>
      </div>
      {/* <div className="z-40">
        <Modal
          isOpen={contributorModal}
          style={customStyles}
          onRequestClose={() => setContributorModal(false)}
        >
          <Form />
          <button
            className="border-transparent text-gray-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            onClick={() => setContributorModal(false)}
          >
            Close
          </button>
        </Modal>
      </div> */}
      <div className="z-40">
        <Modal
          isOpen={adminModal}
          style={customStyles}
          onRequestClose={() => setAdminModal(false)}
        >
          <LoginFormAdmin />
          <button
            className="border-transparent text-red-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            onClick={() => setAdminModal(false)}
          >
            Close
          </button>
        </Modal>
      </div>
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Login
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setDistributorModal(true)}
                    className={classNames(
                      active ? " text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Distributor
                  </button>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setContributorModal(true)}
                    className={classNames(
                      active ? " text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Contributor
                  </button>
                )}
              </Menu.Item> */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setAdminModal(true)}
                    className={classNames(
                      active ? " text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Admin
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
