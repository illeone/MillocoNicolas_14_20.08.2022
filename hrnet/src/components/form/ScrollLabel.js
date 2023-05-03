import { useEffect } from 'react';

const ScrollLabel = () => {
    useEffect(() => {
        function handleScroll() { // Gère le défilement et modifie la couleur des labels en fonction de la position du défilement
        const scrollPosition = window.scrollY;
        const labels = document.querySelectorAll("label[for], .state-label");
        const sectionPositions = [
            { label: "last-name", position: 30 },
            { label: "date-of-birth", position: 140 },
            { label: "start-date", position: 140 },
            { label: "street", position: 280 },
            { label: "city", position: 330 },
            { label: "state-label", position: 440 },
        ];

        labels.forEach((label) => {
            const labelFor = label.getAttribute("for") || label.className;
            const section = sectionPositions.find(
            (section) => section.label === labelFor
            );
            if (section && scrollPosition > section.position) {
            label.style.color = "#6c6c6c";
            } else if (labelFor !== "first-name") {
            label.style.color = "white";
            }
        });
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}
  export default ScrollLabel;