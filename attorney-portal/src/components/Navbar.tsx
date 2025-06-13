"use client";
import Image from "next/image";
import Link from "next/link";
import SVG from "../../public/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { useState } from "react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-gradient-to-r from-slate-950 to-gray-900 text-white p-4 flex items-center md:justify-center justify-around md:gap-10 font-mono shadow-2xl rounded-b-lg"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
              src={SVG}
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full justify-self-center"
            />
            <p className="font-bold text-inherit">Velarde & Asociados</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Áreas de Práctica
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Casos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="space-y-5 justify-center items-center">
          <NavbarMenuItem>
            <Link
              className="w-full"
              color="foreground"
              href="/"
              onClick={handleMenuToggle}
            >
              Inicio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Nosotros
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Áreas de Práctica
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Casos
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Contacto
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
