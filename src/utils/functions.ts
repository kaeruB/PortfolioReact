export function addFadeAwayOnScrollEffect(element: HTMLElement, fadingBreakpoint: number) {
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        let opacity;
        if (currentScroll <= fadingBreakpoint) {
            opacity = 1 - currentScroll / fadingBreakpoint;
        } else {
            opacity = 0;
        }

        element.style.opacity = opacity.toString();
    });
}

export function shuffle(a: Array<any>) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
