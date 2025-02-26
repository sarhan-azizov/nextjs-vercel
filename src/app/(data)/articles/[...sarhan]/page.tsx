import styles from "../../../page.module.css";

export default async function Page({ params }: Readonly<{ params: Promise<{ sarhan: string }> }>) {
    const slug = (await params).sarhan;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {`article ${slug}`}
            </main>
        </div>
    );
}
