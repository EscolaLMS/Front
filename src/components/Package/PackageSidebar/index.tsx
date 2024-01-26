import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import PricingCard from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import { IconText, Text } from "@escolalms/components";
import ProductPrices from "@/components/ProductPrices";
import { DetailsSidebarContainer } from "@/components/DetailsSidebarContainer";
import { IconTime, IconSquares } from "@/icons/index";
import { PackageSidebarTags } from "./Tags";
import { PricingCardTitle } from "@/components/PricingCard/PricingCardTitle";
import { PackageSidebarButtons } from "./Buttons";

export const PackageSidebar = () => {
  const { product } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const productValue = product.value;

  if (!productValue) {
    return null;
  }

  return (
    <DetailsSidebarContainer>
      <PricingCard mobile={isMobile}>
        <PricingCardTitle title={productValue.name} />
        <div className={isMobile ? "pricing-card-footer" : ""}>
          <div>
            <ProductPrices
              price={productValue.price}
              oldPrice={productValue.price_old}
              taxRate={productValue.tax_rate}
            />
          </div>
          <div>
            <PackageSidebarButtons product={productValue} />
            {!isMobile && (
              <>
                <Text size="12"> {t("EventPage.30Days")}</Text>
                <Text size="12"> {t("PackagePage.PackageIncludes")}</Text>
                <PackageSidebarTags />
                <div className="pricing-card-features">
                  {productValue.duration && (
                    <IconText
                      icon={<IconTime />}
                      text={`${t("Duration")}: ${productValue.duration}`}
                    />
                  )}
                  {productValue.users_count && (
                    <IconText
                      icon={<IconSquares />}
                      text={`${t("Students")}: ${productValue.users_count}`}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </PricingCard>
    </DetailsSidebarContainer>
  );
};
