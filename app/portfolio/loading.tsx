import React from 'react';
import { Skeleton } from '@/app/components';
import SideBar from '../components/SideBar';
import ProjectActions from './ProjectActions';

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const styles =
  "fixed right-0 top-4 h-full flex flex-col pr-8 gap-10 justify-center";

const LoadingProjectsPage = () => {
  return (
    <div className='mx-2 pt-8 px-14 bg-stone-800 text-red-800'>
    <ProjectActions />
    <div className="grid grid-cols-4 gap-4">
    {projects.map((project) => (
      <div
        key={project}
        className="max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-red-800"
      >
        {/* <img
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
          /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"><Skeleton /></div>
          <p className="text-gray-700 text-base"><Skeleton /></p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Skeleton />
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Skeleton />
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Skeleton />
          </span>
        </div>
      </div>
    ))}
    <SideBar styles={styles} />
  </div>
  </div>
  )
}

export default LoadingProjectsPage