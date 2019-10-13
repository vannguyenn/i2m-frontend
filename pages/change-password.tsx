import * as React from 'react';
import dynamic from 'next/dynamic';

const ChangePassword = dynamic(() => import('../features/change-password'), {
    ssr: false
})
const ChangePasswordPage: React.FunctionComponent = () => <ChangePassword />

export default ChangePasswordPage;