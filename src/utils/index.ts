import { EventTypes, Notification, Order } from "@escolalms/sdk/lib/types/api";
import { APP_CONFIG } from "@/config/app";
import { formatDate } from "@/utils/date";

export const getTopicType = (type: string) => type.split("\\")?.pop();

export const getPriceWithTax = (price: number, taxPercentage: number) => {
  const totalTax = ((price / 100) * taxPercentage).toFixed(2);
  const totalPrice = Number(price) + Number(totalTax);
  return totalPrice.toFixed(2);
};

export const getOrderProductsNames = (order: Order | undefined | null) => {
  if (!order) return "";
  return order.items?.map((item) => item.name).join(", ");
};

export const getNotificationTranslationObject = (
  notification: Notification
): {
  translation: string;
  object?: { name?: string; amount?: number; date?: string; user?: string };
} => {
  const translationPrefix = "Notifications.";
  const translation = `${translationPrefix}${notification.event}`;
  switch (notification.event) {
    // STATIONARY EVENT
    case EventTypes.StationaryEventAuthorAssigned:
      return {
        translation,
        object: { name: notification.data.stationaryEvent?.name || "" },
      };
    case EventTypes.StationaryEventAuthorUnassigned:
      return {
        translation,
        object: { name: notification.data.stationaryEvent?.name || "" },
      };
    case EventTypes.StationaryEventAssigned:
      return {
        translation,
        object: { name: notification.data.stationaryEvent?.name || "" },
      };
    case EventTypes.StationaryEventUnassigned:
      return {
        translation,
        object: { name: notification.data.stationaryEvent?.name || "" },
      };
    // CART
    case EventTypes.AbandonedCartEvent:
      return { translation };
    case EventTypes.OrderCancelled:
      return { translation };
    case EventTypes.OrderCreated:
      return { translation };
    case EventTypes.OrderPaid:
      return {
        translation,
        object: { name: getOrderProductsNames(notification.data.order) || "" },
      };
    case EventTypes.ProductableAttached:
      return {
        translation,
        object: { name: notification.data.productable?.name || "" },
      };
    case EventTypes.ProductableDetached:
      return {
        translation,
        object: { name: notification.data.productable?.name || "" },
      };
    case EventTypes.ProductAddedToCart:
      return {
        translation,
        object: { name: notification.data.product?.name || "" },
      };
    case EventTypes.ProductAttached:
      return {
        translation,
        object: { name: notification.data.product?.name || "" },
      };
    case EventTypes.ProductBought:
      return {
        translation,
        object: { name: notification.data.product?.name || "" },
      };
    case EventTypes.ProductDetached:
      return {
        translation,
        object: { name: notification.data.product?.name || "" },
      };
    case EventTypes.ProductRemovedFromCart:
      return {
        translation,
        object: { name: notification.data.product?.name || "" },
      };
    // PAYMENT
    case EventTypes.PaymentCancelled:
      return {
        translation,
        object: {
          amount: notification.data.payment?.amount || 0,
          name: getOrderProductsNames(notification.data.payment?.payable),
        },
      };
    case EventTypes.PaymentFailed:
      return {
        translation,
        object: {
          amount: notification.data.payment?.amount || 0,
          name: getOrderProductsNames(notification.data.payment?.payable),
        },
      };
    case EventTypes.PaymentRegistered:
      return {
        translation,
        object: {
          amount: notification.data.payment?.amount || 0,
        },
      };
    case EventTypes.PaymentSuccess:
      return {
        translation,
        object: {
          amount: notification.data.payment?.amount || 0,
          name: getOrderProductsNames(notification.data.payment?.payable),
        },
      };
    // COURSE
    case EventTypes.CourseAccessFinished:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseAccessStarted:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseAssigned:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseDeadlineSoon:
      return {
        translation,
        object: {
          name: notification.data.course?.title || "",
          date: formatDate(
            notification.data.course?.active_to,
            APP_CONFIG.defaultDateTimeFormat
          ),
        },
      };
    case EventTypes.CoursedPublished:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseFinished:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseStarted:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseStatusChanged:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseTutorAssigned:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseTutorUnassigned:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.CourseUnassigned:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    case EventTypes.TopicFinished:
      return {
        translation,
        object: { name: notification.data.course?.title || "" },
      };
    // TOPIC
    case EventTypes.TopicTypeChanged:
      return {
        translation,
        object: { name: notification.data.topicContent?.value || "" },
      };
    // CONSULTATIONS
    case EventTypes.ReportTerm:
      return {
        translation,
        object: {
          name: notification.data.consultationTerm?.consultation.name || "",
          date: formatDate(
            notification.data.consultationTerm?.executed_at,
            APP_CONFIG.defaultDateTimeFormat
          ),
          user: `${notification.data.consultationTerm?.user?.first_name} ${notification.data.consultationTerm?.user?.last_name}`,
        },
      };
    case EventTypes.ApprovedTerm:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    case EventTypes.ApprovedTermWithTrainer:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    case EventTypes.ChangeTerm:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    case EventTypes.RejectTerm:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    case EventTypes.RejectTermWithTrainer:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    case EventTypes.ReminderAboutTerm:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    case EventTypes.ReminderTrainerAboutTerm:
      return {
        translation,
        object: {
          date:
            formatDate(notification.data.consultationTerm?.executed_at) || "",
        },
      };
    default:
      return { translation };
  }
};
