"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Toolbar = () => {
  return (
    <>
      <Button variant="outline" className="bg-blue-400">
        Start Trial
      </Button>
      <Link
        className={buttonVariants({
          variant: "outline",
        })}
        href="/sign-up"
      >
        Login
      </Link>
    </>
  );
};

export default Toolbar;
