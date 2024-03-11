"use client"
import "../styles/globals.scss"
import { usePathname } from "next/navigation"

export default function BreadCrumb() {
    const router = usePathname()

    return (
        <div
            className="breadCrumb"
            style={{
                backgroundColor: router === "/Hedooh" ? "#BF9A4C" : "#000"
            }}
        >
            <img src="/fiveStar.png" alt="logo" />
        </div>
    )
}
