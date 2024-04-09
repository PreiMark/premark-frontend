"use client";

import { Stack } from "@mui/material";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axios.config";
import { useSearchParams } from "next/navigation";

export default function OfferPage() {
  const searchParams = useSearchParams();
  const [offerData, setOfferData] = useState<any>();

  useEffect(() => {
    const fetchOfferData = async () => {
      try {
        const id = searchParams.get("id");
        const res = await axiosInstance.get(`/offer/${id}`);
        if (res) {
          setOfferData(res.data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferData();
  }, [searchParams]);

  return (
    <Stack direction={{ xs: "column", lg: "row" }} spacing={"32px"}>
      <LeftPanel offerData={offerData} />
      <RightPanel offerData={offerData} />
    </Stack>
  );
}
