"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("26ad2f82-b3bc-4b54-bae5-6739aeece816");
  }, []);

  return null;
};
