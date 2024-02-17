import React from 'react'
interface BadgeProps {
    value:string;
}
const Badge = ({value}:BadgeProps) => {
  return (
    <div>
        <button
            className=" hover:bg-gray-200 text-md  p-2 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">{value}
        </button>
    </div>
  )
}

export default Badge