import { createGlobalStyle } from "styled-components";
import Drawer from "rc-drawer";
import { isMobile } from "react-device-detect";
import Notifications from "@/components/Notifications";
import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

const GlobalDrawer = createGlobalStyle`
    .drawer-handle {
      display: none;
    }
    .drawer-content {
      background-color: ${({ theme }) => theme.gray4};
      
    }
  .notifications-drawer {     
 
  &__content {
    background-color: ${({ theme }) => theme.gray4} !important;
 

    &__header {
        background-color: white !important;
        padding: 33px 27px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        button {
            all:unset;
            cursor: pointer;
        }
        }
    &--clear-all {
      padding: 0px 20px;
        margin-bottom: 20px;
        button {
            all:unset;
            cursor: pointer;
            font-size: 13px;
            font-family: ${({ theme }) => theme.font};
            color: ${({ theme }) => theme.primaryColor};
            font-weight: 700;
        }
    }
    &--list {
        padding: 0px 20px;     
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
   
    }      


    }
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NotificationsDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const { fetchNotifications } = useContext(EscolaLMSContext);

  const handleClose = () => {
    onClose();
    fetchNotifications();
  };

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      width={isMobile ? "100%" : "500px"}
      placement="right"
      className="notifications-drawer"
      // @ts-ignore
      classNames={{
        wrapper: "notifications-drawer",
        content: "notifications-drawer__content",
      }}
    >
      <GlobalDrawer />

      <Notifications onClose={handleClose} />
    </Drawer>
  );
};

export default NotificationsDrawer;
