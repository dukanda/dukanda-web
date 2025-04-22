"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import headerData from "@/data/headerData"

const { social } = headerData

export const MenuContent = () => {
  return (
    <div className="w-full h-full p-2 space-y-6">
      <nav className="space-y-4 p-0">
        {/* Navigation links */}
        <ul className="space-y-2 p-0">
          {[
            { label: "Início", href: "/" },
            { label: "Destinos", href: "/destinations" },
            { label: "Passeios", href: "/tours/list" },
            { label: "Notícias", href: "/news" },
            { label: "Contacto", href: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-muted transition-colors text-base font-medium hover:text-orange-500"
                passHref
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="pt-4">
          <Link
            href="https://dukanda-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Button className="w-full bg-green-800 hover:bg-green-700 text-primary-foreground transition">
              Anunciar aqui
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <ul className="pt-4 space-y-2 text-sm text-muted-foreground flex flex-col items-center justify-center  p-0">
          <li className="flex items-center gap-2  ">
            <Mail className="w-4 h-4" />
            <a href="mailto:dukanda@gmail.com" className="hover:underline">
              dukanda@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:974821682" className="hover:underline">
              974821682
            </a>
          </li>
        </ul>

        {/* Social Media */}
        <div className="w-full pt-4 flex justify-center gap-3">
          {social.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Social media link to ${icon}`}
              className="text-muted-foreground hover:text-primary transition"
            >
              <i className={`fab ${icon} text-lg`}></i>
            </a>
          ))}
        </div>

        {/* Login / Register */}
        <div className="pt-6 border-t border-border flex flex-col gap-2.5">
          <Link href="/auth/login" passHref>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-green-800 font-semibold"> 
              {/* <LogIn className="w-4 h-4" /> */}
              Entrar
            </Button>
          </Link>
          <Link href="/auth/register" passHref>
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2 bg-[var(--thm-primary)] text-white font-semibold hover:bg-orange-500 transition">
              {/* <UserPlus className="w-4 h-4" /> */}
              Criar Conta
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
