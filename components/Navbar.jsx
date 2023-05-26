"use client"
import Image from "next/image"
import AppsIcon from "../public/assets/svg/apps.svg"
import BellIcon from "../public/assets/svg/bell.svg"
import Avatar from "../public/assets/images/profile.png"
import Button from "@components/Button"
import Link from "next/link"
import { useState, useEffect, Fragment, useRef } from "react"
import { Menu, Transition } from "@headlessui/react"


const Navbar = () => {
  const isUserLoogedIn = true;

  const onProfileClick = () => {

  }

  const onNotificationsClick = () => {

  }

  const onAppsClick = () => {

  }

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/">
          <span className="logo">
            Logo
          </span>
        </Link>
        <div className="flex flex-row items-end">

          {/*Desktop navigation*/}

          {
            isUserLoogedIn ? (
              <div className="flex flex-row">
                <Image src={Avatar} alt="Avatar" className="h-[39px] w-[39px] cursor-pointer" onClick={onProfileClick}/>
                <Button type="icon" onClick={onNotificationsClick} className="ml-[20px]" bgColor="grey">
                  <Image src={BellIcon} alt="Notifications" className="h-[20px] w-[20px]"/>
                </Button>
              </div>
            ) : (
              <Button bgColor="secondary">
                <span className="text-white font-bold">
                  Login
                </span>
              </Button>
            )
          }

          <Menu as="div" className="relative inline-block text-left ml-[20px]">
            <div>
              <Menu.Button
                onClick={() => {}}
                className="rounded-[5px] w-[40px] h-[40px] bg-grey-light hover:bg-grey active:bg-grey-light flex items-center justify-center">
                <Image src={AppsIcon} alt="Apps" className="h-[20px] w-[20px]"/>
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
              <Menu.Items className="absolute origin-top-right rounded-[5px] right-0 mt-2 w-auto bg-white drop-shadow-md border-[0.1px] border-grey-light">
                <div className="px-4 py-4 min-h-[300px] min-w-[400px]">
                  Apps here
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          
          {/*Dropdow apps*/}
          
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar