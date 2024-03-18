import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";

type PogressState = {
  data: API.Cart | undefined;
  loaded: boolean;
  loading: boolean;
};

export const useCart = () => {
  const [cart, setCart] = useState<PogressState>({
    data: undefined,
    loaded: false,
    loading: false,
  });
  const { user, fetchCart, removeFromCart } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (user?.value && !user.loading && !cart.loading && !cart.loaded) {
      setCart({
        ...cart,
        loading: true,
      });
      fetchCart()
        .then((res) => {
          const response = res as API.DefaultResponseSuccess<API.Cart>;
          if (response.success) {
            setCart({
              data: response.data,
              loaded: true,
              loading: false,
            });
          }
        })
        .catch(() =>
          setCart({
            ...cart,
            loaded: true,
            loading: false,
          })
        );
    }
  }, [user, cart, fetchCart]);

  return {
    cart,
    fetchCart,
    removeFromCart,
  };
};
