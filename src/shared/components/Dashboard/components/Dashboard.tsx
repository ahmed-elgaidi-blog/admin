"use client";
import styles from "../styles/index.module.css";
import { usePathname } from "next/navigation";
<<<<<<< HEAD:src/shared/components/Dashboard/components/Dashboard.tsx
import Breadcrumbs from "@/shared/components/Common/Breadcrumbs/components";
import Sidebar from "@/shared/layouts/SideBar";
=======
import Breadcrumbs from "@/components/Common/Breadcrumbs/components";
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c:src/components/Dashboard/components/Dashboard.tsx
import { ISidebarLink } from "../types/index.types";
import { getActiveSection } from "../helpers/getActivationSection";
import { generateSidebarLinks } from "../helpers/generateSidebarLinks";
import { useAppSelector } from "@/shared/rtk/hooks";
import { renderMainContent } from "./renderMainContent";
import Sidebar from "@/layouts/SideBar";
import { PathHelper } from "@/helpers/path/path.helper";

/**
 * Dashboard component that displays content based on the current section and path.
 * It provides a sidebar with links, breadcrumbs, and main content.
 *
 * @returns The rendered Dashboard component.
 */
export default function Dashboard() {
	let currentPath = usePathname();

	const { sections } = useAppSelector((state) => state.uiDataSlice);

	const activeSection = getActiveSection(currentPath, sections);

	const activeSectionData = activeSection ? sections[activeSection] : undefined;

	const sidebarLinks: ISidebarLink[] = generateSidebarLinks(activeSectionData, activeSection);

	const isHomeSection = currentPath.includes("/home");

<<<<<<< HEAD:src/shared/components/Dashboard/components/Dashboard.tsx
	const isNewOrUpdateSection = currentPath.includes("/new") || currentPath.includes("/update");
=======
	const isNewOrUpdateSection = PathHelper.isNewOrUpdateSection(currentPath);
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c:src/components/Dashboard/components/Dashboard.tsx

	return (
		<div className={styles.dashboard_container}>
			<Breadcrumbs />
			<div className={styles.dashboard_main}>
				<Sidebar links={sidebarLinks} />
				<div className={styles.dashboard_content}>{renderMainContent(isNewOrUpdateSection, isHomeSection, activeSectionData, currentPath)}</div>
			</div>
		</div>
	);
}
