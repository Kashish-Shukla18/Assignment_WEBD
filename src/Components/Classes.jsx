import React, { useState } from "react";

const Classes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const classesPerPage = 4; 
    const totalBlocks = 20; 

    
    const classData = Array.from({ length: totalBlocks }, (_, i) => ({
        id: i + 1,
        name: `Class ${i + 1}`,
        description: `Description for Class ${i + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan, urna sed rutrum sagittis, lorem velit aliquam risus, vel dictum odio ligula sit amet orci.`,
    }));

    
    const indexOfLastClass = currentPage * classesPerPage;
    const indexOfFirstClass = indexOfLastClass - classesPerPage;
    const currentClasses = classData.slice(indexOfFirstClass, indexOfLastClass);

    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8 w-full sm:w-3/5">
            {currentClasses.map((classItem) => (
                <div key={classItem.id} className="flex flex-col sm:flex-row mt-10">
                    <div className="max-w-md flex w-full h-fit  sm:w-1/3 sm:h-fit">
                        <img src="image-url" alt="Class" className="w-full h-full bg-slate-500" />
                    </div>
                    <div className="flex flex-col w-full sm:w-4/5">
                        <div className="mt-8 text-left pl-4">
                            <h2 className="text-2xl font-bold">{classItem.name}</h2>
                            <p className="text-lg mt-4">{classItem.description}</p>
                        </div>
                        <div className="mt-8 text-left pl-4">
                            <button className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Practice</button>
                        </div>
                    </div>
                </div>
            ))}


            <div className="mt-8 flex justify-center">
                {Array.from({ length: Math.ceil(totalBlocks / classesPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={`mx-2 py-2 px-4 ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded`}>{i + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default Classes;
