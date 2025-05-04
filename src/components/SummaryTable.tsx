import React from 'react'

interface SummaryProps {
    data: ReturnType<typeof import("../utils/transformData").transformData>
}

const SummaryTable: React.FC<SummaryProps> = ({ data }) => {
    return (
        <div className='p-4'>
            {
                Object.entries(data).map(([department, info]) => (
                    <div key={department} className='mb-6 border p-4 rounded bg-gray-300'>
                        <h2 className='text-lg font-bold mb-2'>Depaarment: {department}</h2>
                        <p>Male: {info.male} | female : {info.female}</p>
                        <p>Age Range: {info.ageRange}</p>
                        <p>Hair Color: </p>
                        <ul className='list-disc pl-6'>
                            {
                                Object.entries(info.hair).map(([color, count]) => (
                                    <li key={color}>{color} : {count}</li>
                                ))
                            }
                        </ul>
                        <p>Address Summary:</p>
                        <ul className='list-disc pl-6'>
                            {
                                Object.entries(info.addressUser).map(([name, postal]) => (
                                    <li key={name}>{name}: {postal}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default SummaryTable