"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuLink = ({item}) => {

    const pathname = usePathname()

    console.log(pathname)

  return (
    <Link href={item.path} className={item.path==pathname?"bg-green-500":""}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default menuLink