//import DataTableActionColumn from './ActionColumn/DataTableActionColumn.vue';

export default {

    // visible components
    showEntriesLength: true,
    showEntriesInfo: true,
    showSearchFilter: true,
    showPagination: true,

    // column options
    column: {
        orderable: true,
        searchable: true,
    },

    // entry length
    defaultEntryLength: 10,
    entriesLength: [10, 25, 50, 100],
    entriesLengthText: "Show :entries entries",

    // scroll options
    scrollX: true,
    scrollY: true,

    //
    fixedHeader: true,

    // default text
    entriesInfoText: "Showing :first to :last of :total entries",
    entriesInfoTextFiltered: "Showing :first to :last of :totalFiltered (filtered from :total entries)",

    pagination: {
        nextButtonText: "Next",
        previousButtonText: "Previous",
    },
    searchFilterText: "search:",

    // size parameters
    tableMaxHeight: "80vh",
    tableMaxWidth: "100%",

    //
    tableClass: "table table-striped table-hover",

    // attributes
    tableAttributes: {},
    tableWrapperAttributes: {}
};