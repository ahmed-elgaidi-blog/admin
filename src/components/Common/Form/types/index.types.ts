import { ITarget } from "@/hooks/inputs/types/target.type";

/**
 * Interface representing the props for the FormItem component.
 */
export interface IFormItem {
	type: "text" | "textarea" | "url" | "password";
	value?: string | number;
	onChange?: (e: ITarget) => void;
	label: string;
	name: string;
	placeholder: string;
	rowsNumber?: number;
	autoFocus?: boolean;
	required?: boolean;
}

export interface IFromProps {
	buttonText: string | undefined;
	target: string | undefined;
}
