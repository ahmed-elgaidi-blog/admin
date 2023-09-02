"use client";
import React from "react";
import styles from "./index.module.css";
import { ISidebar } from "./index.types";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar({ links }: ISidebar) {
	const currentPathName = usePathname();

	return (
		<div className={styles.sidebar_container}>
			{links.map((el, i) => (
				<Link
					key={i}
					className={`${styles.sidebar_item} ${el.url === currentPathName ? styles.sidebar_item_active : ""}`}
					href={el.url}
				>
					{el.label}
				</Link>
			))}
		</div>
	);
}
