import Image from 'next/image'
import Herosection from '@/app/components/Herosection'
export default function Home() {
  return (
    <>
    <Herosection title={"lets watch Movies together"} imageUrl={"/about.svg"} />
    </>
  )
}
