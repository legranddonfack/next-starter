"use client"
import Image from "next/image"
import AppsIcon from "../public/assets/svg/apps.svg"
import BellIcon from "../public/assets/svg/bell.svg"
import Avatar from "../public/assets/images/profile.png"
import Button from "@components/Button"
import Link from "next/link"

const onProfileClick = () => {

}

const onNotificationsClick = () => {

}

const onAppsClick = () => {

}

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/">
          <span className="logo">
            Logo
          </span>
        </Link>
        <div className="flex flex-row items-end">
          <Image src={Avatar} alt="Avatar" className="h-[39px] w-[39px] cursor-pointer" onClick={onProfileClick}/>
          <Button onClick={onNotificationsClick} className="ml-[20px]">
            <Image src={BellIcon} alt="Notifications" className="h-[20px] w-[20px]"/>
          </Button>
          <Button onClick={onAppsClick} className="ml-[20px]">
            <Image src={AppsIcon} alt="Apps" className="h-[20px] w-[20px]"/>
          </Button>
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar