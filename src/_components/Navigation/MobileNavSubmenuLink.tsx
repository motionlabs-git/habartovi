import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ChevronIcon from '../Icons/ChevronIcon'
import { Link as LinkType } from '@/_types/navigation'

interface props {
	id: number
	link: LinkType

	handleExpand: (id: number) => void
	isOpened: boolean
}

const MobileNavSubmenuLink = ({
	link,
	id,

	handleExpand,
	isOpened,
}: props) => {
	let submenuHeight
	if (typeof document !== 'undefined') {
		submenuHeight = document.getElementById('subMenu' + id)?.clientHeight
	}

	return (
		<div className='flex flex-col cursor-pointer' key={id}>
			<p
				onClick={() => handleExpand(id)}
				className='text-2xl py-2 text-white hover:text-white flex justify-between items-center select-none'
			>
				{link.text}

				<ChevronIcon
					className={`
                        ${isOpened ? 'rotate-180' : 'rotate-0'} 
                    
                    duration-200 w-5`}
				/>
			</p>

			<div
				className={` pl-2 overflow-hidden duration-200 `}
				style={{ height: `${isOpened ? `${submenuHeight}px` : '0px'}` }}
			>
				<div id={'subMenu' + id} className='h-fit flex flex-col'>
					{link.submenu?.map((subLink, y) => (
						<React.Fragment key={id + '.' + y}>
							<Link
								className='text-white text-xl py-1 hover:underline select-none'
								href={subLink.link}
							>
								{subLink.text}
							</Link>
						</React.Fragment>
					))}
				</div>
			</div>
			<span className='bg-gray-100/80 w-full mt-2 h-[0.9px] '></span>
		</div>
	)
}

export default MobileNavSubmenuLink
