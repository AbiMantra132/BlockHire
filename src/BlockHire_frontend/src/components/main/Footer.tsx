import React from "react";
import { Link } from "react-router";
import P from "../ui/P";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center p-2">
      <div className="w-full bg-[#2F89FC] rounded-3xl flex justify-center items-center flex-col">
        {/* MAIN */}
        <div className="container w-full px-8 py-12 flex flex-row justify-between items-start gap-8">
          {/* TITLE */}
          <div className="flex flex-2 flex-col justify-start items-start gap-3">
            <Link to={"/"}>
              <img src="logo-white.svg" alt="logo" className="w-32" />
            </Link>
            <P alpha={true}>Find the right people for the right jobs.</P>
            <div className="flex flex-row justify-start items-start gap-2 mt-1">
              <Link to={"/"}>
                <img
                  src="/images/home/twitter.svg"
                  alt="sosmed"
                  className="w-8 -rotate-90"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src="/images/home/instagram.svg"
                  alt="sosmed"
                  className="w-8 -rotate-90"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src="/images/home/facebook.svg"
                  alt="sosmed"
                  className="w-8 -rotate-90"
                />
              </Link>
            </div>
          </div>
          {/* NAVIGATION */}
          <div className="flex flex-3 flex-row justify-between items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
              <P alpha={true} type="strong">
                Pages
              </P>
              <Link to={"/"}>
                <P alpha={true}>Home</P>
              </Link>
              <Link to={"/"}>
                <P alpha={true}>Freelancer</P>
              </Link>
              <Link to={"/"}>
                <P alpha={true}>Company</P>
              </Link>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <P alpha={true} type="strong">
                Useful Links
              </P>
              <Link to={"/"}>
                <P alpha={true}>Docs</P>
              </Link>
              <Link to={"/"}>
                <P alpha={true}>Github</P>
              </Link>
              <Link to={"/"}>
                <P alpha={true}>Youtube</P>
              </Link>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <P alpha={true} type="strong">
                Contact
              </P>
              <Link to={"/"}>
                <P alpha={true}>info@blockhire.com</P>
              </Link>
              <Link to={"/"}>
                <P alpha={true}>+62 831-1422-6818</P>
              </Link>
            </div>
          </div>
        </div>
        {/* CREDENTIAL */}
        <div className="flex flex-row justify-center items-center py-6">
          <P alpha={true}>
            Copyright © BlockHire. | Developed by Try and Astungkara Team.
          </P>
        </div>
      </div>
    </footer>
  );
}
