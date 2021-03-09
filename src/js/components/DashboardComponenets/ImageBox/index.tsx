import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import Image from "../../Image";
import { gql, useQuery } from "@apollo/client";
import { ContentClient } from "../../../index";

import "./index.scss";

const GET_CONTENT = gql`
  {
    contentSettings {
      dashboard {
        becomeAVolunteerBox {
          image {
            mediaItemUrl
          }
          title
          url
          urlButtonText
        }
      }
    }
  }
`;

const ImageBox: React.FC = (): ReactElement => {
  const content = useQuery(GET_CONTENT, {
    client: ContentClient,
  });

  return (
    <>
      {content?.data?.contentSettings?.dashboard?.becomeAVolunteerBox && (
        <aside className="image-box">
          <span>
            {
              content?.data?.contentSettings?.dashboard?.becomeAVolunteerBox
                .title
            }
          </span>
          <picture>
            <Image
              src={
                content?.data?.contentSettings?.dashboard?.becomeAVolunteerBox
                  .image.mediaItemUrl
              }
              alt="img"
            />
          </picture>
          <div className="image-box__shadow" />
          <Link
            to={
              content?.data?.contentSettings?.dashboard?.becomeAVolunteerBox.url
            }
          >
            {
              content?.data?.contentSettings?.dashboard?.becomeAVolunteerBox
                .urlButtonText
            }
          </Link>
        </aside>
      )}
    </>
  );
};

export default ImageBox;
