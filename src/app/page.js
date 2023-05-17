import Image from 'next/image'
import Herosection from '@/app/components/Herosection'
export default function Home() {
  return (
    <>
    <Herosection title={"lets watch Quranlec together"} imageUrl={"/home.svg"} />
    </>
  )
}
