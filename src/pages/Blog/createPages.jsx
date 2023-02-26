import PropTypes from "prop-types";

export const createPages = (pages, totalPages, currentPage) => {
    let i = 1;
    const dots = "...";
    if(totalPages > 8) {
        if (currentPage < 4) {
            for (i =1; i <= 5; i++) {
                pages.push(i)
            } 
            pages.push(dots, totalPages-1, totalPages-2);    
        }
        else if (totalPages - currentPage < 6){
            for (i = totalPages-7; i <= totalPages; i++) {
                pages.push(i)
            }}
            else {
                for (i = currentPage-2; i <= currentPage+2; i++) {
                    pages.push(i)
                }
                pages.push(dots, totalPages-1, totalPages-2);
            }
    } else {
        for (i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
    }
}
createPages.PropTypes = {
    pages: PropTypes.number,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
}