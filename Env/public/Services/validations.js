const isMail = (request) => {
    let response = false;
    const regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!request.trim().length == 0) {
        if (regOficial.test(request)) {
            const arrayMail = request.split("@");
            if (64 > arrayMail[0].length && 255 > arrayMail[1].length) {
                response = true;
            }
        }
    }
    return response;
}

const isPassword = (request) => {
    let response = false;
    const regPassword = /^[a-z0-9_-]{3,18}$/;
    if (regPassword.test(request)) {
        response = true;
    }
    return response;
}

const isNumber = (request) => {
    let response = true;
    if (isNaN(request)) {
        response = false;
    }
    return response;

}

const limitString = (request, maxLimit) => {
    let islimit = request.length > maxLimit;
    let isempty = request.trim().length == 0;
    if (islimit == true || isempty == true) {
        return false;
    } else {
        return true;
    }
}

const urlParams = (request) => {
    const url = new URL(window.location);
    const response = url.searchParams.get(`${request}`);
    return response;
}

const firstLetterMayus = (request) => {
    const response = request.charAt(0).toUpperCase() + request.slice(1);
    return response;
}

export const Validations = {
    isMail,
    isNumber,
    isPassword,
    urlParams,
    firstLetterMayus,
    limitString
};