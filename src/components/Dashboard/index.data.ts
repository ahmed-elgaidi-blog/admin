import { IAnalyticsDataItem } from "../Common/Home/index.types";
import { IListItem } from "../Common/List/index.types";
import { ISectionData } from "./index.types";

export const sections: Record<string, ISectionData> = {
	posts: {
		links: [
			"Home",
			"New",
			"Latest",
			"Trending",
			"Popular",
			"Unpopular",
			"Published",
			"Unpublished",
		],
		formButtonText: {
			new: "Create Post",
			update: "Update Post",
		},
	},
	series: {
		links: [
			"Home",
			"New",
			"Latest",
			"Trending",
			"Popular",
			"Unpopular",
			"Published",
			"Unpublished",
		],
		formButtonText: {
			new: "Create Series",
			update: "Update Series",
		},
	},
};

export const listItems: IListItem[] = [
	{
		_id: "655dfa3db8985dedffc81cd8",
		title: "How to be a good developer part 5",
		slug: "How-to-be-a-good-developer-part-5",
		description: "this is a description",
		views: 0,
		content: "this is a content",
		tags: [
			{
				_id: "655dd038e5ead433d1c37d4f",
				name: "javascirpt",
				createdAt: "2023-11-22T09:56:08.177Z",
				updatedAt: "2023-11-22T09:56:08.177Z",
			},
			{
				_id: "655dd03ae5ead433d1c37d51",
				name: "javascirpt2",
				createdAt: "2023-11-22T09:56:10.685Z",
				updatedAt: "2023-11-22T09:56:10.685Z",
			},
		],
		keywords: [
			{
				_id: "655de7491d0c008236692e32",
				name: "database",
				createdAt: "2023-11-22T11:34:33.844Z",
				updatedAt: "2023-11-22T11:34:33.844Z",
			},
			{
				_id: "655de7581d0c008236692e34",
				name: "database2",
				createdAt: "2023-11-22T11:34:48.047Z",
				updatedAt: "2023-11-22T11:34:48.047Z",
			},
		],
		series: [
			{
				_id: "655de7ed3b66e6aa373b530e",
				title: "Series about database modeling1",
				description: "this is the descriptoin of the series!1",
				createdAt: "2023-11-22T11:37:17.690Z",
				updatedAt: "2023-11-22T11:37:17.690Z",
			},
			{
				_id: "655de7f83b66e6aa373b5310",
				title: "Series about database modeling2",
				description: "this is the descriptoin of the series!2",
				createdAt: "2023-11-22T11:37:28.979Z",
				updatedAt: "2023-11-22T11:37:28.979Z",
			},
		],
		isPublished: true,
		createdAt: "2023-11-22T12:55:25.859Z",
		updatedAt: "2023-11-22T14:41:31.697Z",
		isPublishedAt: "2023-11-22T14:41:31.692Z",
	},
	{
		_id: "655de9510398c5087436811a",
		title: "How to be a good developer part 4",
		description: "this is a description",
		content: "this is a content",
		views: 0,
		tags: [
			{
				_id: "655dd038e5ead433d1c37d4f",
				name: "javascirpt",
				createdAt: "2023-11-22T09:56:08.177Z",
				updatedAt: "2023-11-22T09:56:08.177Z",
			},
			{
				_id: "655dd03ae5ead433d1c37d51",
				name: "javascirpt2",
				createdAt: "2023-11-22T09:56:10.685Z",
				updatedAt: "2023-11-22T09:56:10.685Z",
			},
		],
		keywords: [
			{
				_id: "655de7491d0c008236692e32",
				name: "database",
				createdAt: "2023-11-22T11:34:33.844Z",
				updatedAt: "2023-11-22T11:34:33.844Z",
			},
			{
				_id: "655de7581d0c008236692e34",
				name: "database2",
				createdAt: "2023-11-22T11:34:48.047Z",
				updatedAt: "2023-11-22T11:34:48.047Z",
			},
		],
		series: [
			{
				_id: "655de7ed3b66e6aa373b530e",
				title: "Series about database modeling1",
				description: "this is the descriptoin of the series!1",
				createdAt: "2023-11-22T11:37:17.690Z",
				updatedAt: "2023-11-22T11:37:17.690Z",
			},
			{
				_id: "655de7f83b66e6aa373b5310",
				title: "Series about database modeling2",
				description: "this is the descriptoin of the series!2",
				createdAt: "2023-11-22T11:37:28.979Z",
				updatedAt: "2023-11-22T11:37:28.979Z",
			},
		],
		isPublished: true,
		createdAt: "2023-11-22T11:43:13.933Z",
		updatedAt: "2023-11-22T14:38:06.770Z",
		isPublishedAt: "2023-11-22T14:38:06.770Z",
		slug: "How-to-be-a-good-developer-part-4",
	},
	{
		_id: "655de9500398c50874368112",
		title: "How to be a good developer part 3",
		description: "this is a description",
		views: 0,
		content: "this is a content",
		tags: [
			{
				_id: "655dd038e5ead433d1c37d4f",
				name: "javascirpt",
				createdAt: "2023-11-22T09:56:08.177Z",
				updatedAt: "2023-11-22T09:56:08.177Z",
			},
			{
				_id: "655dd03ae5ead433d1c37d51",
				name: "javascirpt2",
				createdAt: "2023-11-22T09:56:10.685Z",
				updatedAt: "2023-11-22T09:56:10.685Z",
			},
		],
		keywords: [
			{
				_id: "655de7491d0c008236692e32",
				name: "database",
				createdAt: "2023-11-22T11:34:33.844Z",
				updatedAt: "2023-11-22T11:34:33.844Z",
			},
			{
				_id: "655de7581d0c008236692e34",
				name: "database2",
				createdAt: "2023-11-22T11:34:48.047Z",
				updatedAt: "2023-11-22T11:34:48.047Z",
			},
		],
		series: [
			{
				_id: "655de7ed3b66e6aa373b530e",
				title: "Series about database modeling1",
				description: "this is the descriptoin of the series!1",
				createdAt: "2023-11-22T11:37:17.690Z",
				updatedAt: "2023-11-22T11:37:17.690Z",
			},
			{
				_id: "655de7f83b66e6aa373b5310",
				title: "Series about database modeling2",
				description: "this is the descriptoin of the series!2",
				createdAt: "2023-11-22T11:37:28.979Z",
				updatedAt: "2023-11-22T11:37:28.979Z",
			},
		],
		isPublished: true,
		createdAt: "2023-11-22T11:43:12.765Z",
		updatedAt: "2023-11-22T14:38:02.026Z",
		isPublishedAt: "2023-11-22T14:38:02.025Z",
		slug: "How-to-be-a-good-developer-part-3",
	},
	{
		_id: "655de94f0398c5087436810a",
		title: "How to be a good developer part 2",
		description: "this is a description",
		views: 0,
		content: "this is a content",
		tags: [
			{
				_id: "655dd038e5ead433d1c37d4f",
				name: "javascirpt",
				createdAt: "2023-11-22T09:56:08.177Z",
				updatedAt: "2023-11-22T09:56:08.177Z",
			},
			{
				_id: "655dd03ae5ead433d1c37d51",
				name: "javascirpt2",
				createdAt: "2023-11-22T09:56:10.685Z",
				updatedAt: "2023-11-22T09:56:10.685Z",
			},
		],
		keywords: [
			{
				_id: "655de7491d0c008236692e32",
				name: "database",
				createdAt: "2023-11-22T11:34:33.844Z",
				updatedAt: "2023-11-22T11:34:33.844Z",
			},
			{
				_id: "655de7581d0c008236692e34",
				name: "database2",
				createdAt: "2023-11-22T11:34:48.047Z",
				updatedAt: "2023-11-22T11:34:48.047Z",
			},
		],
		series: [
			{
				_id: "655de7ed3b66e6aa373b530e",
				title: "Series about database modeling1",
				description: "this is the descriptoin of the series!1",
				createdAt: "2023-11-22T11:37:17.690Z",
				updatedAt: "2023-11-22T11:37:17.690Z",
			},
			{
				_id: "655de7f83b66e6aa373b5310",
				title: "Series about database modeling2",
				description: "this is the descriptoin of the series!2",
				createdAt: "2023-11-22T11:37:28.979Z",
				updatedAt: "2023-11-22T11:37:28.979Z",
			},
		],
		isPublished: true,
		createdAt: "2023-11-22T11:43:11.229Z",
		updatedAt: "2023-11-22T14:37:56.582Z",
		isPublishedAt: "2023-11-22T14:37:56.581Z",
		slug: "How-to-be-a-good-developer-part-2",
	},
	{
		_id: "655de94b0398c50874368102",
		title: "How to be a good developer part1 | Updated",
		description: "this is a description",
		views: 0,
		content: "this is a content",
		tags: [
			{
				_id: "655dd038e5ead433d1c37d4f",
				name: "javascirpt",
				createdAt: "2023-11-22T09:56:08.177Z",
				updatedAt: "2023-11-22T09:56:08.177Z",
			},
			{
				_id: "655dd03ae5ead433d1c37d51",
				name: "javascirpt2",
				createdAt: "2023-11-22T09:56:10.685Z",
				updatedAt: "2023-11-22T09:56:10.685Z",
			},
		],
		keywords: [
			{
				_id: "655de7491d0c008236692e32",
				name: "database",
				createdAt: "2023-11-22T11:34:33.844Z",
				updatedAt: "2023-11-22T11:34:33.844Z",
			},
			{
				_id: "655de7581d0c008236692e34",
				name: "database2",
				createdAt: "2023-11-22T11:34:48.047Z",
				updatedAt: "2023-11-22T11:34:48.047Z",
			},
		],
		series: [
			{
				_id: "655de7ed3b66e6aa373b530e",
				title: "Series about database modeling1",
				description: "this is the descriptoin of the series!1",
				createdAt: "2023-11-22T11:37:17.690Z",
				updatedAt: "2023-11-22T11:37:17.690Z",
			},
			{
				_id: "655de7f83b66e6aa373b5310",
				title: "Series about database modeling2",
				description: "this is the descriptoin of the series!2",
				createdAt: "2023-11-22T11:37:28.979Z",
				updatedAt: "2023-11-22T11:37:28.979Z",
			},
		],
		isPublished: true,
		createdAt: "2023-11-22T11:43:07.066Z",
		updatedAt: "2023-11-22T14:37:47.968Z",
		isPublishedAt: "2023-11-22T14:37:47.966Z",
		slug: "How-to-be-a-good-developer-part1-or-Updated",
	},
];

const postsAnalyticsData: IAnalyticsDataItem[] = [
	{ title: "Total Posts Views:", value: 1000, unit: "Views" },
	{ title: "Total Posts:", value: 1000, unit: "Posts" },
	{ title: "Total Published Posts:", value: 1000, unit: "Posts" },
	{ title: "Total Unpublished Posts:", value: 1000, unit: "Posts" },
];

const seriesAnalyticsData: IAnalyticsDataItem[] = [
	{ title: "Total Series Views:", value: 1200, unit: "Views" },
	{ title: "Total Series:", value: 900, unit: "Series" },
	{ title: "Total Published Series:", value: 700, unit: "Series" },
	{ title: "Total Unpublished Series:", value: 200, unit: "Series" },
];

export const analyticsDataByPath: Record<string, IAnalyticsDataItem[]> = {
	"/dashboard/posts/home": postsAnalyticsData,
	"/dashboard/series/home": seriesAnalyticsData,
};
