exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise((resolve, reject) => resolve(value));
    },

    manipulateRemoteData: function (url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };

            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        })
            .then(response => JSON.parse(response))
            .then(json => json.people.map(person => person.name))
            .then(people => people.sort());
    }
};
