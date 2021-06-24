import React, {
  useState,
  useEffect,
  useMemo,
  ReactElement,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "./../../interfaces/redux";

import { ICategoriesState } from "../../redux/categories/reducer";
import { fetchCategories } from "../../redux/categories/actions";
import { IInterest } from "../../interfaces";
import { IAuthState } from "../../redux/auth/reducer";

import Button from "../FormElements/Button/Button";
import Image from "../Image";

import "./index.scss";
import { updateInterests } from "../../redux/auth/actions";

export const CategoryBox: React.FC<{
  data: API.Category;
  onSelect: (id: number) => void;
  selected: boolean;
}> = ({ data, selected, onSelect }): ReactElement => {
  return (
    <div
      onClick={() => onSelect(data.id)}
      className={`category-box ${selected ? "category-box--selected" : ""}`}
    >
      <div className="category-box__content">
        {data?.icon && <Image src={data?.icon} alt={data.name} />}
        <span>{data.name}</span>
      </div>
    </div>
  );
};

export const CategoriesList: React.FC<{ edit?: boolean }> = ({
  edit = false,
}): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const categories: ICategoriesState = useSelector<
    IRootState,
    ICategoriesState
  >((state): ICategoriesState => state.Categories);

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const onCategoryClick = (id: number) => {
    selectedCategories.includes(id)
      ? setSelectedCategories((state) => state.filter((e) => e !== id))
      : setSelectedCategories((state) => [...state, id]);
  };

  const onSubmitCategories = useCallback(() => {
    auth?.user?.id &&
      dispatch(
        updateInterests(auth?.user?.id, { interests: selectedCategories })
      );
  }, [selectedCategories, dispatch, auth]);

  const checkChanges = useCallback(() => {
    return (
      auth.user.interests.length === selectedCategories.length &&
      auth.user.interests.every((value, index) => {
        return value.id === selectedCategories[index];
      })
    );
  }, [selectedCategories, auth]);

  const mainCategories = useMemo(() => {
    if (categories?.list?.length > 0) {
      return categories.list.filter(
        (category: API.Category) => !category.parent_id && category.is_active
      );
    }
    return [];
  }, [categories]);

  useEffect((): void => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (auth?.user?.interests?.length > 0) {
      const interestsIds = auth.user.interests?.map(
        (interest: IInterest) => interest.id
      );
      setSelectedCategories(interestsIds);
    }
  }, [auth]);

  return (
    <div className={`categories-list ${edit && "edit"}`}>
      <div className="row">
        <div className={edit ? "col-24" : "col-lg-20 offset-lg-2"}>
          <div className={edit ? "category-row row" : "row"}>
            {mainCategories?.length > 0 &&
              mainCategories?.map((category: API.Category, index: number) => {
                return (
                  <div
                    className={edit ? "category-item col" : "col-12 col-lg-8"}
                    key={index}
                  >
                    <CategoryBox
                      data={category}
                      selected={selectedCategories?.includes(category.id)}
                      onSelect={(id: number) => onCategoryClick(id)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {edit ? (
        <div className="categories-list__save">
          <Button
            loading={auth.loading}
            disabled={checkChanges()}
            onClick={() => onSubmitCategories()}
            className="primary"
          >
            Save changes
          </Button>
        </div>
      ) : (
        <div className="categories-list__submit">
          <Button
            loading={auth.loading}
            disabled={selectedCategories?.length < 1}
            onClick={() => onSubmitCategories()}
            className="primary"
          >
            Ok, let’s start
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoriesList;
