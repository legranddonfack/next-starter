"use client"
import Image from "next/image"
import AppsIcon from "../public/assets/svg/apps.svg"
import BellIcon from "../public/assets/svg/bell.svg"
import Avatar from "../public/assets/images/profile.png"
import Button from "@components/Button"
import Link from "next/link"
import { useState, useEffect } from "react"


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
          <Button type="icon" bgColor="grey" onClick={onAppsClick} className="ml-[20px]">
            <Image src={AppsIcon} alt="Apps" className="h-[20px] w-[20px]"/>
          </Button>
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar