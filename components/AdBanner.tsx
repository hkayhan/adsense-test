"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
/*
      if ((window as any).adsbygoogle && !(window as any).adsbygoogle.loaded)
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
*/

    } catch (error: any) {
      console.log("error.message",error.message);
    }
  }, []);


  console.log("dataAdSlot",dataAdSlot);
  console.log("dataAdFormat",dataAdFormat);
  console.log(dataFullWidthResponsive);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8034519108259358"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
};

export default AdBanner;
