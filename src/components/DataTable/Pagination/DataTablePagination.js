export default {
    name: "DataTablePagination",

    computed: {
        isLastPage() {
            return this.currentPage == this.numberOfPages;
        },

        isFirstPage() {
            return this.currentPage == 1;
        },

        previousPage() {
            return this.currentPage - 1;
        },

        nextPage() {
            return this.currentPage + 1;
        },

        pages() {
            let {numberOfPages: lastPage, currentPage, previousPage, nextPage} = this;
            // will display all pages
            // ex1: 1 2 3 4 5 6 7
            // ex2: 1 2 3 4

            if (lastPage <= 7) {
                return _.range(lastPage)
            }


            // will display the first five pages and the last one
            // ex1: 1 2 3 4 5 ... 8
            // ex2: 1 2 3 4 5 ... 43
            if (lastPage > 7 && currentPage <= 4) {
                return [1, 2, 3, 4, 5, '...', lastPage];
            }

            // will display the first, the previous, the current, the next, and the last page
            // ex1: 1 ... 4 5 6 ... 9
            // ex2: 1 ... 20 21 22 ... 39
            if (lastPage > 8 && (lastPage > currentPage + 3) && lastPage > 4) {
                return [1, '...', previousPage, currentPage, nextPage, '...', lastPage];
            }

            // will display the first page and the last four ones
            // ex1: 1 ... 5 6 7 8
            // ex2: 1 ... 32 33 34 35
            if (lastPage > 7 && lastPage <= currentPage + 3) {
                return [1, '...', lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
            }
        },
    },

    props: {
        numberOfPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        nextButtonText: {
            type: String,
            required: true,
        },
        previousButtonText: {
            type: String,
            required: true,
        }
    },

    methods: {
        setCurrentPage(pageNumber) {
            if ((pageNumber != "...") &&
                (pageNumber != this.currentPage) &&
                (pageNumber >= 0) &&
                (pageNumber <= this.numberOfPages)) {

                this.$emit('pageClicked', pageNumber);
            }
        }
    }
};