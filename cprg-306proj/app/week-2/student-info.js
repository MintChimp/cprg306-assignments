import React from 'react';
import Link from 'next/link';

// Define the StudentInfo component
const StudentInfo = () => {
    return (
        <div>
            <h1>Lochlan Piercey</h1>
            <p>
                <Link href="https://github.com/MintChimp/cprg306Demo.git">
                    https://github.com
                </Link>
            </p>
        </div>
    );
};

// Export the component as the default export
export default StudentInfo;