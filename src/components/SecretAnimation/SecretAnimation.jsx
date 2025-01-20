import { useEffect } from "react";

export default function SecretAnimation() {
    useEffect(() => {

        // Wähle das <video>-Element innerhalb des Elements mit der ID "Home" aus.
        // Der Selektor "#Home video" stellt sicher, dass nur das spezifische Video innerhalb des Containers ausgewählt wird.
        const video = document.querySelector("#SecretAnimation video");

        if (!video) return;
        // Falls #Home > video nicht gefunden wird, wird der restliche Code nicht ausgeführt

        // Definiere die Optionen für den Intersection Observer.
        const options = {
            root: null, // Beobachte das Element relativ zum gesamten Viewport (Standard).
            rootMargin: "0px", // Kein zusätzlicher Rand außerhalb des Viewports.
            threshold: 0.5, // Triggert, wenn mindestens 30 % des Videos sichtbar sind.
        };

        // Funktion, die ausgeführt wird, wenn sich der Sichtbarkeitsstatus des Videos ändert.
        const handleIntersection = (entries) => {
            // Iteriere durch alle beobachteten Elemente (in diesem Fall nur ein Video).
            entries.forEach((entry) => {
                // Das aktuelle Ziel-Element (hier: das Video) aus dem Entry abrufen.
                const video = entry.target;

                // Prüfe, ob das Video sichtbar ist (30 % oder mehr im Viewport).
                if (entry.isIntersecting) {
                    // Wähle das <source>-Element innerhalb des Videos aus.
                    const source = video.querySelector("source");

                    // Falls kein <source>-Element existiert, beende die Verarbeitung für dieses Entry.
                    if (!source) return;

                    // Setze die Quelle des Videos auf die URL, die im `data-src`-Attribut gespeichert ist.
                    source.src = source.dataset.src;

                    // Lade das Video neu, damit die Quelle aktiviert wird.
                    video.load();

                    // Starte die Wiedergabe des Videos.
                    video.play();
                } else {
                    // Falls das Video nicht mehr sichtbar ist, pausiere die Wiedergabe.
                    video.pause();

                    // Wähle das <source>-Element des Videos erneut aus.
                    const source = video.querySelector("source");

                    // Falls kein <source>-Element existiert, beende die Verarbeitung für dieses Entry.
                    if (!source) return;

                    // Entferne die Quelle des Videos, um Bandbreite zu sparen.
                    source.src = "";

                    // Lade das Video neu, um die leere Quelle zu aktivieren.
                    video.load();
                }
            });
        };

        // Erstelle eine neue Instanz des Intersection Observer mit der oben definierten Funktion und Optionen.
        const observer = new IntersectionObserver(handleIntersection, options);

        // Beginne mit der Beobachtung des Videos.
        observer.observe(video);

        // Aufräumaktion: Trenne den Observer, wenn die Komponente entfernt wird.
        // Dies verhindert Speicherlecks und unnötige Überwachung von nicht mehr existierenden DOM-Elementen.
        return () => {
            observer.disconnect();
        };
    }, []);

    // Renderfunktion: Stellt die Struktur der Komponente dar.
    return (
        <>
            <div id="SecretAnimation">
                <div>
                    {/* Das Video, das nur geladen wird, wenn es sichtbar ist. */}
                    <video muted loop preload="none">
                        {/* Quelle des Videos, die initial im `data-src`-Attribut gespeichert ist. */}
                        <source data-src="/Video/Secret-Animation.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    );
}
