exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        const Cancel = function () {
            this.cancelled = false;

            this.cancel = () => {
                this.cancelled = true;
            };

            this.isCancelled = () => {
                return this.cancelled;
            };
        };

        const cancel = new Cancel();

        const recCount = (start, end, currIndex) => {
            if (!cancel.isCancelled() && currIndex <= end) {
                console.log(currIndex);
                setTimeout(() => recCount(start, end, currIndex + 1), 100);
            }
        };

        recCount(start, end, start);

        return cancel;
    }
};
