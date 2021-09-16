import React from 'react';
import Link from 'next/link';

const PopularCoursesTwo = () => {
    return (
        <div className="courses-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go at your own pace</span>
                    <h2>Project Management Master's Program</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box bg-color">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses6.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$39</div>
                            </div>
                            <div className="courses-content">
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PMP® Plus</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 145 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box bg-color">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses7.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$49</div>
                            </div>
                            <div className="courses-content">
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PMP® Renewal Pack</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 100 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box bg-color">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses8.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$59</div>
                            </div>
                            <div className="courses-content">
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Digital Project Manager</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 150 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src="/images/shape15.png" alt="image" />
            </div>
        </div>
    )
}

export default PopularCoursesTwo;