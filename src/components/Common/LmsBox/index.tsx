import React from 'react';
import "./index.scss";

class LmsBox extends React.Component<{ className?: string }> {
    static Header: React.FC<{ className?: string }> = ({children, className = ''}) => (
        <div className={`lms-box__header ${className}`}>{children}</div>
    );

    static Content: React.FC<{ className?: string }> = ({children, className = ''}) => (
        <div className={`lms-box__content ${className}`}>{children}</div>
    );

    static Title: React.FC<{ className?: string }> = ({children, className = ''}) => (
        // TODO: set dynamic tag
        <h3 className={`lms-box__title ${className}`}>{children}</h3>
    );

    static SubTitle: React.FC<{ className?: string }> = ({children, className = ''}) => (
        <p className={`lms-box__subtitle ${className}`}>{children}</p>
    );

    render() {
        return (
            <section className={`lms-box ${(this.props.className || '')}`}>
                {this.props.children}
            </section>
        );
    }
}

export default LmsBox;
