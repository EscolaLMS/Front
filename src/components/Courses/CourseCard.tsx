import React from 'react'
import Link from 'next/link'

const CourseCard = ({
    id, title, price, overview, profilePhoto, lessons, user, enroled_courses
}) => {
    const enrolled = enroled_courses ? enroled_courses : []
    return (
        <div className="col-lg-6 col-md-12">
            <div className="single-courses-box">
                <div className="courses-image">
                    <Link href="/courses/[id]" as={`/courses/${id}`}>
                        <a className="d-block image">
                            <img src={profilePhoto} alt={title} />
                        </a>
                    </Link>
                    <a href="#" className="fav">
                        <i className="flaticon-heart"></i>
                    </a>
                    <div className="price shadow">${price}</div>
                </div>
                <div className="courses-content">
                    <div className="course-author d-flex align-items-center">
                        <img src={`${user.profilePhoto ? user.profilePhoto : "/images/user1.jpg"}`} className="rounded-circle" alt={user.name} />
                        <span>{user.name}</span>
                    </div>

                    <h3>
                        <Link href="/courses/[id]" as={`/courses/${id}`}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                    
                    <p>{overview.slice(0, 100)}</p>
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                            <i className='flaticon-agenda'></i> {parseInt(lessons)} Lessons
                        </li>
                        <li>
                            <i className='flaticon-people'></i> {enrolled.length} Students
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
