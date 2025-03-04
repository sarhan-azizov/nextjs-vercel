"use client"

import React, { useState } from "react";
import styles from "../../page.module.css";

export default function Page() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [articles, _] = useState(["1","2"]);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                articles {articles.length}
            </main>
        </div>
    );
}
