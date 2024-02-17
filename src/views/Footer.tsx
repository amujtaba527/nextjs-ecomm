import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from '/public/images/Logo.webp'
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';


function Footer() {
  return (
    <footer>
      <div>
        <footer className=" pt-8 mt-4 px-4  ">
          <div className=" ">
            <div className="grid grid-cols-12 justify-between gap-y-8 ">
              <div className=" col-span-12  sm:col-span-5 lg:col-span-4 ">
                <div className="  flex gap-4 flex-col justify-around h-full  ">
                  <Link href={"/"}>
                  <Image src={logo}  alt='not shows'/>
                  </Link>
                  <p className={"leading-7 text-lg my-4 [&:not(:first-child)]:mt-6"}>
                    Small, artisan label that offers a thoughtfully curated
                    collection of high quality everyday essentials made.
                  </p>
                  <div className={"flex gap-2"}>
                    <div>
                      <Twitter />
                    </div>
                    <div>
                      <Facebook />
                    </div>
                    <div>
                      <Linkedin />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3  sm:col-span-7 lg:col-span-7  col-span-12 lg:col-start-7">
                <div>
                  <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                    Company
                  </h2>
                  <ul className="text-gray-600 ">
                    <li className="mb-4">
                      <p>About Us</p>
                    </li>
                    <li className="mb-4">
                      <p>Terms of Use</p>
                    </li>
                    <li className="mb-4">
                      <p>Privacy Policy</p>
                    </li>
                    <li className="mb-4">
                      <p>How it Works</p>
                    </li>
                    <li className="mb-4">
                      <p>Contact Us</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase  ">
                    Support
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                      <p>Support Carrier</p>
                    </li>
                    <li className="mb-4">
                      <p>24h Service</p>
                    </li>
                    <li className="mb-4">
                      <p>Quick Chat</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className=" mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                    Contact
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                      <p>Whatsapp</p>
                    </li>
                    <li className="mb-4">
                      <p>Support 24h</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mt-16  border-gray-400 sm:mx-auto  " />
            <div className={"flex  justify-between gap-3 flex-wrap p-3  "}>
              <p>Copyright © 2024 Dine Market</p>
              <p>
                Design by. <span className={"font-bold"}>Ahmad Mujtaba</span>
              </p>
              <p>
                Code by. <span className={"font-bold"}>amujtaba527 on github</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
