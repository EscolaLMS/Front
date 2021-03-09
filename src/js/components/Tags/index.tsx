import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "./../../interfaces/redux";

import { ITagsState } from "../../redux/tags/reducer";
import { fetchTag } from "../../redux/tags/actions";

export const Tags: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const data: ITagsState = useSelector<IRootState, ITagsState>(
    (state): ITagsState => state.Tags
  );

  useEffect((): void => {
    dispatch(fetchTag());
  }, []);

  return (
    <div className="tags">
      {data.loading && <pre>loading...</pre>}
      {data.unique.length !== 0 && (
        <div>
          <p>unique tags are...</p>
          <p>
            {data.unique.map(
              (tag: string): ReactElement => (
                <button key={tag}>{tag} </button>
              )
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Tags;
