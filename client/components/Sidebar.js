import React from 'react';
import JobTitleList from './JobTitleList';

export default function Sidebar() {
  return (
    <sidebar>
      <div>
        <h3>Job Postings</h3>
        <JobTitleList />
      </div>
    </sidebar>
  )
}
