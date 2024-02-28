import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { WebinarSidebarStyles } from "./WebinarSidebarStyles";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { IconCamera, IconSquares } from "../../../../icons";
import { useTranslation } from "react-i18next";
import WebinarSidebarButtons from "./Buttons";
import ProductPrices from "@/components/ProductPrices";

const WebinarSidebar = () => {
  const {
    webinar: { value: webinarObject },
  } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  return (
    <WebinarSidebarStyles>
      <PricingCard mobile={isMobile}>
        <Title level={4} as="h2">
          {webinarObject?.name}
        </Title>
        {/* PRICE */}
        <ProductPrices
          price={webinarObject?.product?.price}
          taxRate={webinarObject?.product?.tax_rate}
          oldPrice={webinarObject?.product?.price_old || undefined}
        />
        {/* BUTTONS */}
        <WebinarSidebarButtons />
        {/* FOOTER */}
        <div className="pricing-card-features">
          {/* {webinarObject?.place && (
          <IconText icon={<IconLocation />} text={`${webinarObject?.place}`} />
        )} */}
          {webinarObject?.duration && (
            <IconText
              icon={<IconCamera />}
              text={`${t("Duration")}: ${webinarObject.duration} ${
                webinarObject.duration === "1" ? t("Hour") : t("Hours")
              }`}
            />
          )}
          {webinarObject?.users_count ? (
            <IconText
              icon={<IconSquares />}
              text={`${t("Students")}: ${webinarObject?.users_count}`}
            />
          ) : (
            ""
          )}
        </div>
      </PricingCard>
    </WebinarSidebarStyles>
  );
};

export default WebinarSidebar;
