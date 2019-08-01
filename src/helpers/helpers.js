export const debounce = (func, ms) => {
    let timer = null;

    return (...args) => {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            func(...args);
            timer = null;
        }, ms);
    };
};
