import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pl-40 pt-20">
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-1 pl-10 mt-10">
        <Link href="/week-2" className="hover:text-teal-500 hover:underline">
          Week 2
        </Link>
        <Link href="/week-3" className="hover:text-teal-500 hover:underline">
          Week 3
        </Link>
        <Link href="/week-4" className="hover:text-teal-500 hover:underline">
          Week 4
        </Link>
        <Link href="/week-5" className="hover:text-teal-500 hover:underline">
          Week 5
        </Link>
        <Link href="/week-6" className="hover:text-teal-500 hover:underline">
          Week 6
        </Link>
        <Link href="/week-7" className="hover:text-teal-500 hover:underline">
          Week 7
        </Link>
        <Link href="/week-8" className="hover:text-teal-500 hover:underline">
          Week 8
        </Link>
        <Link href="/week-9" className="hover:text-teal-500 hover:underline">
          Week 9
        </Link>
      </div>
    </div>
  );
}
