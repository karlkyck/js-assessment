exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        const divisibleBy = x => num => num % x === 0;
        const divisibleBy3 = divisibleBy(3);
        const divisibleBy5 = divisibleBy(5);

        if (isNaN(num))
            return false;
        else {
            let response = "";

            if (divisibleBy3(num))
                response += "fizz";
            if (divisibleBy5(num))
                response += "buzz";
            if (response.length === 0)
                response = num;

            return response;
        }
    }
};
