import React, { ReactElement, useState } from "react";

// import { Dispatch } from "redux";
// import { useDispatch, useSelector } from "react-redux";

import { INotification } from "../../../../interfaces/notifications";

import { Link } from "react-router-dom";

import UserLayout from "../../../../layouts/UserLayout";
import Button from "../../../../components/FormElements/Button/Button";

import { differenceInMinutes } from "date-fns";

import "./index.scss";

const MOCK: INotification[] = [
  {
    id: 1,
    date: "2021-02-15T11:40:44.000000Z",
    content:
      "<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
    link: "/my-achievements",
  },
  {
    id: 2,
    date: "2021-02-15T11:40:44.000000Z",
    content:
      "<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
    link: "/my-achievements",
  },
  {
    id: 3,
    date: "2021-02-15T11:40:44.000000Z",
    content:
      "<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
    link: "/my-achievements",
  },
];

const Notifications: React.FC = (): ReactElement => {
  // const dispatch: Dispatch = useDispatch();

  const [start] = useState(new Date());
  const [limit, setLimit] = useState(12);

  const getDiff = (nDate: string) => {
    const minutes = differenceInMinutes(start, new Date(nDate));
    const hours = minutes / 60;
    const days = hours / 24;
    if (days >= 1) {
      return `${days.toFixed(0)} days`;
    }
    if (hours >= 1) {
      return `${hours.toFixed(0)} hrs ${(minutes % 60).toFixed(0)} min`;
    }
    return `${minutes} min`;
  };

  return (
    <UserLayout title="Notifciations">
      <article className="notifications">
        {/* TODO data from api */}
        {MOCK?.length > 0 ? (
          <ul>
            {MOCK.map((notification: INotification) => (
              <li key={notification.id}>
                <time>{getDiff(notification.date)} ago</time>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: notification.content,
                    }}
                  />
                  <Link to={notification.link}>Check out</Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>You currently have no notifications</p>
        )}

        {limit <= MOCK.length && (
          <Button
            onClick={() => setLimit((limit) => limit + 12)}
            className="transparent"
          >
            Show older notifications
          </Button>
        )}
      </article>
    </UserLayout>
  );
};

export default Notifications;
