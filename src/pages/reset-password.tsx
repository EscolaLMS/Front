import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ResetForm from '../components/Authentication/ResetForm';
import { useLocation } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    //@ts-ignore //TODO fix this
    const { push, query } = useLocation();
    const { token, email } = query;

    React.useEffect(() => {
        !token && push('/');
    }, []);

    return (
        <React.Fragment>
            <PageBanner
                pageTitle="Reset your password"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Reset password"
            />
            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <ResetForm token={String(token)} email={String(email)} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword;
