import React from 'react';

const MarkdownTable: React.ComponentType<React.TableHTMLAttributes<HTMLTableElement>> = (props) => {
    return (
        <div className="table-responsive">
            <table
                className={`table table-bordered table-hover ${props.className || ''}`}
                {...props}
            >
                {props.children}
            </table>
        </div>
    );
};

export default MarkdownTable;
