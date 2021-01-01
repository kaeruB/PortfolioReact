export function hideLoader(loaderElementRef: HTMLElement | null): void {
    setTimeout(() => {
        if (loaderElementRef) {
            loaderElementRef.style.display = 'none';
        }
    }, 500);
}