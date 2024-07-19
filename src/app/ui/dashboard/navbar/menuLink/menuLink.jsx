"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuLink = ({ item }) => {

  const pathname = usePathname()

  console.log(pathname)

  return (
    <Link href={item.path} className={item.path == pathname ? "bg-green-500 p-5 flex items-center gap-[10px] my-[5px] rounded-lg" : "p-5 flex items-center gap-[10px] my-[5px] rounded-lg"} >
      {item.icon}
      {item.title}
    </Link>
  )
}

export default menuLink