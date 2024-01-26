import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { isMobile } from "react-device-detect";

interface Props {
  title: string;
}

export const PricingCardTitle = ({ title }: Props) => {
  if (isMobile) {
    return (
      <Title level={5} as="h5">
        {title}
      </Title>
    );
  }
  return (
    <Title level={4} as="h2">
      {title}
    </Title>
  );
};
