"use client";
import React, { useEffect } from "react";

export const BootstrapClient = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return <div>BootstrapClient</div>;
};
