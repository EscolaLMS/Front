import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.svg";
import SocialLinks from "@/components/SocialLinks";
import { chunks } from "@/utils/array";
import { API } from "@escolalms/sdk/lib";
import { usePages } from "@/escolalms/sdk/hooks/usePages";
import "./index.scss";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

// TODO: This is not a universal solution. Problem with translation of slugs (in url).
const seperatedPagesSlugs = ["privacy-policy", "terms-of-service"];

const Footer = () => {
  const { settings } = useContext(EscolaLMSContext);

  const customLogo = settings.global?.logo || Logo;

  const { collection } = usePages();

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const dividedPages = useMemo(() => {
    return chunks(
      collection.filter(
        (page: API.PageListItem) => !seperatedPagesSlugs.includes(page.slug)
      ),
      5
    );
  }, [collection]);

  const seperatedPages = useMemo(() => {
    return collection.filter((page: API.PageListItem) =>
      seperatedPagesSlugs.includes(page.slug)
    );
  }, [collection]);

  return <footer></footer>;
};

export default Footer;
