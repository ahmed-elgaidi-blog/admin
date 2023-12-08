import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { useAppDispatch } from "@/rtk/hooks";
import { deleteItem, togglePublishItem } from "@/rtk/slices/listSlice";
import { IHandlePublishItemHook } from "./types/index.types";

export const useHandlePublishItem = () => {
	const dispatch = useAppDispatch();

	const handlePublishItem = async ({
		item,
		isPostsOrSeries,
		setLoader,
		buttonOperation,
	}: IHandlePublishItemHook) => {
		setLoader({ isLoading: true, buttonOperation });

		//! access data or error for the modal
		const { data, error } = await handleApiRequest({
			endpoint: `${isPostsOrSeries}/${
				item.isPublished ? "unpublish" : "publish"
			}/${item._id}`,
			method: "POST",
		});
		dispatch(togglePublishItem(item._id));
		dispatch(deleteItem(item._id));

		setLoader({ isLoading: false, buttonOperation });
	};

	return { handlePublishItem };
};
