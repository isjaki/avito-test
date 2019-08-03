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

export const formatPrice = price => price
    .split('')
    .reverse()
    .map((num, i) => {
        if ((i + 1) % 3 === 0) {
            return ` ${num}`;
        }
        return num;
    })
    .reverse()
    .join('');
