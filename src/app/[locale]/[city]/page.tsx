"use client";

import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FC } from "react";

const CityPage: FC = () => {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const { locale } = useParams();
  console.log(locale, pathname);

  return <h1>{t("title")}</h1>;
};

export default CityPage;
