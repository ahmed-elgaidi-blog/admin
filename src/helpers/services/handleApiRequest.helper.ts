import { appConfig } from "@/config/app.config";
import axiosInstance from "@/services/axiosInstance";
import { IHandleApiRequest } from "./types";
import { AxiosError } from "axios";

export const handleApiRequest = async <D>({
	endpoint,
	dataPayload,
	method,
}: IHandleApiRequest<D>) => {
	try {
		const { data } = await axiosInstance(`${appConfig.apiUrl}${endpoint}`, {
			method: method,
			data: dataPayload,
		});

		return {
			data,
			error: null,
		};
	} catch (error) {
		return {
			error: error as AxiosError,
			data: [],
		};
	}
};
