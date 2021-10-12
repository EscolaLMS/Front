const Pagination: React.FC<{
    currentPage: number;
    total: number;
    perPage: number;
    onPage: (page: number) => void;
}> = ({ currentPage, total, perPage, onPage }) => {
    const lastPage = Math.ceil(total / perPage);
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area text-center">
                <a
                    href="#"
                    className="prev page-numbers"
                    onClick={(e) => {
                        e.preventDefault();
                        onPage(currentPage <= 1 ? 1 : currentPage - 1);
                    }}
                >
                    <i className="bx bx-chevrons-left"></i>
                </a>
                {Array.from({ length: lastPage }).map((page, i) => (
                    <a
                        key={`#${i + 1}`}
                        href={`#${i + 1}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onPage(i + 1);
                        }}
                        className={i + 1 === currentPage ? 'page-numbers current' : 'page-numbers'}
                        aria-current="page"
                    >
                        {i + 1}
                    </a>
                ))}
                <a
                    href="#"
                    className="next page-numbers"
                    onClick={(e) => {
                        e.preventDefault();
                        onPage(currentPage === lastPage ? lastPage : currentPage + 1);
                    }}
                >
                    <i className="bx bx-chevrons-right"></i>
                </a>
            </div>
        </div>
    );
};

export default Pagination;
