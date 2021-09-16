import React from 'react';
import Link from 'next/link';

const LatestNews = () => {
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">News and Blogs</span>
                    <h2>Our Latest Publications</h2>
                    <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/blog1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Education</a>
                                </Link>
                                <h3>
                                    <Link href="/single-blog-1">
                                        <a>University Admissions Could Face Emergency Controls</a>
                                    </Link>
                                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/blog2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Online</a>
                                </Link>
                                <h3>
                                    <Link href="/single-blog-1">
                                        <a>Online Learning Can Prepare Students For A Fast-Changing</a>
                                    </Link>
                                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 29, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/blog3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Learning</a>
                                </Link>
                                <h3>
                                    <Link href="/single-blog-1">
                                        <a>As Learning Moves Online, Trigger Warnings Must Too</a>
                                    </Link>
                                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 28, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="blog-post-info">
                            <p>Get into details now?​ <Link href="/blog-1"><a>View all posts</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews;