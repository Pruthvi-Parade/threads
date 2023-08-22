import { ClerkProvider } from "@clerk/nextjs";
import  { Inter } from "next/font/google"
import React from "react";
import '../globals.css'

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}

const inter = Inter( { subsets : ['latin'] } )
//                                this is props        here define type which is object       
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                 <body className={`${inter.className} bg-dark-1`}>

                 </body>
            </html>
        </ClerkProvider>
    )
}