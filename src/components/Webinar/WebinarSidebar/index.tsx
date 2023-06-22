import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { WebinarSidebarStyles } from "./WebinarSidebarStyles";
import { formatPrice } from "@/utils/index";
import { IconText } from "@escolalms/components";
import { IconCamera, IconSquares } from "../../../icons";
import { useTranslation } from "react-i18next";
import WebinarSidebarButtons from "./Buttons";

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
        <div className="pricing-card-price">
          <Title level={3} as={"h3"}>
            {formatPrice(
              webinarObject?.product?.price,
              webinarObject?.product?.tax_rate
            )}{" "}
            zł
          </Title>
          {webinarObject?.product?.price_old && (
            <div className="pricing-card-discount">
              <Title level={5} as={"h5"}>
                {formatPrice(
                  webinarObject?.product?.price_old,
                  webinarObject?.product?.tax_rate
                )}{" "}
                zł
              </Title>
            </div>
          )}
        </div>
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
