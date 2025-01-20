import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const video = document.querySelector("#Home video");

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.30, // Aktiviert bei 50 % Sichtbarkeit
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    // Video sichtbar: Quelle setzen und laden
                    const source = video.querySelector("source");
                    source.src = source.dataset.src;
                    video.load();
                } else {
                    // Video unsichtbar: Quelle leeren und pausieren
                    video.pause();
                    const source = video.querySelector("source");
                    source.src = ""; // Quelle leeren
                    video.load(); // Lädt das Video mit leerer Quelle
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        observer.observe(video);

        return () => {
            observer.disconnect(); // Aufräumen, wenn die Komponente entfernt wird
        };
    }, []);

    return (
        <>
            <div id="Home">
                <div>
                    <div>
                        <video autoPlay muted loop preload="none">
                            <source data-src="/Video/Secret-Animation.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
}
